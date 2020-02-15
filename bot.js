const rp = require('request-promise');
const parser = require('node-html-parser');
const fs = require('fs');

var data = [];

async function start(url){
  var html = await rp(url);
  var root = parser.parse(html);
  json(root);
  fs.writeFileSync('./test.json',JSON.stringify(data));
}

function filter(parent){
  var data = [];
  for(var i = 0; i< parent.childNodes.length; i++){
    var tag = parent.childNodes[i].tagName;
    if(tag == 'a' || tag == 'p' || tag == 'span' || tag == 'strong' || (tag+"").startsWith('h')){
      data.push({ "raw": parent.childNodes[i].innerHTML});
    } else if(tag == 'div'){
      filter(parent.childNodes[i]);
    }
  }
  return data;
}

function json(parent){
  if(parent != null){
    var div = null;
    if(parent.tagName == 'div'){
      data.push({"div":parent.innerHTML});
    } else {
      for(var i = 0; i< parent.childNodes.length; i++){
        json(parent.childNodes[i]);
      }
    }
  }
}

start("https://www.unive.it/data/46");