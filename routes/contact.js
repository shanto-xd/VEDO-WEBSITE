var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'Contact'

    });
});

router.post('/send',function(req,res,next){
	var transporter = nodemailer.createTransport("SMTP",{
		service: 'Gmail',
		auth: {
			user: 'avinashke1@gmail.com',
			pass: 'ebernetpower'
		}
	});

	var mailOptions = {
		from: 'Sudhanshu Singh <avinashke1@gmail.com>',
		to: 'avinashkke1@gmail.com',
		subject: 'Message from new user',
		text: 'You have a new submission with the following details.. Name: '+req.body.name+' Email: '+req.body.email+' Message: '+req.body.message+'',
		html: '<p>You got a new submission with the following details..</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
	};
	transporter.sendMail(mailOptions,function(error,info){
		if(error){
			console.log(error);
			res.redirect('/');
		} else{
			console.log('Message Sent: '+info.response);
			res.redirect('/');
		}
	});
});

module.exports = router;
