const fs = require('fs');
const path = require('path');
const {
  LEGACY_META_EXPORT_NAME,
  SCOPED_META_EXPORT_NAME,
} = require('./meta-export-name');

const ROOT = path.join(__dirname, '..');
const TARGETS = [
  'build/lowcode/meta.js',
  'build/lowcode/assets-prod.json',
  'build/lowcode/assets-daily.json',
  'build/lowcode/assets-dev.json',
  'lowcode_lib/meta.js',
  'lowcode_es/meta.js',
];

let changed = 0;
for (const relativePath of TARGETS) {
  const filePath = path.join(ROOT, relativePath);
  if (!fs.existsSync(filePath)) {
    continue;
  }
  const before = fs.readFileSync(filePath, 'utf8');
  if (!before.includes(SCOPED_META_EXPORT_NAME)) {
    continue;
  }
  const after = before.split(SCOPED_META_EXPORT_NAME).join(LEGACY_META_EXPORT_NAME);
  fs.writeFileSync(filePath, after);
  changed += 1;
  console.log(`restored meta export name in ${relativePath}`);
}

if (changed === 0) {
  console.log(`no files needed renaming (${LEGACY_META_EXPORT_NAME})`);
}
