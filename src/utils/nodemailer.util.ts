import nodeMail from "nodemailer";
import { config } from "../helpers/config.helper";

const host = config.emailServer.host;
const port = Number(config.emailServer.port);
const auth = {
  email: config.emailServer.user,
  password: config.emailServer.password,
};

export const sendEmail = async (
  email: string | string[],
  subject: string,
  text: string = "",
  bodyHtml: string = ""
) => {
  try {
    let transporter = nodeMail.createTransport({
      host: host,
      port: port,
      secure: false,
      auth: {
        user: auth.email,
        pass: auth.password,
      },
    });

    let info = await transporter.sendMail({
      from: `${auth.email}`,
      to: `${email}`,
      subject: `${subject}`,
      text: `${text}`,
      html: `${bodyHtml}`,
    });

    if (info.accepted) {
      return console.log("-- Email sent --");
    } else if (info.rejected) {
      return console.log("-- Email  rejected --");
    }

    return console.log(`Error trying to send a email - Error:${info}`);
  } catch (err) {
    console.log(`Error trying to send a email - Error:${err}`);
  }
};
