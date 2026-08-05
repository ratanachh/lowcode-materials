/**
 * Localize antd-lowcode-materials meta/snippets:
 * - category/group → English keys
 * - designer titles/labels/tips/options → i18n(zh, en)
 * - snippet schema demo strings → English only
 * - comments → English
 *
 * Usage: node scripts/localize-meta.js
 */
const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

const ROOT = path.join(__dirname, '..');
const SCRIPTS = __dirname;

const CATEGORY_FROM_ZH = {
  '通用': 'General',
  '基础': 'General',
  '导航': 'Navigation',
  '布局': 'Layout',
  '表单': 'Data Entry',
  '信息输入': 'Data Entry',
  '数据展示': 'Data Display',
  '信息展示': 'Data Display',
  '反馈': 'Feedback',
  '信息反馈': 'Feedback',
  '其他': 'Other',
  '基础组件': 'Basic',
};

function loadJson(name) {
  const p = path.join(SCRIPTS, name);
  if (!fs.existsSync(p)) return {};
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function loadTranslations() {
  const map = {
    ...loadJson('_zh_en_base.json'),
    ...loadJson('_zh_en_part1.json'),
    ...loadJson('_zh_en_part2.json'),
    ...loadJson('_zh_en_part3.json'),
    ...loadJson('_zh_en_full.json'),
  };
  // Prefer entries without Han in English value
  const cleaned = {};
  for (const [k, v] of Object.entries(map)) {
    if (typeof v === 'string' && !hasHan(v)) cleaned[k] = v;
  }
  const comments = loadJson('_zh_en_comments.json');
  return { map: cleaned, comments };
}

function hasHan(str) {
  return /[\u4e00-\u9fff]/.test(str);
}

function translate(str, map) {
  if (!str || !hasHan(str)) return str;
  if (map[str]) return map[str];
  // tip pattern: "prop | chinese"
  const tip = str.match(/^([A-Za-z0-9_.[\]]+)\s*\|\s*(.+)$/);
  if (tip) {
    const enRest = map[tip[2]] || translateLoose(tip[2], map);
    return `${tip[1]} | ${enRest}`;
  }
  return translateLoose(str, map);
}

function translateLoose(str, map) {
  if (map[str]) return map[str];
  // last resort: keep zh and append marker so we can find gaps
  return str;
}

function isImportSource(nodePath) {
  return (
    nodePath.parentPath &&
    (nodePath.parentPath.isImportDeclaration() ||
      nodePath.parentPath.isExportDeclaration())
  );
}

function getObjectKeyName(keyNode) {
  if (!keyNode) return null;
  if (t.isIdentifier(keyNode)) return keyNode.name;
  if (t.isStringLiteral(keyNode)) return keyNode.value;
  return null;
}

/** Walk up to find nearest object property key name */
function nearestPropKey(nodePath) {
  let p = nodePath.parentPath;
  while (p) {
    if (p.isObjectProperty()) {
      return getObjectKeyName(p.node.key);
    }
    p = p.parentPath;
  }
  return null;
}

function makeI18nCall(zh, en) {
  return t.callExpression(t.identifier('i18n'), [
    t.stringLiteral(zh),
    t.stringLiteral(en),
  ]);
}

function transformFile(filePath, translations) {
  const { map, comments } = translations;
  let code = fs.readFileSync(filePath, 'utf8');
  const original = code;

  // Replace comments first (line-based), but ignore // inside string literals
  const lines = code.split('\n');
  const newLines = lines.map((line) => {
    // Find // that is not inside quotes
    let inSingle = false;
    let inDouble = false;
    let inTick = false;
    let escaped = false;
    let idx = -1;
    for (let i = 0; i < line.length - 1; i++) {
      const ch = line[i];
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === '\\' && (inSingle || inDouble || inTick)) {
        escaped = true;
        continue;
      }
      if (!inDouble && !inTick && ch === "'") inSingle = !inSingle;
      else if (!inSingle && !inTick && ch === '"') inDouble = !inDouble;
      else if (!inSingle && !inDouble && ch === '`') inTick = !inTick;
      else if (!inSingle && !inDouble && !inTick && ch === '/' && line[i + 1] === '/') {
        idx = i;
        break;
      }
    }
    if (idx === -1) return line;
    if (line.slice(0, idx).includes('http')) return line;
    const before = line.slice(0, idx);
    const comment = line.slice(idx);
    if (!hasHan(comment)) return line;
    if (comments[comment.trim()]) {
      return before + comments[comment.trim()];
    }
    if (comments[line.trim()]) {
      return comments[line.trim()];
    }
    const body = comment.replace(/^\/\/\s?/, '');
    const en = translate(body, map);
    if (en !== body && !hasHan(en)) return before + '// ' + en;
    return line;
  });
  code = newLines.join('\n');

  // block comments
  code = code.replace(/\/\*[\s\S]*?\*\//g, (block) => {
    if (!hasHan(block)) return block;
    if (comments[block]) return comments[block];
    // translate line by line inside
    return block
      .split('\n')
      .map((l) => {
        if (!hasHan(l)) return l;
        const m = l.match(/^(\s*\*?\s?)(.*)$/);
        if (!m) return l;
        return m[1] + translate(m[2], map);
      })
      .join('\n');
  });

  let ast;
  try {
    ast = parser.parse(code, {
      sourceType: 'module',
      plugins: ['typescript', 'jsx', 'classProperties', 'dynamicImport'],
    });
  } catch (e) {
    console.error('PARSE FAIL', filePath, e.message);
    return false;
  }

  let needsI18nImport = false;
  let mutated = false;

  const relImport = (() => {
    const dir = path.dirname(filePath);
    const utils = path.join(ROOT, 'lowcode', '_utils', 'i18n');
    let rel = path.relative(dir, utils).replace(/\\/g, '/');
    if (!rel.startsWith('.')) rel = './' + rel;
    return rel;
  })();

  traverse(ast, {
    StringLiteral(nodePath) {
      if (isImportSource(nodePath)) return;
      // skip require('...')
      if (
        nodePath.parentPath.isCallExpression() &&
        t.isIdentifier(nodePath.parentPath.node.callee, { name: 'require' })
      ) {
        return;
      }
      const value = nodePath.node.value;
      if (!hasHan(value)) return;

      // already inside i18n() call
      if (
        nodePath.parentPath.isCallExpression() &&
        t.isIdentifier(nodePath.parentPath.node.callee, { name: 'i18n' })
      ) {
        return;
      }

      // already inside type:'i18n' object as zh_CN
      if (nodePath.parentPath.isObjectProperty()) {
        const key = getObjectKeyName(nodePath.parentPath.node.key);
        if (key === 'zh_CN' || key === 'zh-CN') return;
        if (key === 'en_US' || key === 'en-US') {
          // if en still has Han, translate in place
          const en = translate(value, map);
          if (en !== value) {
            nodePath.replaceWith(t.stringLiteral(en));
            mutated = true;
          }
          return;
        }
      }

      const propKey = nearestPropKey(nodePath);

      // category / group → English string only
      if (propKey === 'category' || propKey === 'group') {
        const en = CATEGORY_FROM_ZH[value] || translate(value, map);
        if (en !== value) {
          nodePath.replaceWith(t.stringLiteral(en));
          mutated = true;
        }
        return;
      }

      const en = translate(value, map);
      // If no translation found, still wrap with same text as en fallback for i18n fields
      const enFinal = hasHan(en) && en === value ? value : en;

      // demo content in snippets schema → English only
      if (
        filePath.includes('snippets') &&
        (propKey === 'children' ||
          propKey === 'placeholder' ||
          propKey === 'content' ||
          propKey === 'message' ||
          propKey === 'description' ||
          propKey === 'okText' ||
          propKey === 'cancelText' ||
          propKey === 'text' ||
          propKey === 'label' ||
          (propKey === 'title' && isSchemaPropsTitle(nodePath)) ||
          propKey === 'breadcrumbName' ||
          propKey === 'name' && isSchemaPropsTitle(nodePath))
      ) {
        const onlyEn = hasHan(enFinal) ? enFinal : enFinal;
        // if translation failed keep a readable English placeholder
        nodePath.replaceWith(
          t.stringLiteral(hasHan(onlyEn) ? stripToEnglishFallback(value) : onlyEn),
        );
        mutated = true;
        return;
      }

      // defaultValue that is pure Chinese UI text → English (slot container etc.)
      if (propKey === 'defaultValue' && !value.includes('\n') && value.length < 40) {
        nodePath.replaceWith(
          t.stringLiteral(hasHan(enFinal) ? stripToEnglishFallback(value) : enFinal),
        );
        mutated = true;
        return;
      }

      // initialValue string returns
      if (
        propKey === 'label' &&
        nodePath.parentPath.isObjectProperty() &&
        nodePath.parentPath.parentPath &&
        nodePath.parentPath.parentPath.isObjectExpression()
      ) {
        // could be option label inside initialValue — treat as i18n below
      }

      // template / description long strings that are code → translate Chinese parts only as plain string replace
      if (propKey === 'template' || (value.includes('console.log') && value.includes('//'))) {
        const translated = translateTemplate(value, map);
        if (translated !== value) {
          nodePath.replaceWith(t.stringLiteral(translated));
          mutated = true;
        }
        return;
      }

      // RadioGroupSetter options title etc. → i18n
      // component title, snippet title, label, tip, placeholder (setter), description
      needsI18nImport = true;
      nodePath.replaceWith(makeI18nCall(value, hasHan(enFinal) ? stripToEnglishFallback(value) : enFinal));
      mutated = true;
    },

    // Normalize existing i18n objects from zh-CN to zh_CN
    ObjectProperty(nodePath) {
      const key = getObjectKeyName(nodePath.node.key);
      if (key === 'zh-CN') {
        nodePath.node.key = t.identifier('zh_CN');
        mutated = true;
      }
      if (key === 'en-US') {
        nodePath.node.key = t.identifier('en_US');
        mutated = true;
      }
    },
  });

  if (!mutated && code === original) return false;

  if (needsI18nImport) {
    const body = ast.program.body;
    const has = body.some(
      (n) =>
        t.isImportDeclaration(n) &&
        String(n.source.value).includes('_utils/i18n'),
    );
    if (!has) {
      const imp = t.importDeclaration(
        [t.importSpecifier(t.identifier('i18n'), t.identifier('i18n'))],
        t.stringLiteral(relImport),
      );
      // after other imports
      let lastImport = 0;
      for (let i = 0; i < body.length; i++) {
        if (t.isImportDeclaration(body[i])) lastImport = i + 1;
        else break;
      }
      body.splice(lastImport, 0, imp);
    }
  }

  const out = generate(
    ast,
    { retainLines: false, compact: false, jsescOption: { minimal: true } },
    code,
  ).code;

  fs.writeFileSync(filePath, out.endsWith('\n') ? out : out + '\n', 'utf8');
  return true;
}

