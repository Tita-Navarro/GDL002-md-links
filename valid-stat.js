//const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const chalk = require('chalk');

//-------------------------- funcion para stats------------
function statusLinks(pathNew, validation = false) {
  fs.readFile(pathNew, 'utf-8', (err, data) => {
    if (err) {
      return console.log(chalk.red('✖' + err));
    }
    {
      // console.log('Show the stats');
      const toString = data.toString();
      const regExp = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g; /*/https?:\/\/[\w\-\.]+\.\w{2,6}\/?\s/g*/
      // extrae todo lo que hace match regexp con los url
      let url = toString.match(regExp);
      let uniqueUrl;

      console.log(`File name: ${pathNew}`);
      console.log(chalk.green(' ✔ Total links: ' + ' ' + url.length));
      uniqueUrl = url.filter(
        (currentItem, indexItem, array) => array.indexOf(currentItem) === indexItem,
      );
      // indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array
      console.log(chalk.green(' ✔ Total unique Links: ' + ' ' + uniqueUrl.length + '\n'));

      if (validation) {
        validateStats(uniqueUrl, pathNew);
      }
    }
  });
}

function validatingLinks(pathNew, callback) {
  const url= fs.readFile(pathNew, 'utf-8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    {
      const toStr = data.toString();
      // extrae el texto del link
      const mdLinkRgEx = /(?:[^[])([^[]*)(?=(\]+\(((https?:\/\/)|(http?:\/\/)|(www\.))))/g;
      const mdLinkRgEx2 = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g;
      // console.log('------READ FILE MD show validate---------');

      const textStr = toStr.match(mdLinkRgEx);
      const urlArray = toStr.match(mdLinkRgEx2);
      console.log(`File name: ${pathNew}\n`);
      if (urlArray != null) {
      }
      callback(urlArray, textStr, pathNew);
    }
  });
  return url;
}

function validatingStatus(urlArray, textStr, pathNew) {
  for (let i = 0; i < urlArray.length; i++) {
    fetch(urlArray[i])
      .then(response => {
        if (response.status == 200) {
          console.log(chalk.white(`Title: ${textStr[i]}`));
          console.log(chalk.blue(`Link: ${urlArray[i]}`));
          console.log(chalk.white(`File Found: ${pathNew}`));
          console.log(
            chalk.green(`Response code: ✔ ${response.status}\nResponse: ${response.statusText}\n`),
          );
        } else if (response.status == 404 || response.status == 400) {
          console.log(chalk.red(`ERROR`));
          console.log(chalk.white(`Title: ${textStr[i]}`));
          console.log(chalk.blue(`Link: ${urlArray[i]}`));
          console.log(chalk.white(`File Found: ${pathNew}`));
          console.log(
            chalk.green(`Response code : ✖ ${response.status}\nResponse: ${response.statusText}\n`),
          );
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  }
}
module.exports={statusLinks, validatingLinks, validatingStatus}