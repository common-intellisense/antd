import { getComponentMap, getPropsMap } from './mapping'

export function antd4() {
  return {
    uiName: 'antd4',
    map: getPropsMap(),
    lib: 'antd',
  }
}

export function antd4Components(isZh: boolean) {
  return {
    map: getComponentMap(isZh),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: 'antd',
    isReact: true,
  }
}
