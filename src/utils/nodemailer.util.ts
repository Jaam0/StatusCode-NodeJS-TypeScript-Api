import nodeMail from "nodemailer";
import { AuthDto } from "../models/dto/auth.dto";
import { config } from "../helpers/config.helper";

export default class Mail {
  host: string;
  port: number;
  secure: boolean;
  auth: AuthDto;

  constructor(
    // to: string | string[],
    // subject: string,
    // text: string = "",
    // bodyHtml: string = ""
  ) {
    this.host = config.emailServer.host;
    this.port = Number(config.emailServer.port);
    this.secure = Boolean(config.emailServer.secure);
    this.auth = {
      email: config.emailServer.user,
      password: config.emailServer.password,
    };
  }

  async sendEmail() {
    let testAccount = await nodeMail.createTestAccount();

    let transporter = nodeMail.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "jessieaam0@gmail.com", // generated ethereal user
          pass: "", // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: `jessieaam0@gmail.com`, // sender address
        to: "jessiprivon@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodeMail.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
}
