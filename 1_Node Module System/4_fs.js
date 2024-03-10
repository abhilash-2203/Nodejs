//files
const fs=require('fs')

//**********Reading a file

// let fileContent=fs.readFileSync('f1.txt');
// console.log("The content of file f1 is ->"+fileContent)

//********Writing in a file

// fs.writeFileSync('f2.txt','This is file f2');
// console.log('File has been written')

//****Append file */
//   fs.appendFileSync('f3.txt',' This is updated data');
//   console.log('FIle has been appended')
//***Delete a file */
// fs.unlinkSync('f2.txt');
// console.log('File has been deleted')


//Directiories

//Create a directory
// fs.mkdirSync('myDirectory');

//check content inside directorty
// let folderPath='C:\\Users\\Abhilash\\Desktop\\Nodejs\\Node Module System\\myDirectory'

// let folderContent=fs.readdirSync(folderPath);
// console.log("Folder Content ",folderContent);

//check wheter a directory is exist or not

// let doesExist=fs.existsSync('myDirectory');
// console.log(doesExist);


//Remove directory
fs.rmdirSync('myDirectory')
console.log('File has been deleted')


