import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hi, I'm Sasan Dilantha, a <b>Computer Science undergraduate</b> with a strong passion for <b>Software Engineering, AI/ML, and Full-Stack Development</b>.
        I specialize in building scalable web applications, intelligent systems, and automation solutions using technologies like <b>React, Spring Boot, Django, Expo, TensorFlow, and PyTorch</b>.
        <br /><br />
        My expertise lies in <b>software architecture, backend development,</b> and <b>AI-driven solutions</b>.
        I am particularly interested in <b>AIoT, DevOps,</b> and <b>Robotics</b>, exploring how intelligent systems can enhance automation and decision-making.
        <br /><br />
        Beyond development, I actively contribute to <b>tech communities</b>. As the <b>Chairperson of the IEEE IAS Chapter at Uva Wellassa University</b>,
        I lead initiatives to bridge the gap between theory and practice. I also serve as the <b>Club Lead for Mozilla Campus Club</b> and <b>FOSS Community UWU</b>,
        where I promote open-source contributions and mentor students in emerging technologies.
        <br /><br />
        In addition to my technical pursuits, I am a <b>team member of the SLUG cricket team</b>, balancing my passion for technology with teamwork and discipline on the field.
        <br /><br />
        I’m always eager to learn, innovate, and collaborate on cutting-edge projects that push the boundaries of <b>AI, ML,</b> and <b>software engineering</b>. Let's connect and build the future together!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