function isSchemaPropsTitle(nodePath) {
  let p = nodePath.parentPath;
  const keys = [];
  while (p) {
    if (p.isObjectProperty()) keys.push(getObjectKeyName(p.node.key));
    p = p.parentPath;
  }
  return keys.includes('props') || keys.includes('schema');
}

function stripToEnglishFallback(zh) {
  // very small fallback for untranslated: use common map inline
  const quick = {
    '按钮': 'Button',
    '主按钮': 'Primary Button',
    '次按钮': 'Default Button',
    '危险按钮': 'Danger Button',
    '文字按钮': 'Text Button',
    '虚框按钮': 'Dashed Button',
    '链接按钮': 'Link Button',
    '内容': 'Content',
    '标题': 'Title',
    '请输入': 'Please enter',
    '请选择': 'Please select',
    '菜单名': 'Menu Item',
    '子菜单名': 'SubMenu',
    '选项名': 'Option',
    '选项值': 'Value',
    '姓名': 'Name',
    '年龄': 'Age',
    '地址': 'Address',
    '一级标题': 'Heading 1',
    '二级标题': 'Heading 2',
    '插槽容器': 'Slot Container',
    '插槽标题': 'Slot Title',
    '插槽入参': 'Slot Params',
    '参数名称': 'Argument Name',
  };
  if (quick[zh]) return quick[zh];
  // if tip-like, drop Chinese after |
  if (zh.includes('|')) {
    const [left, ...rest] = zh.split('|');
    return left.trim() + ' | ' + rest.join('|').trim();
  }
  return zh;
}

