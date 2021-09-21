import Cookies from 'js-cookie';

/**
 *
 * @param {Object} info
 */
export function setUserCookie(info) {
  const arr = Object.entries(info); // 二维数组，数组的每一项也是个数组，数组有两项，第一项是key，第二项是value
  for (let i = 0; i <= arr.length; i += 1) {
    Cookies.set(arr[i][0], arr[i][1]);
    // return true;
  }
}

/**
 * 获取用户的Cookie信息
 */
export function getUserCookie() {
  return {
    username: Cookies.get('username'),
    appkey: Cookies.get('appkey'),
    role: Cookies.get('role'),
    email: Cookies.get('email'),
  };
}

/**
 * 移除用户Cookie信息
 */
export function removeUserCookie() {
  Cookies.remove('username');
  Cookies.remove('appkey');
  Cookies.remove('role');
  Cookies.remove('email');
//   return true;
}
