//file system
const fs = require('fs');
//route
const path = require('path');

const cheerio = require ('cheerio');

const markdown = require ('markdown').markdown;

module.exports = {
    validatePath: function(mdFile) {
  const pathExtension = path.extname(mdFile);
  if (pathExtension == '.md') {
    console.log('Es un archivo .md');
    return true;
  } else {
    console.log('Tu archivo no es .md');
    return false;
  }
},
fileExist: function(mdFile){
    //console.log(fileExist, mdFile);
    return new Promise((resolve, reject)=>{
        fs.existsSync(mdFile, function(exists){
            if (exists){
                console.log("the file exists");
                resolve(true);
            } else{
                console.log("the file does not exist");
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
htmlConverter: function (data, path){
    return fileHTML = markdown.toHTML(data);
},
arrays: function (fileHTML, path){
let links = [],
let link = {},

let $ = cheerio.load(fileHTML);
$('a').each(function(){
  link = { href: $(this).attr('href'),
           text: $(this).text(),
           file: path
},
links.push(link);
});
return (links);
},
}

