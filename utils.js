//CommonJs 형태 - module.exports와 require 사용

var fs = require("fs");
var utils = {
  getList: function (filePath) {
    console.debug('readfile');
    var content = fs.readFileSync(filePath);
    var jsContent = JSON.parse(content);

    return jsContent;
  },
  replace: function (str) {
    var _str = str.replace(/https:\/\/stgapi-admin.imez.biz:443/g, '');
    _str = _str.replace(/https:\/\/stgapi-admin.imez.biz/g, '');
    _str = _str.replace(/https:\/\/stgapi-service.imez.biz:443/g, '');
    _str = _str.replace(/https:\/\/stgapi-service.imez.biz/g, '');
    _str = _str.replace(/https:\/\/api-admin.imez.biz:443/g, '');
    _str = _str.replace(/https:\/\/api-admin.imez.biz/g, '');
    _str = _str.replace(/https:\/\/api-service.imez.biz:443/g, '');
    _str = _str.replace(/https:\/\/api-service.imez.biz/g, '');


    return _str;
  },
  findId: function (str) {
    var m,
      urls = [],
      // rex = /<img[^>]*src="(http(s)?([^"\s]+))"[^>]*>/g;
      rex = /<img[^>]+src="(http(s)?:\/\/[^">]+)"/g;

    while (m = rex.exec(str)) {
      var url = m[1];

      console.debug(url);

      urls.push(url);
      return url.split('/').pop();
    }
  }
};

module.exports = utils;

