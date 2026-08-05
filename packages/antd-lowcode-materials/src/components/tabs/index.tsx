import React, { Component } from 'react';
import { TabPaneProps, Tabs as OriginalTabs } from 'antd';
import { warning } from '../../utils/warning'
import type { Tab } from 'rc-tabs/lib/interface';

class Tabs extends Component<any> {
  state = {
    activeKey: this.props.activeKey ?? this.props.defaultActiveKey,
  };

  private _handleChange = (key: string) => {
    this.setActiveKey(key);
  };

  // In editor: this.$(refId).setActiveKey(key)
  setActiveKey = (key: string) => {
    const { onChange = () => {} } = this.props;
    this.setState({ activeKey: key });
    onChange(key);
  };

  // In editor: this.$(refId).getActiveKey()
  getActiveKey = () => {
    return this.state.activeKey;
  };

  render() {
    const { props } = this;
    const { activeKey } = this.state;

    const { children } = props

    let items = props.items

    // If props.items exists, only use props.items
    // Compat: derive props.items from children
    if (!items.items && Array.isArray(children) && children.length > 0) {
      warning('Tabs.TabPane is deprecated. Please use `items` directly.')
      items = children.map((node: React.ReactElement<TabPaneProps>) => {
        if (React.isValidElement(node)) {
          const { key, props: nodeProps } = node;
          const { tab, ...restProps } = nodeProps || {};
          const item: Tab = {
            key: String(key),
            ...restProps,
            label: tab,
          };
          return item;
        }
        return null
      }).filter(Boolean)
    }

    return (
      <OriginalTabs
        {...props}
        items={items}
        activeKey={activeKey}
        onChange={this._handleChange}
      />
    );
  }
}

(Tabs as any).TabPane = OriginalTabs.TabPane;

export default Tabs;
