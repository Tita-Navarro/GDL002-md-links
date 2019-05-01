//file system
const fs = require('fs');
//route
const path = require('path');
//read the html and substract the links
const cheerio = require ('cheerio');
//transform in html file
const markdown = require ('markdown').markdown;
//async functions
const fetch = require ('node-fetch');

module.exports = {
    validatePath: function(mdFile) {
  const pathExtension = path.extname(mdFile);
  if (pathExtension == '.md') {
    console.log('It is a .md file');
    return true;
  } else {
    console.log('Your file is not .md');
    return false;
  }
},
fileExist: function(mdFile){
    //console.log(fileExist, mdFile);
    return new Promise((resolve, reject)=>{
        fs.existsSync(mdFile, function(exists){
            if (exists){
                console.log("The file exists");
                resolve(true);
            } else{
                console.log("The file does not exist");
                reject (false);
            }
        })
    }) 
},
absolutePath: function(pathRoute) {
  const absolute = path.resolve(pathRoute);
    return absolute;
},
readingFile: function(mdFile){
    return new Promise((resolve, reject) =>{
        fs.readFile(mdFile, "utf-8", (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
    });

  });
 
},

isDirectory: function (pathFile){
  try{
    const stat = fs.lstatSync(pathFile);
    return stat.isDirectory();
  }catch(err){
    return false;
  }
},

htmlConverter: function (data, path){
    return fileHTML = markdown.toHTML(data);
},
arrays: function (fileHTML, pathFile){
let arrayLink = [],
var allLink= {},

var $ = cheerio.load(fileHTML);
$('a').each(function(){
  allLink = { href: $(this).attr('href'),
           text: $(this).text(),
           file: pathFile
},
link.push(arrayLink);
});
return (allLink);
},
//Search links and if they exist put in array 
linkExist: function (url) {
  return fetch(url)
    .then(resp => resp.text())
    .then(link => {
      link = link
      return link;

    })
    .catch(error => {
      error = false
      return false;

    });
},
}

