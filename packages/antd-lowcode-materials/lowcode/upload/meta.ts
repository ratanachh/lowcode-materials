import snippets from './snippets';
export default {
  snippets,
  componentName: 'Upload',
  title: "Upload",
  category: "Data Entry",
  props: [{
    title: "Basic",
    display: 'block',
    type: 'group',
    items: [{
      name: 'defaultFileList',
      title: {
        label: "DefaultUploadFile",
        tip: "defaultFileList | Default uploaded file list"
      },
      propType: {
        type: 'arrayOf',
        value: 'object'
      },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [{
                  name: 'name',
                  title: "FileName",
                  setter: 'StringSetter'
                }, {
                  name: 'status',
                  title: "Status",
                  setter: {
                    componentName: 'SelectSetter',
                    props: {
                      options: ['error', 'success', 'done', 'uploading', 'removed'].map(v => ({
                        label: v,
                        value: v
                      }))
                    }
                  }
                }, {
                  name: 'url',
                  title: "Download URL",
                  setter: 'StringSetter'
                }, {
                  name: 'url',
                  title: "Download URL",
                  setter: 'StringSetter'
                }, {
                  name: 'response',
                  title: "ErrorInfo",
                  setter: 'StringSetter'
                }]
              }
            }
          }
        }
      }
    }, {
      name: 'fileList',
      title: {
        label: "Current UploadFile",
        tip: "fileList | Current Upload FileList（Controlled）"
      },
      propType: {
        type: 'arrayOf',
        value: 'object'
      },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [{
                  name: 'name',
                  title: "FileName",
                  setter: 'StringSetter'
                }, {
                  name: 'status',
                  title: "Status",
                  setter: {
                    componentName: 'SelectSetter',
                    props: {
                      options: ['error', 'success', 'done', 'uploading', 'removed'].map(v => ({
                        label: v,
                        value: v
                      }))
                    }
                  }
                }, {
                  name: 'url',
                  title: "Download URL",
                  setter: 'StringSetter'
                }, {
                  name: 'url',
                  title: "Download URL",
                  setter: 'StringSetter'
                }, {
                  name: 'response',
                  title: "ErrorInfo",
                  setter: 'StringSetter'
                }]
              }
            }
          }
        }
      }
    }, {
      name: 'multiple',
      title: {
        label: "Allow multipleFile",
        tip: "multiple | Whether to support multiple file selection, `ie10+` supports it. After opening, hold down ctrl to select multiple files"
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }, {
      name: 'maxCount',
      title: {
        label: "Upload quantity limit",
        tip: "maxCount | Limit the number of uploads. When 1, always replace the current file with the latest uploaded file"
      },
      propType: 'number',
      setter: 'NumberSetter'
    }, {
      name: 'accept',
      title: {
        label: "UploadFileType",
        tip: "accept | Accept Upload FileType, e.g..doc,.docx,application/msword"
      },
      propType: 'string',
      setter: 'StringSetter'
    }, {
      name: 'directory',
      title: {
        label: "FolderUpload",
        tip: "directory | Support UploadFolder"
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }, {
      name: 'disabled',
      title: {
        label: "Disabled",
        tip: "disabled | Whether disabled"
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }]
  }, {
    title: "Advanced",
    display: 'block',
    type: 'group',
    items: [{
      name: 'openFileDialogOnClick',
      title: {
        label: "Open FileModal",
        tip: "openFileDialogOnClick | Click Open FileModal"
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'showUploadList',
      title: {
        label: "ShowUploadList",
        tip: "showUploadList | YesNoShowUpload FileList,"
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'listType',
      title: {
        label: "UploadList style",
        tip: "listType | Built-in style for uploading lists, supporting three basic styles `text`, `picture` and `picture-card`"
      },
      propType: {
        type: 'oneOf',
        value: ['text', 'picture', 'picture-card']
      },
      defaultValue: 'text',
      setter: [{
        componentName: 'RadioGroupSetter',
        props: {
          options: [{
            title: "Text",
            value: 'text'
          }, {
            title: "Image",
            value: 'picture'
          }, {
            title: "ImageCard",
            value: 'picture-card'
          }]
        }
      }, 'VariableSetter']
    }, {
      name: 'iconRender',
      title: {
        label: "CustomIcon",
        tip: "iconRender | CustomShow icon"
      },
      propType: 'func',
      setter: {
        componentName: 'SlotSetter',
        title: "Custom icon slot",
        initialValue: {
          type: 'JSSlot',
          params: ['file', 'listType'],
          value: []
        }
      }
    }, {
      name: 'itemRender',
      title: {
        label: "CustomList item",
        tip: "itemRender | CustomUploadList item"
      },
      propType: 'func',
      setter: {
        componentName: 'SlotSetter',
        title: "Custom list item slot",
        initialValue: {
          type: 'JSSlot',
          params: ['originNode', 'file', 'fileList', 'actions'],
          value: []
        }
      }
    }, {
      name: 'progress',
      title: {
        label: "CustomProgress",
        tip: "progress | CustomProgress style"
      },
      propType: 'object',
      setter: 'JsonSetter'
    }]
  }, {
    title: "Upload parameters",
    display: 'block',
    type: 'group',
    items: [{
      name: 'action',
      title: {
        label: "UploadAddress",
        tip: "action | upload address or method"
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'func']
      },
      setter: ['StringSetter', 'FunctionSetter', 'VariableSetter']
    }, {
      name: 'name',
      title: {
        label: "File parameter name",
        tip: "name | File parameter name sent to the background"
      },
      propType: 'string',
      setter: 'StringSetter'
    }, {
      name: 'method',
      title: {
        label: "RequestMethod",
        tip: "method | http method of upload request"
      },
      propType: {
        type: 'oneOf',
        value: ['get', 'post', 'put', 'head', 'options', 'patch', 'delete']
      },
      defaultValue: 'post',
      setter: 'StringSetter'
    }, {
      name: 'headers',
      title: {
        label: "Upload request header",
        tip: "headers | Set upload request headers, valid for IE10 and above"
      },
      propType: 'object',
      setter: 'JsonSetter'
    }, {
      name: 'withCredentials',
      title: {
        label: "Carrying cookies",
        tip: "withCredentials | Whether to carry cookies when uploading requests"
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }, {
      name: 'data',
      title: {
        label: "extra parameters",
        tip: "data | Upload the additional parameters required or return the method for uploading additional parameters"
      },
      propType: {
        type: 'oneOfType',
        value: ['object', 'func']
      },
      setter: ['JsonSetter', {
        componentName: 'FunctionSetter',
        props: {
          template: 'onData(file,${extParams}){\n// Additional parameters required for upload\nreturn {};\n}'
        }
      }, 'VariableSetter']
    }]
  }, {
    title: "callback",
    display: 'block',
    type: 'group',
    items: [{
      name: 'beforeUpload',
      title: {
        label: "Upload before callback",
        tip: "beforeUpload | UploadFile before callback"
      },
      propType: 'func',
      setter: {
        componentName: 'FunctionSetter',
        props: {
          template: 'beforeUpload(file,fileList,${extParams}){\n// Hook before uploading files\nreturn false;\n}'
        }
      }
    }, {
      name: 'customRequest',
      title: {
        label: "CustomUpload",
        tip: "customRequest | Customize your own upload implementation by overriding the default upload behavior"
      },
      propType: 'func',
      setter: 'FunctionSetter'
    }, {
      name: 'isImageUrl',
      title: {
        label: "YesNo Image",
        tip: "isImageUrl | Customize whether thumbnails are displayed using the <img /> tag"
      },
      propType: 'func',
      setter: {
        componentName: 'FunctionSetter',
        props: {
          template: 'isImageUrl(file,${extParams}){\n// Determine whether it is a picture\nreturn true;\n}'
        }
      }
    }, {
      name: 'previewFile',
      title: {
        label: "Custom file preview",
        tip: "previewFile | Custom file preview logic"
      },
      propType: 'func',
      setter: 'FunctionSetter'
    }]
  }],
  configure: {
    component: {
      isContainer: true
    },
    supports: {
      style: true,
      events: [{
        name: 'onChange',
        template: "onChange({file,fileList,event},${extParams}){\n// UploadFileChange on callback\nconsole.log('onChange',file,fileList,event);}"
      }, {
        name: 'onPreview',
        template: "onPreview(file,${extParams}){\n// Callback when clicking a file link or preview icon\nconsole.log('onPreview',file);}"
      }, {
        name: 'onRemove',
        template: "onRemove(file,${extParams}){\n// Callback when clicking to remove a file\nconsole.log('onRemove',file);}"
      }, {
        name: 'onDownload',
        template: "onDownload(file,${extParams}){\n// Callback when clicking to download a file\nconsole.log('onDownload',file);}"
      }]
    }
  }
};
