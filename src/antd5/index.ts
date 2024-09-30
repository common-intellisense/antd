import { getComponentMap, getPropsMap } from './mapping'

export function antd5() {
  return {
    uiName: 'antd5',
    map: getPropsMap(),
    lib: 'antd',
  }
}

export function antd5Components(isZh: boolean) {
  return {
    map: getComponentMap(isZh),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: 'antd',
    isReact: true,
  }
}
