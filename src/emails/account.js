const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'parthgeek@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    });
};

const sendCancelEmail = (email,name) => {
    sgMail.send({
        to:email,
        from: 'parthgeek@gmail.com',
        subject: 'See you soon! | Task Manager',
        text: `Hey.. ${name}. It was fun having you as our precious user. Do let us know why you removed your Account! Looking forward to see you soon :) Positive Vibes!`
    });
};
module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}