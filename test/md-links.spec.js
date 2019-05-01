const {validatePath, absolutePath, readingFile, fileExist, directory} = require('../md-links.js');

test('should be a markdown file', () =>{
  expect(validatePath("README.md")).toBe(true);
});

test('should be an absolute route', ()=>{
  expect(absolutePath("README.md")).toBe("C:\\Users\\tita_\\Documents\\proyecto-laboratoria\\GDL002-md-links\\README.md");
});

test('should read the file', ()=>{
  readingFile("./test/prueba.md").then((result) =>{
    expect(result).tobe('hola');
  })
});

test ('file should exist', ()=>{
  fileExist("README.md").then(result =>{
    expect(result).toBe(true);
  })
});

test('should be "true" if the file is a directory',()=>{
  expect(directory("C:\Users\tita_\Documents\proyecto-laboratoria\GDL002-social-network").toBe(true));
});