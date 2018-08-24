export default {
  get: async function(url, data = {}) {
    const json = await new Promise(resolve => {
      wx.request({
        url,
        data,
        success(res) {
          resolve(res.data);
        }
      });
    });

    return json;
  }
};
