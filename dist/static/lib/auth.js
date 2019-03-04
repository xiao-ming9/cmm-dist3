/**
 * 微信授权
 * config:
 *  appId - 公众号appId
 *  REDIRECT_URI - 回调域名，授权后跳转的地址
 *  SCOPE - 授权类型，snsapi_userinfo／snsapi_base
 */
export function auth () {
  /* eslint-disable */
  let
    appid = 'wx2dfd0609566f8823',
    oldURL = window.location.href,
    REDIRECT_URI = oldURL,
    SCOPE = 'snsapi_userinfo',
    url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + REDIRECT_URI + '&response_type=code&scope=' + SCOPE + '&state=1#wechat_redirect'

  window.location.href = url
}

/**
 * 获取授权后的code
 * @returns {*}
 */
export function getCode () {
  let url = window.location.search
  if (url === '') {
    return false
  }
  let code = url.match(/^\?code=(.+)&/)[1]
  return code
}

export function getUrlParam(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return unescape(r[2]);
    return null;
}