function translateTemplate(value, map) {
  return value.replace(/\/\/([^\n]*)/g, (full, body) => {
    const trimmed = body.trim();
    if (!hasHan(trimmed)) return full;
    const en = translate(trimmed, map);
    return '// ' + (hasHan(en) ? trimmed : en);
  }).replace(/共 \$\{total\} 条/g, 'Total ${total} items')
    .replace(/共 \$\{total\} 条/g, 'Total ${total} items');
}

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name === '_utils' || name === 'node_modules') continue;
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, acc);
    else if (/\.(ts|tsx)$/.test(name)) acc.push(p);
  }
  return acc;
}

function main() {
  const translations = loadTranslations();
  const keys = Object.keys(translations.map).length;
  console.log('translation keys:', keys);
  if (keys < 500) {
    console.error('Translation maps incomplete. Aborting. keys=', keys);
    process.exit(1);
  }

  const files = [
    ...walk(path.join(ROOT, 'lowcode')),
    ...walk(path.join(ROOT, 'src')),
  ];

  let changed = 0;
  for (const f of files) {
    if (f.endsWith(`${path.sep}i18n.ts`)) continue;
    if (transformFile(f, translations)) {
      changed++;
      console.log('updated', path.relative(ROOT, f));
    }
  }
  console.log('done, files changed:', changed);
}

main();
