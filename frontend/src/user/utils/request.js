import { message } from 'antd';
// 请求方法封装
export const get = (url, data = {}) => {
  return new Promise((resolve) => {
    fetch(
      `${url}?${Object.keys(data)
        .map((k) => `${k}=${data[k]}`)
        .join('&')}`,
    ).then((response) => {
      if (response.status === 200) {
        response.json().then((res) => {
          resolve(res);
        });
      } else {
        response.json().then((res) => {
          // message.error(res.message || 'error');
          message.error((res.message.replace("<p>","")).replace("</p>",""));
        });
      }
    });
  });
};

export const post = (url, data) => {
  return new Promise((resolve) => {
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((res) => {
          resolve(res);
        });
      } else {
        response.json().then((res) => {
          //message.error(res.message || 'error');
          message.error((res.message.replace("<p>","")).replace("</p>",""));
        });
      }
    });
  });
};

export const put = (url, data) => {
  return new Promise((resolve) => {
    fetch(url, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((res) => {
          resolve(res);
        });
      } else {
        response.json().then((res) => {
          //message.error(res.message || 'error');
          message.error((res.message.replace("<p>","")).replace("</p>",""));
        });
      }
    });
  });
};
export const del = (url, data) => {
  return new Promise((resolve) => {
    fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((res) => {
          resolve(res);
        });
      } else {
        response.json().then((res) => {
          //message.error(res.message || 'error');
          message.error((res.message.replace("<p>","")).replace("</p>",""));
        });
      }
    });
  });
};
