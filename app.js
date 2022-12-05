console.log("Hello")

function getName(name){
    console.log("My name is ",name);
}

getName("Sanath");

//modules - file systems

const fs = require("fs")
const path=require("path");

const myModule=require("./Module"); 

const filePath= path.join(process.cwd(),"file.txt");
fs.writeFileSync(filePath,"My first file");    //to write a content into the file 

const fileContent=fs.readFileSync(filePath).toString();  // to read a content in a file
console.log(fileContent);

console.log(myModule);


