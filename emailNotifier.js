// Nodemailer Install this

var mailer = require( "nodemailer");


//sending the mail to the user
var transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'davidpoleen@gmail.com',
      pass: 'bwoehcxniyuwzrtn'
    },

  });
//This is the recipie for sending the email out to the user
  var mailOptions = {
    from: 'davidpoleen@gmail.com',
    to: 'dpo_49@hotmail.com',
    subject: 'Sending Email- Testing',
    text: 'That was pretty easy!'
  };
//Actually sending the email
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

