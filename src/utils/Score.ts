//
// export type ScoreItem =
//   | 'propertyRightTypes'
//   | 'equipmentRoomTypes'
//   | 'citys'
//   | 'addressTuning'
//   | 'channelBuild'
//   | 'batterTypes'
//   | 'environment'
//   | 'power'
//   | 'bearingTypes'
//   | 'buildTypes'
//   | 'houseTypes';

export const ScoreItems = {
  //dropdown
  CITYS: 'citys',
  PROPERTY_RIGHT_TYPES: 'propertyRightTypes',
  EQUIPMENT_ROOM_TYPES: 'equipmentRoomTypes',
  ADDRESS_TUNING: 'addressTuning',
  CHANNEL_BUILD: 'channelBuild',
  BATTER_TYPES: 'batterTypes',
  ENVIRONMENT: 'environment',
  POWER: 'power',
  BEARING_TYPES: 'bearingTypes',
  BUILD_TYPES: 'buildTypes',
  HOUSE_TYPES: 'houseTypes',
  //input
  NAME: 'name',
  ADDRESS: 'address',
  LONGITUDE: 'longitude',
  LATITUDE: 'latitude',
  PRICE: 'price',
  AIR_CONDITIONER_NUMBER: 'airConditionerNumber',
  LAYER_HEIGHT: 'layerHeight',
  ROOM_AREA: 'roomArea',
  RACK_NUMBER: 'rackNumber',
};

export const dataTypes = {
  PICKER: 'picker',
  TEXT_INPUT: 'textInput',
}

export const datas = [
  {
    key: 'propertyRightTypes',
    type: dataTypes.PICKER,
    label: '地址类别',
    array: ['购置', '征地自建', '租地自建', '租赁', '利旧基站', '利旧室分', '新楼配套隔断'],
  },

  {
    key: 'equipmentRoomTypes',
    type: dataTypes.PICKER,
    label: '机房类型',
    array: ['骨干机房', '汇聚机房', '接入机房'],
  },

  {
    key: 'citys',
    type: dataTypes.PICKER,
    label: '县市',
    array: ['北仑', '慈溪', '奉化', '海曙','江北', '宁海', '象山', '鄞州','余姚', '镇海'],
  },

  {
    key: 'addressTuning',
    type: dataTypes.PICKER,
    label: '规划位置校对',
    array: ['位于机房网格中心区域30%', '位于机房网格中心区域30%-50%', '位于机房网格中心区域50%-100%', '位于机房网格外，需调整微格'],
  },

  {
    key: 'channelBuild',
    type: dataTypes.PICKER,
    label: '管道建设',
    array: ['可实现双路由，建设难度较易', '可实现双路由，建设难度中等', '可实现双路由，建设难度较大', '红线外无法实现双路由'],
  },

  {
    key: 'batterTypes',
    type: dataTypes.PICKER,
    label: '电源建设',
    array: ['专变，独立开户', '公变，独立开户', '利旧原变压器', '改造原变压器', '转供电', '无法供电'],
  },

  {
    key: 'environment',
    type: dataTypes.PICKER,
    label: '周边环境',
    array: ['完全独立', '楼上/楼下无居民，周边有居民', '楼上/楼下有居民，周边无居民', '楼上/楼下有居民，周边有居民'],
  },

  {
    key: 'power',
    type: dataTypes.PICKER,
    label: '发电环境',
    array: ['可正常发电', '仅白天可发电', '仅晚上可发电', '发电难度较高'],
  },

  {
    key: 'bearingTypes',
    type: dataTypes.PICKER,
    label: '承重',
    array: ['无需加固', '需加固改造'],
  },

  {
    key: 'buildTypes',
    type: dataTypes.PICKER,
    label: '市场部共建',
    array: ['共建', '不共建'],
  },

  {
    key: 'houseTypes',
    type: dataTypes.PICKER,
    label: '房源情况',
    array: ['一手房', '二手房'],
  },

  {
    key: 'name',
    type: dataTypes.TEXT_INPUT,
    label: '机房名',
  },
  {
    key: 'address',
    type: dataTypes.TEXT_INPUT,
    label: '机房地址',
  },
  {
    key: 'longitude',
    type: dataTypes.TEXT_INPUT,
    label: '经度',
  },
  {
    key: 'latitude',
    type: dataTypes.TEXT_INPUT,
    label: '维度',
  },
  {
    key: 'price',
    type: dataTypes.TEXT_INPUT,
    label: '价格',
  },
  {
    key: 'airConditionerNumber',
    type: dataTypes.TEXT_INPUT,
    label: '可安装空调数',
  },
  {
    key: 'layerHeight',
    type: dataTypes.TEXT_INPUT,
    label: '层高',
  },
  {
    key: 'roomArea',
    type: dataTypes.TEXT_INPUT,
    label: '机房面积',
  },
  {
    key: 'rackNumber',
    type: dataTypes.TEXT_INPUT,
    label: '可安装机架数',
  },

  // p_equipmentRoomTypes: {
  //   scores: [[1,1,1],[1,1,1],[0.95,1,1,],[0.8,0.9,0.95],[0,0,0.9],[0,0,0.9],[0,0.5,0.9]],
  // },

  // p_addressTuning: {
  //   scores: [5,10,10,10,10,10,10],
  // },

  // p_channelBuild: {
  //   scores: [10,18,18,15,18,18,18],
  // },

  // p_batterTypes: {
  //   scores: [8,15,15,12,15,15,15],
  // },

  // p_environment: {
  //   scores: [8,10,10,10,8,8,8],
  // },

  // p_power: {
  //   scores: [5,5,5,5,5,5,5],
  // },

  // p_bearingTypes: {
  //   scores: [2,2,2,2,2,2,2],
  // },

  // p_buildTypes: {
  //   scores: [10,0,0,0,0,0,0],
  // },

  // p_houseTypes: {
  //   scores: [12,0,0,0,0,0,0],
  // },
];



