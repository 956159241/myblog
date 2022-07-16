export default class isHelper {
  static isPC() {
    const userAgentInfo = navigator.userAgent;
    const Agents = [
      'Android',
      'iPhone',
      'SymbianOS',
      'Windows Phone',
      'iPad',
      'iPod',
    ];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  static isWeiXin() {
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.includes('micromessenger')) {
      return true;
    } else {
      return false;
    }
  }
}
