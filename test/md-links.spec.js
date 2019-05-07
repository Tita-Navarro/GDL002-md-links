const {validatingPath, absoluteOrRelative, fileExist, validatePath, dirOrFile} = require('../md-links.js');
const Directory = 'C:\\Users\\tita_\\Documents\\proyecto-laboratoria\\GDL002-md-links\\README.md';
const File = 'README.md';

test('should be a valid file', () =>{
  expect(validatingPath(File)).toBe(true);
});

test('Should return false to validate path', () => {
  expect(validatingPath()).toBe(false);
});

test('should be an absolute route', ()=>{
  expect(absoluteOrRelative('README.md')).toBe('C:\\Users\\tita_\\Documents\\proyecto-laboratoria\\GDL002-md-links\\README.md');
});

test('Should be a relative path', ()=>{
  expect(absoluteOrRelative('README.md')).toBe('C:\\Users\\tita_\\Documents\\proyecto-laboratoria\\GDL002-md-links\\README.md');
});

test('Shoul be a ".md" file', () => {
  expect(validatePath('prueba.txt')).toBe(false);
});

test('Shoul be a ".md" file', () => {
  expect(validatePath('README.md')).toBe(true);
});

/*test('should read the file', ()=>{
  readingFile("./test/prueba.md").then((result) =>{
    expect(result).tobe('hola');
  })
});*/

test ('file should exist', ()=>{
  fileExist("README.md").then(result =>{
    expect(result).toBe(true);
  })
});

test('Should show the name of a directory', () => {
  dirOrFile(File).then(result => {
    expect(result).toBe(Directory);
  });
});

test('Should show the name of a directory', () => {
  dirOrFile(File).then(result => {
    expect(result)
      .contains(`✔ ${File}`)
      .cath(error);
  });
});