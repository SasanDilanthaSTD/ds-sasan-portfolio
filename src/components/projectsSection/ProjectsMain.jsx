import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Poultry Farm System (PMS Front-end)",
    year: "May2024",
    align: "right",
    image: "../../public/images/projects/PMS.png",
    link: "https://github.com/SasanDilantha/Project_II_CST20_16_Frontend",
  },
  {
    name: "Poultry Farm System (PMS Back-end)",
    year: "May2024",
    align: "left",
    image: "../../public/images/projects/PMS.png",
    link: "https://github.com/SasanDilantha/Project_II_CST20_16_Backend",
  },
  {
    name: "Mental Health Service",
    year: "Sep 2023",
    align: "right",
    image: "../../public/images/projects/MHS.png",
    link: "https://github.com/SasanDilanthaSTD/Project_new",
  },
  {
    name: "IoT-Based Poultry Farm Monitoring System",
    year: "Nov 2024",
    align: "left",
    image: "../../public/images/projects/IoT Mini Project.png",
    link: "https://github.com/SasanDilantha/IoT_Based_Poultry_Farm_Monitoring_System",
  },
  {
    name: "CipherX – Secure Message Encryption App",
    year: "Dec 2023",
    align: "right",
    image: "../../public/images/projects/Mobile application.png",
    link: "https://github.com/LashanSachintha/CipherX",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