export default class ScoreCalculator{
  _datas = {
    propertyRightTypesIndex: 0,
    equipmentRoomTypesIndex: 0,
    citysIndex: 0,
    addressTuningIndex: 0,
    channelBuildIndex: 0,
    batterTypesIndex: 0,
    environmentIndex: 0,
    powerIndex: 0,
    bearingTypesIndex: 0,
    buildTypesIndex: 0,
    houseTypesIndex: 0,

    name: '',
    address: '',
    longitude: 0,
    latitude: 0,
    price: 0,
    airConditionerNumber: 0,
    layerHeight: 0,
    roomArea: 0,
    rackNumber: 0,
  };

  onDataChange(data: any){
    const {scoreItem,value} = data;
    const {_datas} = this;
    switch (scoreItem) {
      case ScoreItems.CITYS:
        _datas.citysIndex = value;
        break;
      case ScoreItems.EQUIPMENT_ROOM_TYPES:
        _datas.equipmentRoomTypesIndex = value;
        break;
      case ScoreItems.PROPERTY_RIGHT_TYPES:
        _datas.propertyRightTypesIndex = value;
        break;
      case ScoreItems.ADDRESS_TUNING:
        _datas.addressTuningIndex = value;
        break;
      case ScoreItems.CHANNEL_BUILD:
        _datas.channelBuildIndex = value;
        break;
      case ScoreItems.BATTER_TYPES:
        _datas.batterTypesIndex = value;
        break;
      case ScoreItems.ENVIRONMENT:
        _datas.environmentIndex = value;
        break;
      case ScoreItems.POWER:
        _datas.powerIndex = value;
        break;
      case ScoreItems.BEARING_TYPES:
        _datas.bearingTypesIndex = value;
        break;
      case ScoreItems.BUILD_TYPES:
        _datas.buildTypesIndex = value;
        break;
      case ScoreItems.HOUSE_TYPES:
        _datas.houseTypesIndex = value;
        break;
      case ScoreItems.NAME:
        _datas.name = value;
        break;
      case ScoreItems.ADDRESS:
        _datas.address = value;
        break;
      case ScoreItems.LONGITUDE:
        _datas.longitude = value;
        break;
      case ScoreItems.LATITUDE:
        _datas.latitude = value;
        break;
      case ScoreItems.PRICE:
        _datas.price = value;
        break;
      case ScoreItems.AIR_CONDITIONER_NUMBER:
        _datas.airConditionerNumber = value;
        break;
      case ScoreItems.LAYER_HEIGHT:
        _datas.layerHeight = value;
        break;
      case ScoreItems.ROOM_AREA:
        _datas.roomArea = value;
        break;
      case ScoreItems.RACK_NUMBER:
        _datas.rackNumber = value;
        break;
      default:
    }
    console.log('zzy','scoreItem',_datas);
  }

  get result(){
    // const {_datas} = this;

    return 0;
  }
};

export const scoreCalculator = new ScoreCalculator();
