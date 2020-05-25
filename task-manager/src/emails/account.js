const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kurtdariel@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the App, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kurtdariel@gmail.com',
        subject: 'Paalam bro :(',
        text: `Goodbye, ${name}, is there anything we could have done to have kept you on board.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}