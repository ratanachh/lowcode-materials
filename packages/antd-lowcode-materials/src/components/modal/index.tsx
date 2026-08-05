import React from 'react';
import { Modal as OriginalModal } from 'antd';

const Modal: any = (props: any) => {
  const innerProps: any = {};
  if (props.__designMode === 'design') {
    // Force visible in lowcode editor; control handed to engine
    innerProps.open = true;
  }
  return <OriginalModal {...props} {...innerProps} />;
};
Modal.info = OriginalModal.info;
Modal.success = OriginalModal.success;
Modal.error = OriginalModal.error;
Modal.warning = OriginalModal.warning;
Modal.warn = OriginalModal.warn;
Modal.confirm = OriginalModal.confirm;
export default Modal;
