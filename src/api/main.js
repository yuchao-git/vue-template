import axios from 'axios'

/*添加请求拦截器*/
axios.interceptors.request.use(function (config) {
  /*在发送请求之前做某事*/
  if (!!localStorage.getItem('jwt-token')) {
    const token = "Bearer " + localStorage.getItem('jwt-token');
     // 这里将token设置到headers中，header的key是Authorization，这个key值根据你的需要进行修改即可
    config.headers.Authorization = token;
  }
 
  return config;
}, function (error) {
  /*请求错误时做些事*/
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  /*对响应数据做些事*/
  return response;

}, function (error) {
    /*请求错误时做些事*/
  return Promise.reject(error);
  if (error.response.status == 401) {
    localStorage.removeItem('jwt-token');
    localStorage.removeItem('user');
    router.push({
      path: '/'
    })
  } else if (error.response.status == 400 || error.response.status == 402) {
    alert(error.response);
  } else {
    alert('服务器错误，请联系管理员');
  }
 
});

export default axios
