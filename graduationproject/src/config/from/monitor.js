// 土地信息
export const initlandInfoFormItem =  {
    itemList: [
      {
        label: "土地名称：",
        key: "landName",
        prop: "landName",
        width: "calc(100% / 2)",
        readonly:true
      },
      {
        label: "土地位置：",
        key: "landPlace",
        prop: "landPlace",
        width: "calc(100% / 2)",
      },
      {
        label: "土地面积：",
        key: "landArea",
        prop: "landArea",
        width: "calc(100% / 2)",
      },
      {
        label: "土地所有者：",
        key: "landOwner",
        prop: "landOwner",
        width: "calc(100% / 2)",
      },
    ],
    rules: {
      landName: [
        {
          required: true,
          message: "请输入土地名称",
          trigger: "blur",
        },
      ],
      landPlace: [
        {
          required: true,
          message: "请输入土地位置",
          trigger: "blur",
        },
      ],
      landArea: [
        {
          required: true,
          message: "请输入土地面积",
          trigger: "blur",
        },
      ],
      landOwner: [
        {
          required: true,
          message: "请输入土地所有者",
          trigger: "blur",
        },
      ],
    },
    ruleForm: {
      landName: "",
      landPlace: "",
      landArea: "",
      landOwner: "",
    },
};
// 传感器信息
export const initsensorInfoFormItem =  {
    itemList: [
      {
        label: "传感器名称：",
        key: "sensorName",
        prop: "sensorName",
        width: "calc(100% / 2)",
      },
      {
        label: "所属土地：",
        key: "belongLand",
        prop: "belongLand",
        width: "calc(100% / 2)",
      },
      {
        label: "传感器类型：",
        key: "sensorType",
        prop: "sensorType",
        width: "calc(100% / 2)",
      },
      {
        label: "安装时间：",
        key: "installDate",
        prop: "installDate",
        width: "calc(100% / 2)",
      },
    ],
    rules: {
      sensorName: [
        {
          required: true,
          message: "请输入土地名称",
          trigger: "blur",
        },
      ],
      belongLand: [
        {
          required: true,
          message: "请输入土地位置",
          trigger: "blur",
        },
      ],
      sensorType: [
        {
          required: true,
          message: "请输入土地面积",
          trigger: "blur",
        },
      ],
      installDate: [
        {
          required: true,
          message: "请输入土地所有者",
          trigger: "blur",
        },
      ],
    },
    ruleForm: {
      sensorName: "",
      belongLand: "",
      sensorType: "",
      installDate: "",
    },
};
// 土地信息
export const initsoilDataFormItem =  {
    itemList: [
      {
        label: "土地名称：",
        key: "landName",
        prop: "landName",
        width: "calc(100% / 2)",
        readonly:true
      },
      {
        label: "土地位置：",
        key: "landPlace",
        prop: "landPlace",
        width: "calc(100% / 2)",
        readonly:true
      },
      {
        label: "氮含量：",
        key: "nitrogenValue",
        prop: "nitrogenValue",
        width: "calc(100% / 2)",
        readonly:true
      },
      {
        label: "磷含量：",
        key: "phosphorusValue",
        prop: "phosphorusValue",
        width: "calc(100% / 2)",
        readonly:true
      },
      {
        label: "钾含量：",
        key: "potassiumValue",
        prop: "potassiumValue",
        width: "calc(100% / 2)",
        readonly:true
      },
      {
        label: "水含量：",
        key: "waterValue",
        prop: "waterValue",
        width: "calc(100% / 2)",
        readonly:true
      },
      {
        label: "PH值：",
        key: "phValue",
        prop: "phValue",
        width: "calc(100% / 2)",
        readonly:true
      },
      {
        label: "更新时间：",
        key: "update",
        prop: "update",
        width: "calc(100% / 2)",
        readonly:true
      },
      {
        label: "传感器数量：",
        key: "sensorNum",
        prop: "sensorNum",
        width: "calc(100% / 2)",
        readonly:true
      },
    ],
    rules: {
      landName: [
        {
          required: true,
          message: "请输入土地名称",
          trigger: "blur",
        },
      ],
      landPlace: [
        {
          required: true,
          message: "请输入土地位置",
          trigger: "blur",
        },
      ],
    },
    ruleForm: {
      landName: "",
      landPlace: "",
      nitrogenValue:"",
      phosphorusValue:"",
      potassiumValue:"",
      waterValue:"",
      phValue:"",
      update:"",
      sensorNum:"",
    },
};