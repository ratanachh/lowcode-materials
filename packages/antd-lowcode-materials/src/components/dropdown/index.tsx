import React from 'react';
import { Dropdown as OriginalDropdown } from 'antd';
import { withSingleChild } from '../../utils/hoc';

const Dropdown: any = (props: any) => {
  const innerProps: any = {};
  if (props.__designMode === 'design') {
    // Force visible in lowcode editor; control handed to engine
    innerProps.open = true;
  }
  return <OriginalDropdown {...props} {...innerProps} />;
};
export default withSingleChild(Dropdown, ['children', 'overlay']);
