let express = require('express');
let app=express();
app.use(express.static(__dirname));


app.get('/',(req,res)=>{
    res.end("This is Page");
});
app.get('/user',(req,res)=>{
    res.end("This is user Page");
});

app.get('/admin',(req,res)=>{
    res.end("This isadmin Page");
});

app.get('/*ran',(req,res)=>{
    res.end("This is Random Page");
});

// its Middleware Implementation
// app.use('/',(req,res,next)=>{
// console.log('This middleware....');
// next();
// });
// app.use('/',(req,res,next)=>{
//     console.log('This middleware....2 ');
//     next();
//     });
//     app.use('/',(req,res,next)=>{
//         console.log('This middleware.... 3');
//         next();
//         });
// app.get('/',(req,res)=>{
// res.end('Your Request Success');
// });


app.listen(8080);