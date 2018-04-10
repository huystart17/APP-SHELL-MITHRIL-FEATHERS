import { STATUS } from '../config';
const entityModel = {

  dataList: {
    status: STATUS.NONE,
    list: [], //container all data
    paginate: {}, //paginate of  datalist
    filter: {} //query with datalist
  },
  dataSet: {
    status: STATUS.NONE,
    setList: new Set()
  },
  dataMap: {
    status: STATUS.NONE,
    mapList: new Map()
  },

};

export default entityModel;
