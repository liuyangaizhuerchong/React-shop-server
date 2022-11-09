// export const serversUrl = "http://localhost:1337";

export const serversUrl = "http://sails.penkuoer.com";

export const setToken = (name, data) => sessionStorage.setItem(name, data);

export const getToken = (name) => sessionStorage.getItem(name);

export const removeToken = (name) => sessionStorage.removeItem(name);

export const dalImg = (url) => {
  if (url) {
    if (url.startsWith("http")) {
      return url;
    }
    return serversUrl + url;
  }
  return "https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201712/20171205200207_77656.big.jpg";
};
