import  nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.email, 
    pass: process.env.password, 
  },
});

export async function sendEmail(email:string,subject:string,message:string) {
    const mailOptions = {
        from: process.env.email, 
        to: email, 
        subject, 
        html: message, 
       };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        console.error("Error sending email: " + error);
        } else {
        console.log("Email sent: " + info.response);
        }
       });
}

