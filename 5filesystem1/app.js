const fs = require('fs');

// fs.mkdir("tutorial", (err) => {
//   if(err)
//     console.log(err);
//   else {
//     // console.log("Tutorial created successfully")

//     // fs.rmdir('tutorial', (err) => {
//     //   if(err)
//     //     console.log(err);
//     //   else{
//     //     console.log("Tutorial removed successfully");
//     //   }
//     // })

//     fs.writeFile("./tutorial/example.txt","123",(err) => {
//       if(err)
//         console.log(err);
//       else {
//         console.log("successfully created example.txt file");
//       }
//     })
//   }
// })

// fs.unlink("./tutorial/example.txt", (err) => {
//   if(err)
//     console.log(err);
//   else{
//     fs.rmdir('tutorial', (err) => {
//       if(err)
//         console.log(err);
//       else{
//         console.log("Tutorial removed successfully");
//       }
//     })
//   }
// })

fs.readdir("example",(err, files) => {
  if(err)
    console.log(err);
  else{
    // console.log(files);
    for(let file of files){
      fs.unlink("./example/" + file,(err) => {
        if(err)
          console.log(err);
        else{
          console.log("delete file successfully");
        }
      })
    }
  }
})
