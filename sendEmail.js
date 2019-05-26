const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kapil.raghuwanshi5@gmail.com',
        pass: 'Hii%^$$scpoy20@20'
    }
});

let mailOptions = {
    from: 'kapil.raghuwanshi5@gmail.com',
    to: 'kapil.raghuwanshi5@yahoo.com',
    subject: 'Sending Email using Node.js',
    //text: 'Hurray! That was easy!'
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});