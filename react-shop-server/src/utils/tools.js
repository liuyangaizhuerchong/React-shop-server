export const serversUrl = "http://localhost:1337";

export const setToken = (name, data) => sessionStorage.setItem(name, data);

export const getToken = (name) => sessionStorage.getItem(name);

export const removeToken = (name) => sessionStorage.removeItem(name);
