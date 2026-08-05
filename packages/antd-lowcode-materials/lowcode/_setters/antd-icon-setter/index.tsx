import React, { useState, useEffect, Component } from 'react';
// Setter uses @alifd/next to stay consistent with editor
import { Input, Icon as NextIcon, Radio, Balloon, Search } from '@alifd/next';
import { get } from '../../_utils/utils';
import './style.less';

type IconGroup = 'outlined' | 'filled' | 'two-tone' | 'iconfont';
const IconGroupNameMap: Record<IconGroup, string> = {
  outlined: 'Outlined',
  filled: 'Filled',
  'two-tone': 'Two-tone',
  iconfont: 'Iconfont',
};

function getIconfontIconList() {
  const iframe = document.querySelector<HTMLIFrameElement>(
    'iframe.lc-simulator-content-frame',
  )!;

  // iconfont JS injects SVG elements into the page
  const symbols = Array.prototype.slice.call(
    iframe.contentDocument!.querySelectorAll(
      'svg[style="position: absolute; width: 0px; height: 0px; overflow: hidden;"][aria-hidden="true"] > symbol',
    ),
  );

  return symbols.map((symbol) => {
    const { id } = symbol;
    return {
      name: id,
      group: 'iconfont',
      icon: () => (
        <span role="img" className="anticon">
          <svg
            viewBox="64 64 896 896"
            width="1em"
            height="1em"
            fill="currentColor"
            dangerouslySetInnerHTML={{
              __html: symbol.innerHTML,
            }}
          />
        </span>
      ),
    };
  });
}

function getAntdIconList() {
  const iframe = document.querySelector<HTMLIFrameElement>(
    'iframe.lc-simulator-content-frame',
  );
  const antdIcons = get(iframe, 'contentWindow.icons', {}) as Record<
    string,
    any
  >;

  return Object.keys(antdIcons)
    .map((key) => {
      const item = (antdIcons as any)[key];
      if (typeof item !== 'object') {
        return null;
      }
      const name = item?.displayName ?? item?.render?.displayName ?? key;
      let group: IconGroup = 'outlined';
      const lowercaseName = name.toLowerCase();
      if (/outlined$/.test(lowercaseName)) {
        group = 'outlined';
      } else if (/filled$/.test(lowercaseName)) {
        group = 'filled';
      } else if (/twotone$/.test(lowercaseName)) {
        group = 'two-tone';
      } else {
        return null;
      }
      return {
        name,
        group,
        icon: item,
      };
    })
    .filter(Boolean);
}

function getIconList() {
  const iconfontIconList = getIconfontIconList();
  const antdIconList = getAntdIconList();
  return [...antdIconList, ...iconfontIconList];
}

const Icon = (props: any) => {
  const { type, icons: iconMap = {}, ...rest } = props;
  const Comp = iconMap[type];
  if (!Comp) return null;
  return <Comp {...rest} />;
};

interface AntdIconSetterProps {
  value: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  hasClear: boolean;
  onChange: (icon: string | object) => undefined;
}

const Tooltip = Balloon.Tooltip;

const AntdIconSetter = (props: AntdIconSetterProps) => {
  const [search, setSearch] = useState('');
  const [icons, setIcons] = useState<Record<string, any>>({});
  const [groups, setGroups] = useState<
    {
      group: IconGroup;
      list: any[];
    }[]
  >([]);
  const [selectedGroup, setSelectedGroup] = useState<IconGroup>('outlined');
  const [firstLoad, setFirstLoad] = useState(true);
  const [list, setList] = useState<any[]>([]);
  const {
    value,
    defaultValue,
    type,
    onChange,
    placeholder,
    hasClear,
  } = props;
  const _value =
    typeof value === 'object' ? (value as any)?.props?.type : value;
  if (firstLoad && defaultValue && typeof value === 'undefined') {
    onChange(defaultValue);
    setFirstLoad(false);
  }
  const handleChange = (icon: string) => {
    if (type === 'string') {
      onChange(icon);
    } else if (type === 'node') {
      onChange({
        componentName: 'Icon',
        props: {
          type: icon,
        },
      });
    }
  };
  useEffect(() => {
    const iconList = getIconList();
    const nextGroups: {
      group: IconGroup;
      list: any[];
    }[] = [];
    const nextIcons: any = {};
    iconList.forEach((iconItem) => {
      const { group } = iconItem!;
      if (nextGroups.every((g) => g.group !== group)) {
        nextGroups.push({
          group: group as IconGroup,
          list: [],
        });
      }
      const target = nextGroups.find((g) => g.group === group)!;
      target.list.push(iconItem);
      nextIcons[iconItem!.name] = iconItem?.icon;
    });
    setIcons(nextIcons);
    setGroups(nextGroups);
    setSelectedGroup(nextGroups[0]?.group);
  }, []);
  useEffect(() => {
    const currentGroup = groups.find((g) => g.group === selectedGroup);
    setList(
      (currentGroup?.list ?? []).filter((iconItem) => {
        return search
          ? iconItem.name.toLowerCase().indexOf(search.toLowerCase()) > -1
          : true;
      }),
    );
  }, [selectedGroup, search, groups]);
  const currentIcon = (
    <Icon type={_value} icons={icons} style={{ fontSize: 16 }} />
  );
  const clearIcon = hasClear && (
    <NextIcon
      size="xs"
      id="icon-clear"
      type="delete-filling"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleChange('');
      }}
    />
  );
  const triggerNode = (
    <div>
      <Input
        placeholder={placeholder}
        addonTextBefore={currentIcon}
        onChange={handleChange}
        value={_value}
        defaultValue={defaultValue}
        readOnly
        addonTextAfter={clearIcon}
      />
    </div>
  );
  return (
    <div className="lc-antd-icon-setter">
      <Balloon
        className="lc-antd-icon-setter-balloon"
        trigger={triggerNode}
        needAdjust
        triggerType="click"
        closable={false}
        alignEdge
        align="lt"
        style={{
          width: 300,
        }}
      >
        <div className="lc-antd-icon-setter-header">
          <Radio.Group
            className="lc-antd-icon-setter-header-style"
            shape="button"
            value={selectedGroup}
            onChange={(nextValue) => setSelectedGroup(nextValue as any)}
          >
            {groups.map((groupItem) => (
              <Radio key={groupItem.group} value={groupItem.group}>
                {IconGroupNameMap[groupItem.group]}
              </Radio>
            ))}
          </Radio.Group>
          <Search
            className="lc-antd-icon-setter-header-search"
            size="medium"
            shape="simple"
            onChange={setSearch}
          />
        </div>
        <div className="lc-antd-icon-setter-content">
          <ul className="lc-antd-icon-setter-list">
            {list.map((iconItem) => (
              <li
                key={iconItem.name}
                className="lc-antd-icon-setter-list-item"
                onClick={() => handleChange(iconItem.name)}
              >
                <Tooltip
                  v2
                  trigger={<Icon type={iconItem.name} icons={icons} />}
                  popupStyle={{
                    backgroundColor: '#fff',
                  }}
                >
                  {iconItem.name}
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </Balloon>
    </div>
  );
};

AntdIconSetter.defaultProps = {
  value: undefined,
  type: 'string',
  defaultValue: '',
  hasClear: false,
  placeholder: 'Click to select icon',
  onChange: () => undefined,
};

// Due to the issue below, setter must be a class component
// http://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-engine/issues/109046
export default class extends Component<AntdIconSetterProps> {
  render() {
    return <AntdIconSetter {...this.props} />;
  }
}
