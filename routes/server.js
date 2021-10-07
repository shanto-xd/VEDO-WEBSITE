var express=require('express');
var nodemailer = require("nodemailer");
var app=express();
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "rishanislam1122@gmail.com",
        pass: "shanto713@123"
    }
});
app.get('/',function(req,res){
    res.sendfile('index.ejs');

});

app.get('/send',function(req,res){
    var mailOptions={
        to : req.query.to,
        name : req.query.name,
        email : req.query.email,
        message : req.query.message
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.end("error");
        }else{
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
});

app.listen(3000,function(){
    console.log("Express Started on Port 3000");
});