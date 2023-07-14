const nodemailer = require("nodemailer");

async function emailSend(error) {
    try {
        let transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
                user: 'akhil.krishnan@interfacesys.com',
                pass: 'Interface6',
            },
        });

        let message = {
            from: 'akhil.krishnan@interfacesys.com',
            to: 'agopalakrishnan@suyati.com',
            subject: 'Testing Subject',
            text: error,
            attachments: [
                {
                    filename: 'index.html',
                    path: '../..test-results/reports/index.html',
                },
            ],
        };

        let info = await transporter.sendMail(message);
        console.log('=====Email Sent=====');
    } catch (error) {
        throw new Error(error);
    }
}

emailSend("Example error message");


