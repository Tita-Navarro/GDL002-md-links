const mdLinks = require('../md-links.js');

test('should be a markdown file', () =>{
  expect(mdLinks.validatePath("README.md")).toBe(true);
});

test('should be an absolute route', ()=>{
  expect(mdLinks.absolutePath("README.md")).toBe("C:\\Users\\tita_\\Documents\\proyecto-laboratoria\\GDL002-md-links\\README.md");
});

test('should read the file', ()=>{
  mdLinks.readingFile("./test/prueba.md").then((result) =>{
    expect(result).tobe('hola');
  })
});

test ('file should exist', ()=>{
  mdLinks.fileExist("README.md").then(result =>{
    expect(result).toBe(true);
  })
});