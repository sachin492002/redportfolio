import React from "react";
import { motion } from "framer-motion";

import ProjectsSlider from "./ProjectsSlider/ProjectsSlider";
import { projectsAnim } from "./Projects.anim";
import { useChangeDocumentTitle } from "../../helpers/useChangeDocumentTitle";

import "./projects.scss";

export default function Projects({ pageTitle }) {
  useChangeDocumentTitle(pageTitle);

  return (
    <motion.section
      className="projects"
      variants={projectsAnim}
      initial="init"
      animate="anim"
      exit="end"
    >
      <ProjectsSlider />
    </motion.section>
  );
}