define({ "api": [
  {
    "type": "Python",
    "url": "BOOL_portSendData(str_buf,int_bufLen,int_port)",
    "title": "1.5 发送数据",
    "group": "一、自由通讯接口",
    "version": "1.0.0",
    "description": "<p>端口发送数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "str_buf",
            "description": "<p>需要发送的数据</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_bufLen",
            "description": "<p>数据长度</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_port",
            "description": "<p>通道号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_port: 0~3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "BOOL": [
          {
            "group": "BOOL",
            "type": "BOOL",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/portRxTx.cpp",
    "groupTitle": "一、自由通讯接口",
    "name": "PythonBool_portsenddataStr_bufInt_buflenInt_port"
  },
  {
    "type": "Python",
    "url": "BOOL_portSendMoveData(int_sts,double_x,double_y,double_r,int_port=0)",
    "title": "1.6 发送坐标数据",
    "group": "一、自由通讯接口",
    "version": "1.0.0",
    "description": "<p>发送坐标数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_sts",
            "description": "<p>坐标状态</p>"
          },
          {
            "group": "Parameter",
            "type": "doubl",
            "optional": false,
            "field": "double_x",
            "description": "<p>横坐标</p>"
          },
          {
            "group": "Parameter",
            "type": "doubl",
            "optional": false,
            "field": "double_y",
            "description": "<p>纵坐标</p>"
          },
          {
            "group": "Parameter",
            "type": "doubl",
            "optional": false,
            "field": "double_r",
            "description": "<p>弧度</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_port",
            "description": "<p>通道号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_port: 0~3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "BOOL": [
          {
            "group": "BOOL",
            "type": "BOOL",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/portRxTx.cpp",
    "groupTitle": "一、自由通讯接口",
    "name": "PythonBool_portsendmovedataInt_stsDouble_xDouble_yDouble_rInt_port0"
  },
  {
    "type": "Python",
    "url": "BOOL_portSetPara(int_port,str_paraName,str_paraValue)",
    "title": "1.7 设置通讯参数",
    "group": "一、自由通讯接口",
    "version": "1.0.0",
    "description": "<p>设置通讯的相关参数</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_port",
            "description": "<p>通道号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "str_paraName",
            "description": "<p>参数名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "str_paraValue",
            "description": "<p>参数值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_port: 0~3\n    str_cmdName:Net_type,Com,Ip,Port_mine,Port_plc\n    str_paraValue:\n    {\n       Net_type:None;com;tcpip_server;tcpip_client;)\n       Com:串口号，波特率，数据位，停止位，校验 如(3,18400,8,1,2)\n       Ip:192.168.1.3\n       Port_mine:我们做服务器时监听端口：5000\n       Port_plc:我们做客户端时，对方的端口：如6000；\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "BOOL": [
          {
            "group": "BOOL",
            "type": "BOOL",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/portRxTx.cpp",
    "groupTitle": "一、自由通讯接口",
    "name": "PythonBool_portsetparaInt_portStr_paranameStr_paravalue"
  },
  {
    "type": "Python",
    "url": "int_portGetCurRxFrameId(int_port=0)",
    "title": "1.2 获取当前数据帧号",
    "group": "一、自由通讯接口",
    "version": "1.0.0",
    "description": "<p>获取当前数据帧号</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_port",
            "description": "<p>通道号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_port: 0~3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "int": [
          {
            "group": "int",
            "type": "int",
            "optional": false,
            "field": "int",
            "description": "<p>返回当前数据帧号</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/portRxTx.cpp",
    "groupTitle": "一、自由通讯接口",
    "name": "PythonInt_portgetcurrxframeidInt_port0"
  },
  {
    "type": "Python",
    "url": "tuple(BOOL,CRxTxFrame_frame)_portGetRxFrame(int_frameId=-1,int_port=0)",
    "title": "1.4 获取通道数据帧",
    "group": "一、自由通讯接口",
    "version": "1.0.0",
    "description": "<p>根据通道和帧号获取该数据帧</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_frameId",
            "description": "<p>数据帧号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_port",
            "description": "<p>通道号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_port: 0~3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "tuple(BOOL,CRxTxFrame_frame)": [
          {
            "group": "tuple(BOOL,CRxTxFrame_frame)",
            "type": "tuple",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          },
          {
            "group": "tuple(BOOL,CRxTxFrame_frame)",
            "type": "tuple",
            "optional": false,
            "field": "CRxTxFrame_frame",
            "description": "<p>数据帧</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/portRxTx.cpp",
    "groupTitle": "一、自由通讯接口",
    "name": "PythonTupleBoolCrxtxframe_frame_portgetrxframeInt_frameid1Int_port0"
  },
  {
    "type": "Python",
    "url": "tuple(BOOL,str_paraValue)_portExcute(int_port,str_cmdName,str_paraValue)",
    "title": "1.1 执行命令",
    "group": "一、自由通讯接口",
    "version": "1.0.0",
    "description": "<p>用于一些参数设置以及执行动作</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_port",
            "description": "<p>通道号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "str_cmdName",
            "description": "<p>命令名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "str_paraValue",
            "description": "<p>输入值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_port: 0~3\n    str_cmdName:Net_type,Com,Ip,Port_mine,Port_plc,Load,save,Config,Run,stop\n    str_paraValue:输入值\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "tuple(BOOL,str_paraValue)": [
          {
            "group": "tuple(BOOL,str_paraValue)",
            "type": "tuple",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          },
          {
            "group": "tuple(BOOL,str_paraValue)",
            "type": "tuple",
            "optional": false,
            "field": "str_paraValue",
            "description": "<p>函数输出字符</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/portRxTx.cpp",
    "groupTitle": "一、自由通讯接口",
    "name": "PythonTupleBoolStr_paravalue_portexcuteInt_portStr_cmdnameStr_paravalue"
  },
  {
    "type": "Python",
    "url": "tuple(BOOL,str_paraValue)_portGetPara(int_port,str_paraName)",
    "title": "1.3 获取通道参数",
    "group": "一、自由通讯接口",
    "version": "1.0.0",
    "description": "<p>获取通道的相关参数值</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_port",
            "description": "<p>通道号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "str_paraName",
            "description": "<p>参数名称</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_port: 0~3\n    str_cmdName:Net_type,Com,Ip,Port_mine,Port_plc\n    str_paraValue:\n    {\n       Net_type:None;com;tcpip_server;tcpip_client;\n       Com:串口号，波特率，数据位，停止位，校验 如(3,18400,8,1,2)\n       Ip:192.168.1.3\n       Port_mine:我们做服务器时监听端口：5000\n       Port_plc:我们做客户端时，对方的端口：如6000；\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "tuple(BOOL,str_paraValue)": [
          {
            "group": "tuple(BOOL,str_paraValue)",
            "type": "tuple",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          },
          {
            "group": "tuple(BOOL,str_paraValue)",
            "type": "tuple",
            "optional": false,
            "field": "str_paraValue",
            "description": "<p>函数输出字符</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/portRxTx.cpp",
    "groupTitle": "一、自由通讯接口",
    "name": "PythonTupleBoolStr_paravalue_portgetparaInt_portStr_paraname"
  },
  {
    "type": "Python",
    "url": "list_result_sysGrabAndExcute(list_grps,BOOL_newImage,int_nDrawMode=1)",
    "title": "3.1 执行拍照功能",
    "group": "三、系统接口",
    "version": "1.0.0",
    "description": "<p>执行拍照功能</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "list",
            "optional": false,
            "field": "list_grps",
            "description": "<p>使用哪个相机和对应的组号</p>"
          },
          {
            "group": "Parameter",
            "type": "BOOL",
            "optional": false,
            "field": "BOOL_newImage",
            "description": "<p>是否拍照取新图</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_nDrawMode",
            "description": "<p>画图模式</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    list_grps: 调用哪个CCD和工具组组号，如[3,0,5],调用1号相机使用3号工具组，2号相机不启用拍照，3号相机使用5号工具组拍照\n    BOOL_newImage: 0:不取新图，1:取新图\n    int_nDrawMode: 0[不画图],1[画图],0xF0[只抓图，不执行也不画图]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "list_result": [
          {
            "group": "list_result",
            "type": "list",
            "optional": false,
            "field": "list_result",
            "description": "<p>返回一个list的结果。如上边的实例，执行后返回[0,0,5] 说明1号相机拍照失败</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/sys.cpp",
    "groupTitle": "三、系统接口",
    "name": "PythonList_result_sysgrabandexcuteList_grpsBool_newimageInt_ndrawmode1"
  },
  {
    "type": "Python",
    "url": "list_TvMatch_getGlobalMatchResult(int_ccd,int_Group)",
    "title": "3.3 获取拍照结果",
    "group": "三、系统接口",
    "version": "1.0.0",
    "description": "<p>获取所有拍照结果</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_ccd",
            "description": "<p>相机号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_Group",
            "description": "<p>组号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_ccd: 0~8\n    int_Group: 从0开始\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "list_TvMatch": [
          {
            "group": "list_TvMatch",
            "type": "list",
            "optional": false,
            "field": "list_TvMatch",
            "description": "<p>返回一个list的TvMatch对象,TvMatch的参数和方法参考TvMatch类介绍</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/sys.cpp",
    "groupTitle": "三、系统接口",
    "name": "PythonList_tvmatch_getglobalmatchresultInt_ccdInt_group"
  },
  {
    "type": "Python",
    "url": "str_result_getGlobalString(int_ccd,int_group)",
    "title": "3.7 获取二维码信息",
    "group": "三、系统接口",
    "version": "1.0.0",
    "description": "<p>获取二维码信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_ccd",
            "description": "<p>相机号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_Group",
            "description": "<p>组号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_ccd: 0~8\n    int_Group: 从0开始\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "str_result": [
          {
            "group": "str_result",
            "type": "string",
            "optional": false,
            "field": "str_result",
            "description": "<p>返回一个字符串</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/sys.cpp",
    "groupTitle": "三、系统接口",
    "name": "PythonStr_result_getglobalstringInt_ccdInt_group"
  },
  {
    "type": "Python",
    "url": "tuple(BOOL,list_var)_sysGetGlobalVar(str_paraName,int_subIndex)",
    "title": "3.9 获取坐标坐标",
    "group": "三、系统接口",
    "version": "1.0.0",
    "description": "<p>保存坐标到内存里</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "str_varName",
            "description": "<p>相机号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_subIndex",
            "description": "<p>标记号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    str_varName: 支持 \"matchpix\",\"matchmm\"\n    int_subIndex: 从0开始\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "tuple(BOOL,list_var)": [
          {
            "group": "tuple(BOOL,list_var)",
            "type": "tuple",
            "optional": false,
            "field": "BOOL:",
            "description": "<p>函数执行结果 list_var:返回坐标值</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/sys.cpp",
    "groupTitle": "三、系统接口",
    "name": "PythonTupleBoolList_var_sysgetglobalvarStr_paranameInt_subindex"
  },
  {
    "type": "Python",
    "url": "TvMatch_getGlobalTvMatchMM(int_ccd,int_Group)",
    "title": "3.6 获取拍照毫米结果",
    "group": "三、系统接口",
    "version": "1.0.0",
    "description": "<p>获取拍照毫米结果</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_ccd",
            "description": "<p>相机号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_Group",
            "description": "<p>组号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_ccd: 0~8\n    int_Group: 从0开始\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "TvMatch": [
          {
            "group": "TvMatch",
            "type": "obj",
            "optional": false,
            "field": "TvMatch",
            "description": "<p>返回一个TvMatch对象,TvMatch的参数和方法参考TvMatch类介绍</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/sys.cpp",
    "groupTitle": "三、系统接口",
    "name": "PythonTvmatch_getglobaltvmatchmmInt_ccdInt_group"
  },
  {
    "type": "Python",
    "url": "TvMatch_getGlobalTvMatchPixel(int_ccd,int_Group)",
    "title": "3.5 获取拍照像素结果",
    "group": "三、系统接口",
    "version": "1.0.0",
    "description": "<p>获取拍照像素结果</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_ccd",
            "description": "<p>相机号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_Group",
            "description": "<p>组号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_ccd: 0~8\n    int_Group: 从0开始\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "TvMatch": [
          {
            "group": "TvMatch",
            "type": "obj",
            "optional": false,
            "field": "TvMatch",
            "description": "<p>返回一个TvMatch对象,TvMatch的参数和方法参考TvMatch类介绍</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/sys.cpp",
    "groupTitle": "三、系统接口",
    "name": "PythonTvmatch_getglobaltvmatchpixelInt_ccdInt_group"
  },
  {
    "type": "Python",
    "url": "void_sysDrawAndDisp(list_grps,list_bokng,int_para=0)",
    "title": "3.2 画图和显示",
    "group": "三、系统接口",
    "version": "1.0.0",
    "description": "<p>画图和显示</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "list",
            "optional": false,
            "field": "list_grps",
            "description": "<p>使用哪个相机和对应的组号</p>"
          },
          {
            "group": "Parameter",
            "type": "list",
            "optional": false,
            "field": "list_bokng",
            "description": "<p>画图显示对应的结果</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_para",
            "description": "<p>参数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    list_grps: 调用哪个CCD和工具组组号，如[3,0,5],调用1号相机使用3号工具组，2号相机不启用拍照，3号相机使用5号工具组\n    list_bokng: 画图显示对应的结果,如[1,0,1],1号和3号成功，2号失败\n    int_para: 必须为0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "void": [
          {
            "group": "void",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>返回空</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/sys.cpp",
    "groupTitle": "三、系统接口",
    "name": "PythonVoid_sysdrawanddispList_grpsList_bokngInt_para0"
  },
  {
    "type": "Python",
    "url": "void_sysSetGlobalVar(str_varName,int_subIndex,list_value)",
    "title": "3.8 保存坐标",
    "group": "三、系统接口",
    "version": "1.0.0",
    "description": "<p>保存坐标到内存里</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "str_varName",
            "description": "<p>相机号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_subIndex",
            "description": "<p>标记号</p>"
          },
          {
            "group": "Parameter",
            "type": "list",
            "optional": false,
            "field": "list_value",
            "description": "<p>坐标</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    str_varName: 支持 \"matchpix\",\"matchmm\"\n    int_subIndex: 从0开始\n    list_value: size大小为2~5,list顺序是[x,y,rad,scale,score]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "void": [
          {
            "group": "void",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>返回空</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/sys.cpp",
    "groupTitle": "三、系统接口",
    "name": "PythonVoid_syssetglobalvarStr_varnameInt_subindexList_value"
  },
  {
    "type": "Python",
    "url": "BOOL_plcIsLinkOK(int_idxCh0)",
    "title": "2.3 获取plc连接状态",
    "group": "二、plc通讯接口",
    "version": "1.0.0",
    "description": "<p>根据通道获取plc连接状态</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_idxCh0",
            "description": "<p>通道号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_idxCh0: 0~7\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "BOOL": [
          {
            "group": "BOOL",
            "type": "BOOL",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/plc.cpp",
    "groupTitle": "二、plc通讯接口",
    "name": "PythonBool_plcislinkokInt_idxch0"
  },
  {
    "type": "Python",
    "url": "BOOL_plcLinkWriteDXYR(int_idxCh0,double_x,double_y,double_r)",
    "title": "2.8 往通道里面写xyr坐标",
    "group": "二、plc通讯接口",
    "version": "1.0.0",
    "description": "<p>往通道写xyr坐标</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_idxCh0",
            "description": "<p>通道号</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "double_x",
            "description": "<p>横坐标</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "double_y",
            "description": "<p>纵坐标</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "double_r",
            "description": "<p>弧度</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_idxCh0: 0~7\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "BOOL": [
          {
            "group": "BOOL",
            "type": "BOOL",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/plc.cpp",
    "groupTitle": "二、plc通讯接口",
    "name": "PythonBool_plclinkwritedxyrInt_idxch0Double_xDouble_yDouble_r"
  },
  {
    "type": "Python",
    "url": "BOOL_plcLinkWriteExtern(int_idxCh0,int_idx,list_data)",
    "title": "2.9 根据通道和数据号plc写数据",
    "group": "二、plc通讯接口",
    "version": "1.0.0",
    "description": "<p>根据通道和数据号plc写数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_idxCh0",
            "description": "<p>通道号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_idx",
            "description": "<p>数据号</p>"
          },
          {
            "group": "Parameter",
            "type": "list",
            "optional": false,
            "field": "list_data",
            "description": "<p>写plc的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_idxCh0: 0~7\n    int_idx: 0~1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "BOOL": [
          {
            "group": "BOOL",
            "type": "BOOL",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/plc.cpp",
    "groupTitle": "二、plc通讯接口",
    "name": "PythonBool_plclinkwriteexternInt_idxch0Int_idxList_data"
  },
  {
    "type": "Python",
    "url": "BOOL_plcLinkWriteOKNG(int_idxCh0,int_okng)",
    "title": "2.90 写通道结果",
    "group": "二、plc通讯接口",
    "version": "1.0.0",
    "description": "<p>往plc通道写结果</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_idxCh0",
            "description": "<p>通道号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_okng",
            "description": "<p>写结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_idxCh0: 0~7\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "BOOL": [
          {
            "group": "BOOL",
            "type": "BOOL",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/plc.cpp",
    "groupTitle": "二、plc通讯接口",
    "name": "PythonBool_plclinkwriteokngInt_idxch0Int_okng"
  },
  {
    "type": "Python",
    "url": "BOOL_plcLinkWriteXYR(int_idxCh0,double_xPos,double_yPos,double_rPos)",
    "title": "2.92 往plc地址写坐标",
    "group": "二、plc通讯接口",
    "version": "1.0.0",
    "description": "<p>根据通道号写坐标</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_idxCh0",
            "description": "<p>plc地址</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "double_xPos",
            "description": "<p>横坐标</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "double_yPos",
            "description": "<p>纵坐标</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "double_rPos",
            "description": "<p>弧度</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_idxCh0: 0~7\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "BOOL": [
          {
            "group": "BOOL",
            "type": "BOOL",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/plc.cpp",
    "groupTitle": "二、plc通讯接口",
    "name": "PythonBool_plclinkwritexyrInt_idxch0Double_xposDouble_yposDouble_rpos"
  },
  {
    "type": "Python",
    "url": "BOOL_plcLinkWriteXYRS(int_idx,double_x,double_y,double_r,int_sts)",
    "title": "2.93 根据通道和数据号往plc地址写坐标",
    "group": "二、plc通讯接口",
    "version": "1.0.0",
    "description": "<p>根据通道和数据号往plc地址写坐标</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_idxCh0",
            "description": "<p>plc地址</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "double_xPos",
            "description": "<p>横坐标</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "double_yPos",
            "description": "<p>纵坐标</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "double_rPos",
            "description": "<p>弧度</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_idxCh0: 0~7\n    int_sts:0~1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "BOOL": [
          {
            "group": "BOOL",
            "type": "BOOL",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/plc.cpp",
    "groupTitle": "二、plc通讯接口",
    "name": "PythonBool_plclinkwritexyrsInt_idxDouble_xDouble_yDouble_rInt_sts"
  },
  {
    "type": "Python",
    "url": "BOOL_plcSetPara(idxCh0,str_paraName,str_paraValue)",
    "title": "2.95 设置plc参数",
    "group": "二、plc通讯接口",
    "version": "1.0.0",
    "description": "<p>设置plc的参数</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idxCh0",
            "description": "<p>通道号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "str_paraName",
            "description": "<p>参数名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "str_paraValue",
            "description": "<p>参数名称</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    idxCh0: 0~7\n    str_cmdName:net_type,enable_mask,Read_addr,Table_type,Scale,Write_addr,Tcpip,Com,Station,Idle_time\n    str_paraValue:\n    {\n       Net_type:0:不启用PLC-Link 通讯功能;1:内部通讯模式;2:MODBUS RTU 串口;3:MODBUS TCP/IP;\n                4:MC 协议( 网口3E 帧二进制);5:MC 协议( 串口3C 帧格式)\");6:松下计算机链接协议\n       enable_mask:0,1,122\n       Read_addr:读取地址：触发地址,平台地址,参数地址,参数个数\n       Table_type:XYR;UVW;XYX\n       Scale:数据类型,X 比例,Y 比例,R 比例\n       Write_addr:xyr 地址,xyre 地址,数据地址0,数据地址1\n       Tcpip:网口地址+端口号+站地址：192.168.1.3,502,1;\n       Com:串口参数，依次是：串口号，波特率，数据位，停止位，校验(0:无校验，1:奇校验，2:偶校验）如:1,57600,8,1,1\n       Station:Plc 站地址\n       Idle_time:间隔时间，单位ms\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "BOOL": [
          {
            "group": "BOOL",
            "type": "BOOL",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/plc.cpp",
    "groupTitle": "二、plc通讯接口",
    "name": "PythonBool_plcsetparaIdxch0Str_paranameStr_paravalue"
  },
  {
    "type": "Python",
    "url": "BOOL_plcWriteRegs(idxCh0,int_addr,list_data)",
    "title": "2.96 往plc地址写数据",
    "group": "二、plc通讯接口",
    "version": "1.0.0",
    "description": "<p>根据plc地址写数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idxCh0",
            "description": "<p>通道号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_addr",
            "description": "<p>plc地址</p>"
          },
          {
            "group": "Parameter",
            "type": "list",
            "optional": false,
            "field": "list_data",
            "description": "<p>写plc的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    idxCh0: 0~7\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "BOOL": [
          {
            "group": "BOOL",
            "type": "BOOL",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/plc.cpp",
    "groupTitle": "二、plc通讯接口",
    "name": "PythonBool_plcwriteregsIdxch0Int_addrList_data"
  },
  {
    "type": "Python",
    "url": "int_plcLinkWriteRegs(int_addr,list_data)",
    "title": "2.91 往plc地址写数据",
    "group": "二、plc通讯接口",
    "version": "1.0.0",
    "description": "<p>根据plc地址写数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_addr",
            "description": "<p>plc地址</p>"
          },
          {
            "group": "Parameter",
            "type": "list",
            "optional": false,
            "field": "list_data",
            "description": "<p>写plc的数据</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "int": [
          {
            "group": "int",
            "type": "int",
            "optional": false,
            "field": "int",
            "description": "<p>返回写数据的字数，0代表转换失败</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/plc.cpp",
    "groupTitle": "二、plc通讯接口",
    "name": "PythonInt_plclinkwriteregsInt_addrList_data"
  },
  {
    "type": "Python",
    "url": "tuple(BOOL,CRxTxFrame_frame)_plcLinkGetData(int_idxCh0)",
    "title": "2.4 获取plc通道数据",
    "group": "二、plc通讯接口",
    "version": "1.0.0",
    "description": "<p>根据通道获取plc通道数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_idxCh0",
            "description": "<p>通道号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_idxCh0: 0~7\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "tuple(BOOL,CRxTxFrame_frame)": [
          {
            "group": "tuple(BOOL,CRxTxFrame_frame)",
            "type": "tuple",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          },
          {
            "group": "tuple(BOOL,CRxTxFrame_frame)",
            "type": "tuple",
            "optional": false,
            "field": "CRxTxFrame_frame",
            "description": "<p>数据帧</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/plc.cpp",
    "groupTitle": "二、plc通讯接口",
    "name": "PythonTupleBoolCrxtxframe_frame_plclinkgetdataInt_idxch0"
  },
  {
    "type": "Python",
    "url": "tuple(BOOL,list_regdat)_plcReadRegs(idxCh0,int_addr,int_cnts)",
    "title": "2.94 根据通道和plc地址读数据",
    "group": "二、plc通讯接口",
    "version": "1.0.0",
    "description": "<p>根据通道和plc地址读数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idxCh0",
            "description": "<p>通道号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_addr",
            "description": "<p>plc地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_cnts",
            "description": "<p>读取个数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    idxCh0: 0~7\n    int_sts:0~1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "tuple(BOOL,list_regdat)": [
          {
            "group": "tuple(BOOL,list_regdat)",
            "type": "tuple",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          },
          {
            "group": "tuple(BOOL,list_regdat)",
            "type": "tuple",
            "optional": false,
            "field": "list_regdat",
            "description": "<p>返回一个list的数据</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/plc.cpp",
    "groupTitle": "二、plc通讯接口",
    "name": "PythonTupleBoolList_regdat_plcreadregsIdxch0Int_addrInt_cnts"
  },
  {
    "type": "Python",
    "url": "tuple(BOOL,str_paraValue)_plcExcute(idxCh0,str_cmdName,str_paraValue)",
    "title": "2.1 执行命令",
    "group": "二、plc通讯接口",
    "version": "1.0.0",
    "description": "<p>用于一些参数设置以及执行动作</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idxCh0",
            "description": "<p>通道号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "str_cmdName",
            "description": "<p>命令名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "str_paraValue",
            "description": "<p>输入值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    idxCh0: 0~7\n    str_cmdName:Init,Uninit,Backup,Restore,Save,Load,Run,Stop\n    str_paraValue:输入值\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "tuple(BOOL,str_paraValue)": [
          {
            "group": "tuple(BOOL,str_paraValue)",
            "type": "tuple",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          },
          {
            "group": "tuple(BOOL,str_paraValue)",
            "type": "tuple",
            "optional": false,
            "field": "str_paraValue",
            "description": "<p>函数输出字符</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/plc.cpp",
    "groupTitle": "二、plc通讯接口",
    "name": "PythonTupleBoolStr_paravalue_plcexcuteIdxch0Str_cmdnameStr_paravalue"
  },
  {
    "type": "Python",
    "url": "tuple(BOOL,str_paraValue)_plcGetPara(idxCh0,str_paraName)",
    "title": "2.2 获取通道参数",
    "group": "二、plc通讯接口",
    "version": "1.0.0",
    "description": "<p>获取通道的相关参数值</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idxCh0",
            "description": "<p>通道号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "str_paraName",
            "description": "<p>参数名称</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    idxCh0: 0~7\n    str_cmdName:net_type,enable_mask,Read_addr,Table_type,Scale,Write_addr,Tcpip,Com,Station,Idle_time\n    str_paraValue:\n    {\n       Net_type:0:不启用PLC-Link 通讯功能;1:内部通讯模式;2:MODBUS RTU 串口;3:MODBUS TCP/IP;\n                4:MC 协议( 网口3E 帧二进制);5:MC 协议( 串口3C 帧格式)\");6:松下计算机链接协议\n       enable_mask:0,1,122\n       Read_addr:读取地址：触发地址,平台地址,参数地址,参数个数\n       Table_type:XYR;UVW;XYX\n       Scale:数据类型,X 比例,Y 比例,R 比例\n       Write_addr:xyr 地址,xyre 地址,数据地址0,数据地址1\n       Tcpip:网口地址+端口号+站地址：192.168.1.3,502,1;\n       Com:串口参数，依次是：串口号，波特率，数据位，停止位，校验(0:无校验，1:奇校验，2:偶校验）如:1,57600,8,1,1\n       Station:Plc 站地址\n       Idle_time:间隔时间，单位ms\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "tuple(BOOL,str_paraValue)": [
          {
            "group": "tuple(BOOL,str_paraValue)",
            "type": "tuple",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          },
          {
            "group": "tuple(BOOL,str_paraValue)",
            "type": "tuple",
            "optional": false,
            "field": "str_paraValue",
            "description": "<p>函数输出字符</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/plc.cpp",
    "groupTitle": "二、plc通讯接口",
    "name": "PythonTupleBoolStr_paravalue_plcgetparaIdxch0Str_paraname"
  },
  {
    "type": "Python",
    "url": "tuple(BOOL,TvMatch_xyr)_plcLinkTransWord2TvMatch(int_idx,list_data)",
    "title": "2.7 数据转坐标",
    "group": "二、plc通讯接口",
    "version": "1.0.0",
    "description": "<p>将整型数据转换成坐标数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_idx",
            "description": "<p>通道号</p>"
          },
          {
            "group": "Parameter",
            "type": "list",
            "optional": false,
            "field": "list_data",
            "description": "<p>需要转换的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_idx: 0~7\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "tuple(BOOL,TvMatch_xyr)": [
          {
            "group": "tuple(BOOL,TvMatch_xyr)",
            "type": "tuple",
            "optional": false,
            "field": "BOOL",
            "description": "<p>函数执行结果</p>"
          },
          {
            "group": "tuple(BOOL,TvMatch_xyr)",
            "type": "tuple",
            "optional": false,
            "field": "TvMatch_xyr",
            "description": "<p>返回的是坐标的一个对象</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/plc.cpp",
    "groupTitle": "二、plc通讯接口",
    "name": "PythonTupleBoolTvmatch_xyr_plclinktransword2tvmatchInt_idxList_data"
  },
  {
    "type": "Python",
    "url": "tuple(int,list_regdat)_plcLinkReadRegs(int_addr,int_cnts)",
    "title": "2.5 读取plc寄存器数据",
    "group": "二、plc通讯接口",
    "version": "1.0.0",
    "description": "<p>根据plc地址读取数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_addr",
            "description": "<p>plc地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_cnts",
            "description": "<p>读取字个数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "tuple(int,list_regdat)": [
          {
            "group": "tuple(int,list_regdat)",
            "type": "tuple",
            "optional": false,
            "field": "int",
            "description": "<p>返回数据读取字数，0代表读取失败</p>"
          },
          {
            "group": "tuple(int,list_regdat)",
            "type": "tuple",
            "optional": false,
            "field": "list_regdat",
            "description": "<p>数据,是一个list</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/plc.cpp",
    "groupTitle": "二、plc通讯接口",
    "name": "PythonTupleIntList_regdat_plclinkreadregsInt_addrInt_cnts"
  },
  {
    "type": "Python",
    "url": "tuple(int,list_word)_plcLinkTransTvMatch2Word(int_idx,TvMatch_xyr)",
    "title": "2.6 坐标转数据",
    "group": "二、plc通讯接口",
    "version": "1.0.0",
    "description": "<p>讲坐标数据转换成整型数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "int_idx",
            "description": "<p>通道号</p>"
          },
          {
            "group": "Parameter",
            "type": "TvMatch",
            "optional": false,
            "field": "TvMatch_xyr",
            "description": "<p>坐标对象</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    int_idx: 0~7\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "tuple(int,list_word)": [
          {
            "group": "tuple(int,list_word)",
            "type": "tuple",
            "optional": false,
            "field": "int",
            "description": "<p>返回数据读取字数，0代表转换失败</p>"
          },
          {
            "group": "tuple(int,list_word)",
            "type": "tuple",
            "optional": false,
            "field": "list_regdat",
            "description": "<p>数据,是一个list</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/plc.cpp",
    "groupTitle": "二、plc通讯接口",
    "name": "PythonTupleIntList_word_plclinktranstvmatch2wordInt_idxTvmatch_xyr"
  },
  {
    "type": "Python",
    "url": "CRxTxFrame_类",
    "title": "4.2 CRxTxFrame",
    "group": "四、类属性和方法",
    "version": "1.0.0",
    "description": "<p>CRxTxFrame:自由通讯的数据帧</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "eType",
            "description": "<p>数据类型</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "idFnCall",
            "description": "<p>功能调用ID号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "trigCode",
            "description": "<p>触发信号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "nFrameId",
            "description": "<p>帧号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "len",
            "description": "<p>数据帧长度</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eSrc",
            "description": "<p>从哪个通道来,这样就知道从哪个通道写回去</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nProcessSts",
            "description": "<p>处理结果,0表示无效帧，1：新建帧，但数据无效，2：表示帧数据ok，3：处理开始，4：处理完毕</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "nAlgParamFlag",
            "description": "<p>//参数状态: 0无效, 1:ok,数据有效, 2:ok,数据无效</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "x",
            "description": "<p>横坐标</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "r",
            "description": "<p>纵坐标</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "bRev",
            "description": "<p>待更新</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "sRev",
            "description": "<p>待更新</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "wRev",
            "description": "<p>待更新</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "nRev",
            "description": "<p>待更新</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "fRev",
            "description": "<p>待更新</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    \n    \n    \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "method:setArrByte(list_dat)": [
          {
            "group": "method:setArrByte(list_dat)",
            "type": "list",
            "optional": false,
            "field": "list_dat",
            "description": "<p>设置数据帧数据，传入参数为list的整型数据</p>"
          }
        ],
        "return:setArrByte(list_dat)": [
          {
            "group": "return:setArrByte(list_dat)",
            "type": "BOOL",
            "optional": false,
            "field": "BOOL",
            "description": "<p>返回函数执行结果</p>"
          }
        ],
        "method:getArrByte()": [
          {
            "group": "method:getArrByte()",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>传入参数为空</p>"
          }
        ],
        "return:getArrByte()": [
          {
            "group": "return:getArrByte()",
            "type": "list",
            "optional": false,
            "field": "list_dat",
            "description": "<p>返回一个list的整形数组</p>"
          }
        ],
        "method:SetArrString(str_dat)": [
          {
            "group": "method:SetArrString(str_dat)",
            "type": "string",
            "optional": false,
            "field": "str_dat",
            "description": "<p>设置数据帧数据，传入参数为字符串</p>"
          }
        ],
        "return:SetArrString(str_dat)": [
          {
            "group": "return:SetArrString(str_dat)",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>返回参数为空</p>"
          }
        ],
        "method:GetArrString()": [
          {
            "group": "method:GetArrString()",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>传入参数为空</p>"
          }
        ],
        "return:GetArrString()": [
          {
            "group": "return:GetArrString()",
            "type": "string",
            "optional": false,
            "field": "str_dat",
            "description": "<p>返回数据类型为字符串</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/class.cpp",
    "groupTitle": "四、类属性和方法",
    "name": "PythonCrxtxframe_"
  },
  {
    "type": "Python",
    "url": "CTrigCmd_类",
    "title": "4.3 CTrigCmd",
    "group": "四、类属性和方法",
    "version": "1.0.0",
    "description": "<p>CTrigCmd:指令栈</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "iCommPort",
            "description": "<p>端口[必填]</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "iSrcID",
            "description": "<p>DI或UI控件ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "szTrigSrc",
            "description": "<p>触发源[必填]，使用字符串表示，第一个大写，如: Com,Plclink,Ui,Io等</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "szSrcRsv",
            "description": "<p>占位，代码不允许使用szSrcRsv变量</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "szCmdData",
            "description": "<p>指令原始数据<a href=\"%E5%AD%97%E7%AC%A6%E6%A8%A1%E5%BC%8F%E6%88%96modbus%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%A8%A1%E5%BC%8F\">必填</a></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "szCmdAndPara",
            "description": "<p>有可能是转换后的）可读的命令: 参数1，参数2，参数3，参数4，参数5，参数6</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nCmdBytes",
            "description": "<p>[必填]指令数据长度</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "bCmdIsBin",
            "description": "<p>szCmdData的数据是二进制模式(1)还是字符模式(0)</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "fCmdTimeStamp",
            "description": "<p>时间戳(push的时间，自动填充). 单位： 秒</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "nProcessStep",
            "description": "<p>处理步骤</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "szResData",
            "description": "<p>结果数据</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "nResBytes",
            "description": "<p>结果数据长度。若&gt;0, 则为二进制模式。</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "bResIsBin",
            "description": "<p>szResData的数据是二进制模式(1)还是字符模式(0)</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "fResTimeStamp",
            "description": "<p>时间戳. 单位： 秒</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "szResInfo",
            "description": "<p>结果信息</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "szDstRsv",
            "description": "<p>占位，代码不允许使用szDstRsv变量</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "nTargetApp",
            "description": "<p>目标App</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "nTrigCode",
            "description": "<p>触发代码</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "bIsPosOK",
            "description": "<p>平台坐标是否有效 0:无位置数据, 1:ok,数据有效, 2:ng,有位置数据，但解析错误</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "x",
            "description": "<p>平台横坐标</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "y",
            "description": "<p>平台纵坐标</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "deg",
            "description": "<p>平台角度</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "z",
            "description": "<p>平台高度</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "szTableKind",
            "description": "<p>平台类型</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "bSwapXY",
            "description": "<p>对调XY轴, 从plc读后，先处理再对调， 反之，先对调再处理</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "fScalePpmX",
            "description": "<p>坐标x比例，脉冲每mm/deg</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "fScalePpmY",
            "description": "<p>坐标y比例，脉冲每mm/deg</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "fScalePpmDeg",
            "description": "<p>坐标deg比例，脉冲每mm/deg</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "fScalePpmZ",
            "description": "<p>坐标z比例，脉冲每mm/deg</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    \n    \n    \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "method:setTrigSrc(str_dat)": [
          {
            "group": "method:setTrigSrc(str_dat)",
            "type": "string",
            "optional": false,
            "field": "str_dat",
            "description": "<p>设置触发源数据，传入参数为字符串</p>"
          }
        ],
        "return:setTrigSrc(str_dat)": [
          {
            "group": "return:setTrigSrc(str_dat)",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>返回参数为空</p>"
          }
        ],
        "method:setCmdData(str_dat)": [
          {
            "group": "method:setCmdData(str_dat)",
            "type": "string",
            "optional": false,
            "field": "str_dat",
            "description": "<p>设置指令原始数据，传入参数为字符串</p>"
          }
        ],
        "return:setCmdData(str_dat)": [
          {
            "group": "return:setCmdData(str_dat)",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>返回参数为空</p>"
          }
        ],
        "method:setCmdAndPara(str_dat)": [
          {
            "group": "method:setCmdAndPara(str_dat)",
            "type": "string",
            "optional": false,
            "field": "str_dat",
            "description": "<p>设置可读命令，传入参数为字符串</p>"
          }
        ],
        "return:setCmdAndPara(str_dat)": [
          {
            "group": "return:setCmdAndPara(str_dat)",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>返回参数为空</p>"
          }
        ],
        "method:setResData(str_dat)": [
          {
            "group": "method:setResData(str_dat)",
            "type": "string",
            "optional": false,
            "field": "str_dat",
            "description": "<p>设置结果数据，传入参数为字符串</p>"
          }
        ],
        "return:setResData(str_dat)": [
          {
            "group": "return:setResData(str_dat)",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>返回参数为空</p>"
          }
        ],
        "method:setResInfo(str_dat)": [
          {
            "group": "method:setResInfo(str_dat)",
            "type": "string",
            "optional": false,
            "field": "str_dat",
            "description": "<p>设置结果信息，传入参数为字符串</p>"
          }
        ],
        "return:setResInfo(str_dat)": [
          {
            "group": "return:setResInfo(str_dat)",
            "type": "void",
            "optional": false,
            "field": "str_dat",
            "description": "<p>返回数据类型为字符串</p>"
          }
        ],
        "method:setTableKind(str_dat)": [
          {
            "group": "method:setTableKind(str_dat)",
            "type": "string",
            "optional": false,
            "field": "str_dat",
            "description": "<p>设置平台类型，传入参数为字符串</p>"
          }
        ],
        "return:setTableKind(str_dat)": [
          {
            "group": "return:setTableKind(str_dat)",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>返回数据类型为字符串</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/class.cpp",
    "groupTitle": "四、类属性和方法",
    "name": "PythonCtrigcmd_"
  },
  {
    "type": "Python",
    "url": "TvMatch_类",
    "title": "4.1 TvMatch",
    "group": "四、类属性和方法",
    "version": "1.0.0",
    "description": "<p>TvMatch:主要包含坐标信息的类</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "x",
            "description": "<p>横坐标</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "y",
            "description": "<p>纵坐标</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "rad",
            "description": "<p>弧度</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "scale",
            "description": "<p>放大倍数</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "score",
            "description": "<p>得分</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数样例：",
          "content": "{\n    \n    \n    \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "NULL": [
          {
            "group": "NULL",
            "type": "NULL",
            "optional": false,
            "field": "NULL",
            "description": "<p>NULL</p>"
          }
        ]
      }
    },
    "filename": "D:/apidoc_sample/apidoc/class.cpp",
    "groupTitle": "四、类属性和方法",
    "name": "PythonTvmatch_"
  }
] });
