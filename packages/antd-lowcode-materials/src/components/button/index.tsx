import React, { forwardRef, Ref } from 'react';
import { Button as OriginalButton } from 'antd';

const Button: any = (props: any, ref: Ref<any>) => {
  const innerProps: any = {};
  if (!props.href?.trim() || props.__designMode === 'design') {
    // Prevent href navigation clicks inside the lowcode editor
    innerProps.href = undefined;
  }
  return <OriginalButton {...props} {...innerProps} ref={ref} />;
};
export default forwardRef(Button);
