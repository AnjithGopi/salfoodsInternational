import emailjs from "@emailjs/browser";
import {
  gmailServiceId,
  publicKey,
  template_ID,
} from "../pages/files/emailkey";

const sendEmail = async (e) => {
  try {

    console.log(e.target)
   
    const result = await emailjs.sendForm(
      gmailServiceId,
      template_ID,
      e.target,
      { publicKey }
    );
    return result;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error; // Re-throw to handle in the component
  }
};

export default sendEmail;
