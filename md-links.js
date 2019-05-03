//file system

const fs = require('fs');
const path = require('path'); 
const fetch = require ('node-fetch');

function validatingPath(pathRoute){
  if(pathRoute != null){
      return true;
  } else{
      console.log('Please enter your route');
      return false;
  }
};

function absoluteOrRelative(pathRoute) {
  absolutePathRoute=pathRoute;
   if (path.isAbsolute(absolutePathRoute) === false){
     return path.resolve(absolutePathRoute);
    } if (path.isAbsolute(absolutePathRoute) === true) {
     
     return absolutePath;
 }
}

function validatePath(pathRoute) {
  if (pathExtension === undefined) {
    return console.log('Enter a directory or file route');
  } else {
    const pathExtension = path.extname(pathRoute);
  if (pathExtension == '.md') {
    console.log('It is a .md file');
    return true;
  } else {
    console.log('It is not a .md file');
    return false;
  }
}
}

function fileExist (mdFile){
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
      });
  }); 
}  

function dirOrFile(pathRoute) {
  return new Promise((resolve, reject) => {
    fs.stat(pathRoute, (err, routeStats) => {
       if (err) {
         if(err.code==='ENOENT'){
           resolve(false);
         
      }else{
        reject(err);
      }
    }
      if (stats.isDirectory()) {
        console.log('Your route is a directory');
        return routeStats.isDirectory();
      //   return true;
      } 
       else if (stats.isFile()) {
        console.log('Your route is a file');
        resolve(stats.isFile());
      }
    });
  });
}
module.exports={validatingPath, absoluteOrRelative, validatePath, fileExist, dirOrFile}