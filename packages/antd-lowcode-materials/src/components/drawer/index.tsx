import React from 'react';
import { Drawer as OriginalDrawer } from 'antd';

const Drawer: any = (props: any) => {
  const innerProps: any = {};
  if (props.__designMode === 'design') {
    // Force visible in lowcode editor; control handed to engine
    innerProps.open = true;
  }
  return <OriginalDrawer {...props} {...innerProps} />;
};
export default Drawer;
