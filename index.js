// // entry points
// // type - comman.js(require) and module.js (import) work dono ka same hai require older hai 
// // node https type server bnata hai
// // server request or response krta hai aur kuch bhi nhi 

// const http=require('http');

// const myserver = http.createServer((req, res)=>{
// // console.log('server 1');
// // res.end('Hi, this is my first server.');
// if(req.url =='api/'){
//    // api likne pr restful api bn jaayega generally yhi use hota hai slash(/) means first page
//   res.end('ABES Engineering college');
// }else if(req.url=='/about'){
//   res.end('Established in GZB');
// }else if(req.url=='/image'){
//   res.end(<img src="C:\Users\Sunil Kumar\OneDrive\Pictures\wallpaper.jpg"></img>);
// }else {
//   res.end('404 page is not found');
// }
// })

// myserver.listen(8000,()=>console.log('server is run'));


// const fs = require("fs");
// // fs.writeFileSync("./cse-c.txt", 'Hi i am a cse student')
// const result = fs.readFileSync("./cse-c.txt","utf-8");
// console.log(result);

const fs = require('fs'); // asyc se fie bna rhe hain-- jb tk callback nhi bnayeinge tb tk asyc mein convert nhi hoga
// callback 2 types se bnate hain ek simple aur 2. if else ka use krke
// fs.writeFile("./a.txt","abes college is good",()=>{});

// imp. jb bhi koi interviewer asks-- then tell if else  taaki error handle ho paaye

// fs.readFile("./a.txt", "utf-8",(error,result)=>{
//   if(error){
//     console("Error",error);
//   }else{
//     console.log(result);
//   }

// })
  // fs.writeFile("./a.txt"," I am sunil",(err,result)=>{
  //   if(err){
  //      console.log("Error",err);
  //   }else{
  //      console.log("Successfully created");
  //   }
  // })

  // using append sync
// fs.appendFileSync("./a.txt",`good`);
// const fs = require('fs');

// //aync
// fs.appendFile("./a.txt", "good", (err) => {
//     if (err) {
//         console.log("Error:", err);
//     } else {
//         console.log("Data appended successfully");
//     }
// });

// copy contant of a to b file
// fs.cpSync("./a.txt","./b.txt");
// const fs = require('fs');

// copy by async
// fs.cp("./a.txt", "./b.txt", (err) => {
//     if (err) {
//         console.log("Error:", err);
//     } else {
//         console.log("File copied successfully");
//     }
// });

// unlink- deleting file a
// fs.unlinkSync("./a.txt");
// console.log("File deleted");





// unlink async 

fs.writeFileSync("a.txt", "Hello");// file bnaya
console.log("File created");

fs.unlink("./a.txt", (err) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("File deleted successfully");
    }
});