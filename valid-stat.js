function validLinks(newPath, callback) {
  let urlLink = fs.readFile(newPath, 'utf-8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    {
      const toStr = data.toString();
      // extrae el texto del link
      const regex1 = /(?:[^[])([^[]*)(?=(\]+\(((https?:\/\/)|(http?:\/\/)|(www\.))))/g;
      const regex2 = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g;
      // console.log('------READ FILE MD---------');

      const textStr = toStr.match(regex1);
      const urlArray = toStr.match(regex2);
      console.log(`File name: ${newPath}\n`);
      if (urlArray != null) {
      }
      callback(urlArray, textStr, newPath);
    }
  });
  return urlLink;
}

function validatingStatus(urlArray, textStr, newPath) {
  for (let i = 0; i < urlArray.length; i++) {
    fetch(urlArray[i])
      .then(response => {
        if (response.status == 200) {
          console.log(chalk.purple(`Title: ${textStr[i]}`));
          console.log(chalk.blue(`Link: ${urlArray[i]}`));
          console.log(chalk.yellow(`File: ${newPath}`));
          console.log(
            chalk.green(`Response code: ✔ ${response.status}\nResponse: ${response.statusText}\n`),
          );
        } else if (response.status == 404 || response.status == 400) {
          console.log(chalk.red(`ERROR`));
          console.log(chalk.purple(`Title: ${textStr[i]}`));
          console.log(chalk.blue(`Link: ${urlArray[i]}`));
          console.log(chalk.yellow(`File: ${newPath}`));
          console.log(chalk.red(`Response code : ✖ ${response.status}\nResponse: ${response.statusText}\n`),
          );
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  }
}
module.exports={ validLinks, validatingStatus}