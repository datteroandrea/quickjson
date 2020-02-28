const rp = require('request-promise');
const parser = require('node-html-parser');

var data;

function filter(parent){
  var tag = parent.tagName;
  var text = parent.rawText;
  var attrs = parent.rawAttrs;
  var children = [];
  for(var i = 0; i< parent.childNodes.length; i++){
    if(parent.childNodes[i].tagName != null)
      children.push(filter(parent.childNodes[i]));
  }
  if(children != [])
    return { "tag":tag, "attrs":attrs, "children": children };
  else
    return { "tag":tag, "attrs":attrs };
}


module.exports.toJSON = async function toJSON(url){
  var html = await rp(url);
  var root = parser.parse(html);
  return filter(root);
};
