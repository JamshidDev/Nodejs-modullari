
const fs = require('fs');  // Modulni chaqiramiz, bu modulni npm orqali yuklash shart emas.
    const path = './test.text'; //faylni manzili...

fs.readdir("../",(err, files)=>{ //readdir() funksiyasi berilgan pathdagi file va papkalarni qaytaradi...

    if (err) {console.log(err);}

    // else {console.log(files);}
});

fs.readFile("../server.js","utf8",(err, date)=>{  // readFile() funksiyasi pathda berilgan filni o'qiydi...
    if (err) {console.log(err);}

    // else {console.log(date);}
})

// fs.writeFile("./message.text","Dasturchi jamshid Raximov","utf8",(err)=>{ // writeFile funksiyasi berilgan pathda file ichiga yozadi
//     console.log("Bajarildi");
// })


// fs.rename("./user.text","customer.text",(err)=>{ // file ni nomini almashtiradi...
//     if (err) {console.log(err);}

//     else  { console.log("bajarildi");}
   
// })


// fs.unlink("./message.text",(err)=>{ // unlink() funksiyasi berilgan pathdagi fileni o'chiradi
//     if(err) { console.log(err); }

//     else { console.log("O'chirildi"); }
    
// })

// fs.appendFile("./customer.text"," append","utf8",(err)=>{
//     if (err) console.log(err);

//     else console.log("bajarildi");
// });


// fs.open("customer.text", "a", (err, fd)=>{
//     if (err) 
//     console.log(err);

//     else console.log(fd);
// })

// fs.copyFile("./customer.text","user.doc",(err)=>{ // copyFile() funksiyasi birinchi file ni ikkinchi faylga nushalaydi..
//     if (err) console.log(err);

//     else console.log("Nushalandi");
// })

// fs.open(path,"r",(err,fd)=>{
//     if (err) {console.log(`Quyidagi ${path} faylni ochishda xatolik yuz berdi --> ${err}`);}
//     else {
//         // o'qish
//         // yozish
//         console.log(fd);
//         fs.close(fd,(err)=>{
//             console.log("Fayl ypoildi");
//         })
//     }
// })

// fs.ststa()
fs.stat(path,(err,stats)=>{
    if(err) {console.log(err);}
    else {
        console.log(`fayl hajmi ${stats.size} bayt
        ${stats.isDirectory()}
        ${stats.isFile()}`);
    }
})