import snippets from './snippets';
import { i18n } from "../_utils/i18n";
export default {
  snippets,
  componentName: 'Upload',
  title: i18n("上传", "Upload"),
  category: "Data Entry",
  props: [{
    title: i18n("基本", "Basic"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'defaultFileList',
      title: {
        label: i18n("默认上传文件", "DefaultUploadFile"),
        tip: i18n("defaultFileList | 默认已经上传的文件列表", "defaultFileList | Default uploaded file list")
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
                  title: i18n("文件名", "FileName"),
                  setter: 'StringSetter'
                }, {
                  name: 'status',
                  title: i18n("状态", "Status"),
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
                  title: i18n("下载地址", "Download URL"),
                  setter: 'StringSetter'
                }, {
                  name: 'url',
                  title: i18n("下载地址", "Download URL"),
                  setter: 'StringSetter'
                }, {
                  name: 'response',
                  title: i18n("错误信息", "ErrorInfo"),
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
        label: i18n("当前上传文件", "Current UploadFile"),
        tip: i18n("fileList | 当前上传的文件列表（受控）", "fileList | Current Upload FileList（Controlled）")
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
                  title: i18n("文件名", "FileName"),
                  setter: 'StringSetter'
                }, {
                  name: 'status',
                  title: i18n("状态", "Status"),
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
                  title: i18n("下载地址", "Download URL"),
                  setter: 'StringSetter'
                }, {
                  name: 'url',
                  title: i18n("下载地址", "Download URL"),
                  setter: 'StringSetter'
                }, {
                  name: 'response',
                  title: i18n("错误信息", "ErrorInfo"),
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
        label: i18n("支持多选文件", "Allow multipleFile"),
        tip: i18n("multiple | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件", "multiple | Whether to support multiple file selection, `ie10+` supports it. After opening, hold down ctrl to select multiple files")
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }, {
      name: 'maxCount',
      title: {
        label: i18n("上传数量限制", "Upload quantity limit"),
        tip: i18n("maxCount | 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件", "maxCount | Limit the number of uploads. When 1, always replace the current file with the latest uploaded file")
      },
      propType: 'number',
      setter: 'NumberSetter'
    }, {
      name: 'accept',
      title: {
        label: i18n("上传文件类型", "UploadFileType"),
        tip: i18n("accept | 接受上传的文件类型, 例如 .doc,.docx,application/msword", "accept | Accept Upload FileType, e.g..doc,.docx,application/msword")
      },
      propType: 'string',
      setter: 'StringSetter'
    }, {
      name: 'directory',
      title: {
        label: i18n("文件夹上传", "FolderUpload"),
        tip: i18n("directory | 支持上传文件夹", "directory | Support UploadFolder")
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }, {
      name: 'disabled',
      title: {
        label: i18n("是否禁用", "Disabled"),
        tip: i18n("disabled | 是否为禁用状态", "disabled | Whether disabled")
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }]
  }, {
    title: i18n("高级", "Advanced"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'openFileDialogOnClick',
      title: {
        label: i18n("打开文件对话框", "Open FileModal"),
        tip: i18n("openFileDialogOnClick | 点击打开文件对话框", "openFileDialogOnClick | Click Open FileModal")
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'showUploadList',
      title: {
        label: i18n("显示上传列表", "ShowUploadList"),
        tip: i18n("showUploadList | 是否显示上传的文件列表,", "showUploadList | YesNoShowUpload FileList,")
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    }, {
      name: 'listType',
      title: {
        label: i18n("上传列表样式", "UploadList style"),
        tip: i18n("listType | 上传列表的内建样式，支持三种基本样式 `text`, `picture` 和 `picture-card`", "listType | Built-in style for uploading lists, supporting three basic styles `text`, `picture` and `picture-card`")
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
            title: i18n("文本", "Text"),
            value: 'text'
          }, {
            title: i18n("图片", "Image"),
            value: 'picture'
          }, {
            title: i18n("图片卡片", "ImageCard"),
            value: 'picture-card'
          }]
        }
      }, 'VariableSetter']
    }, {
      name: 'iconRender',
      title: {
        label: i18n("自定义图标", "CustomIcon"),
        tip: i18n("iconRender | 自定义显示 icon", "iconRender | CustomShow icon")
      },
      propType: 'func',
      setter: {
        componentName: 'SlotSetter',
        title: i18n("自定义图标插槽", "Custom icon slot"),
        initialValue: {
          type: 'JSSlot',
          params: ['file', 'listType'],
          value: []
        }
      }
    }, {
      name: 'itemRender',
      title: {
        label: i18n("自定义列表项", "CustomList item"),
        tip: i18n("itemRender | 自定义上传列表项", "itemRender | CustomUploadList item")
      },
      propType: 'func',
      setter: {
        componentName: 'SlotSetter',
        title: i18n("自定义列表项插槽", "Custom list item slot"),
        initialValue: {
          type: 'JSSlot',
          params: ['originNode', 'file', 'fileList', 'actions'],
          value: []
        }
      }
    }, {
      name: 'progress',
      title: {
        label: i18n("自定义进度条", "CustomProgress"),
        tip: i18n("progress | 自定义进度条样式", "progress | CustomProgress style")
      },
      propType: 'object',
      setter: 'JsonSetter'
    }]
  }, {
    title: i18n("上传参数", "Upload parameters"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'action',
      title: {
        label: i18n("上传地址", "UploadAddress"),
        tip: i18n("action | 上传的地址或方法", "action | upload address or method")
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'func']
      },
      setter: ['StringSetter', 'FunctionSetter', 'VariableSetter']
    }, {
      name: 'name',
      title: {
        label: i18n("文件参数名", "File parameter name"),
        tip: i18n("name | 发到后台的文件参数名", "name | File parameter name sent to the background")
      },
      propType: 'string',
      setter: 'StringSetter'
    }, {
      name: 'method',
      title: {
        label: i18n("请求Method", "RequestMethod"),
        tip: i18n("method | 上传请求的 http method", "method | http method of upload request")
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
        label: i18n("上传请求头", "Upload request header"),
        tip: i18n("headers | 设置上传的请求头部，IE10 以上有效", "headers | Set upload request headers, valid for IE10 and above")
      },
      propType: 'object',
      setter: 'JsonSetter'
    }, {
      name: 'withCredentials',
      title: {
        label: i18n("携带Cookie", "Carrying cookies"),
        tip: i18n("withCredentials | 上传请求时是否携带 cookie", "withCredentials | Whether to carry cookies when uploading requests")
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    }, {
      name: 'data',
      title: {
        label: i18n("额外参数", "extra parameters"),
        tip: i18n("data | 上传所需额外参数或返回上传额外参数的方法", "data | Upload the additional parameters required or return the method for uploading additional parameters")
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
    title: i18n("回调函数", "callback"),
    display: 'block',
    type: 'group',
    items: [{
      name: 'beforeUpload',
      title: {
        label: i18n("上传前回调", "Upload before callback"),
        tip: i18n("beforeUpload | 上传文件之前的回调函数", "beforeUpload | UploadFile before callback")
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
        label: i18n("自定义上传", "CustomUpload"),
        tip: i18n("customRequest | 通过覆盖默认的上传行为，可以自定义自己的上传实现", "customRequest | Customize your own upload implementation by overriding the default upload behavior")
      },
      propType: 'func',
      setter: 'FunctionSetter'
    }, {
      name: 'isImageUrl',
      title: {
        label: i18n("是否为图片", "YesNo Image"),
        tip: i18n("isImageUrl | 自定义缩略图是否使用 <img /> 标签进行显示", "isImageUrl | Customize whether thumbnails are displayed using the <img /> tag")
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
        label: i18n("自定义文件预览", "Custom file preview"),
        tip: i18n("previewFile | 自定义文件预览逻辑", "previewFile | Custom file preview logic")
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
