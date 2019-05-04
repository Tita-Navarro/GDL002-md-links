//file system

const fs = require('fs');
const path = require('path'); 
const fetch = require ('node-fetch');
const chalk= require('chalk');
//enter the route of your file

function validatingPath(validPath){
  if(validPath != null){
    console.log(chalk.purple('☺ You enter a path succesfully'))
      return true;
  } else{
      console.log(chalk.red('Please enter a path'));
      return false;
  }
};
//the route is absolute or relative

function absoluteOrRelative(validPath) {
  absolutePathRoute=validPath;
   if (path.isAbsolute(absolutePathRoute) === false){
     return path.resolve(absolutePathRoute);
    } if (path.isAbsolute(absolutePathRoute) === true) {
     
     return absolutePath;
 }
}
//Validating if the file is a markdown file

function validatePath(validPath) {
  if (pathExtension === undefined) {
    return console.log(chalk.white('Enter a directory or file route'));
  } else {
    const pathExtension = path.extname(validPath);
  if (pathExtension == '.md') {
    //console.log('It is a .md file');
    return true;
  } else {
    console.log(chalk.cyan('✖ It is not a .md file'));
    return false;
  }
}
}
//Validating if the file exists on the local

function fileExist (mdFile){
  //console.log(fileExist, mdFile);
  return new Promise((resolve, reject)=>{
      fs.existsSync(mdFile, function(exists){
          if (exists){
              console.log(chalk.blue("the file exists"));
              resolve(true);
          } else{
              console.log(chalk.red("the file does not exist"));
              reject (false);
          }
      });
  }); 
}  
//Checking if the route is from a file or directory

function dirOrFile(dirPath) {
  return new Promise((resolve, reject) => {
    fs.access(dirPath, fs.constants.F_OK | fs.constants.W_OK, err => {
      if (err) {
        console.error(
          chalk.red(`✖ ${dirPath} ${err.code === 'ENOENT' ? 'Not exist' : 'is read-only'}`),
        );
        reject(err);
        //  return false;
      } else {
        console.log(chalk.green(`✔ ${dirPath} `));
        resolve(true);
        return dirPath;
      }
    });
  });
}

module.exports={validatingPath, absoluteOrRelative, validatePath, fileExist, dirOrFile}