//file system

const fs = require('fs');
const path = require('path');
//const pathFile = process.argv[2];
const fetch = require ('node-fetch');

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

directory: function(path){
  try{
    const stat =fs.lstatSync(path);
    return stat.isDirectory();
  } catch (e){
    return false;
  }
  },

  linkArray: function(pathNew) {

    console.log(pathNew + " nombre archivo");
    
    fs.readFile(pathNew,"utf-8",  (err, data) => {
           if (err) {
            reject(err);
           }
           {
             console.log('enter');
             
          const toString= data.toString();
          const RegExp1 = /(?:[^[])([^[]*)(?=(\]+\(((https?:\/\/)|(http?:\/\/)|(www\.))))/g;
          const RegExp2 = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g;
    
          const links = toString.match(RegExp1);
          const arrayUrl = toString.match(RegExp2);
    
          for (let i=0; i< arrayUrl.length; i++) {
            fetch(urlArray[i])
            .then(response => {
              if (response.status == 200) {
                console.log(`Text: ${links[i]}\nLink: ${urlArray[i]}\nFile: ${pathNew}\nResponse code: ${response.status}\nResponse: ${response.statusText}\n`)
              } else if (response.status == 404||response.status == 400) {
                console.log(`ERROR.\nText: ${allLink[i]}\nLink: ${urlArray[i]}\nFile: ${pathNew}\nResponse code: ${response.status}\nResponse: ${response.statusText}\n`)
              }
            })
          }
        }
     });
  }
}



