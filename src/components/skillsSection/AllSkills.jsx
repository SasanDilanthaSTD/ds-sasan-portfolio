import SingleSkill from "./SingleSkill";
import { FaJava, FaPhp, FaPython, FaDocker, FaAws  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiDjango, SiSpringboot, SiTensorflow } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
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

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}    
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
