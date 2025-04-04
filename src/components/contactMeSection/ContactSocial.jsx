import SingleContactSocial from "./SingleContactSocial";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://linkedin.com/in/sasan-dilantha" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/SasanDilantha" Icon={FiGithub} />
      <SingleContactSocial link="https://github.com/SasanDilanthaSTD" Icon={FiGithub} />
      <SingleContactSocial link="https://www.facebook.com/share/1GryrXZGcL/" Icon={FaFacebook} />
      <SingleContactSocial link="https://www.instagram.com/sasan_dila/profilecard/?igsh=MXFuYjJsdmd5NjVkNg==" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
