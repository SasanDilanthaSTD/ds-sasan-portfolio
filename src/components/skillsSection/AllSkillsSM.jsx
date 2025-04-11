import { FaJava, FaPhp, FaPython, FaDocker, FaAws  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiDjango, SiSpringboot, SiTensorflow } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiArduino } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "PHP",
    icon: FaPhp,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Django",
    icon: SiDjango,
  },
  {
    skill: "Spring Boot",
    icon: SiSpringboot,
  },
  {
    skill: "Docker",
    icon: FaDocker,
  },
  {
    skill: "TensorFlow",
    icon: SiTensorflow,
  },
  {
    skill: "AWS",
    icon: FaAws,
  },
  {
    skill: "Arduino",
    icon: SiArduino,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
