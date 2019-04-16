let l= process.argv.length;
//console.log(l);
let sum=0;
for(let i=2; i<l; i++){
  let str= process.argv[i];
  let num= Number(str);
  sum= sum+num;
}
console.log(sum);