const fs = require ('fs');
fs.writeFile('./archivo.txt', 'línea de prueba', function (err){
   if (err){
      console.log(err);
   }
   console.log('archivo creado')
});
/*const os = require ('os');

console.log(os.platform());
console.log(os.release());
console.log(os.networkInterfaces());
console.log('memoria libre: ', os.freemem());*/

   /* exports.add = add;
    exports.substract = substract;
    exports.multiply = multiply;
    exports.divide = divide; */