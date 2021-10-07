var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('about', {
        title: 'About'

    });  //Using index.ejs as view
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
		from: 'no-reply <avinashke1@gmail.com>',
		to: 'avinashkke1@gmail.com',
		subject: 'New message from Career',
		text: 'You have a new submission with the following details.. Job Description: '+req.body.job_des+' First Name: '+req.body.fname+' Last Name: '+req.body.lname+' Email: '+req.body.email+' Phone: '+req.body.phone+' Address: '+req.body.address+' Specialisation: '+req.body.specialisation+'',
		html: '<p>You got a new submission with the following details..</p><ul><li>Job Description: '+req.body.job_des+'</li><li>First Name: '+req.body.fname+'</li><li>Last Name: '+req.body.lname+'</li><li>Email: '+req.body.email+'</li><li>Phone: '+req.body.phone+'</li><li>Address: '+req.body.address+'</li><li>Specialisation: '+req.body.specialisation+'</li></ul>'
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
