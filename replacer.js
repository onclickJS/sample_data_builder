'use strict';
var utils = require("./utils");


// readFile('./files/isoReq.json', 'isoreqbody');
// readFile('./files/proc.json', 'procbody');
readFile('./files/helpdesk_post_contents.json', 'contents');

function readFile(filePath, colName) {
  var findIds = [];
  var list = utils.getList(filePath);

  list.forEach((item, index, array) => {
    var str = item[colName];
    console.info('///------------------------------------------------------------------///');
    console.info(index + 1)
    // console.info(utils.replace(str));
    findIds.push(utils.findId(str));
  });

  findIds.forEach(id => {
    console.info(id);
  });

  console.info('Toatal cnt : ', list.length);
}


// update imez_package.helpdesk_post
// set contents = replace(replace(replace(replace(replace(replace(contents, 'https://stgapi-admin.imez.biz:443', ''), 'https://stgapi-admin.imez.biz', ''), 'https://api-admin.imez.biz:443', ''), 'https://api-admin.imez.biz', ''), 'https://api-service.imez.biz', ''), 'https://stgapi-service.imez.biz', '')
// where contents like '%https://%';