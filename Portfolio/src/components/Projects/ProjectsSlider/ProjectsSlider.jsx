import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { web } from "../Projects.constants";
import "./ProjectsSlider.scss";
import { FaCode } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
const CARD_COUNT = web.length;

const getRelativePosition = (index, activeIndex) => {
  let position = index - activeIndex;

  if (position > CARD_COUNT / 2) {
    position -= CARD_COUNT;
  }

  if (position < -CARD_COUNT / 2) {
    position += CARD_COUNT;
  }

  return position;
};


const getCardTransform = (position) => {
  switch (position) {
    case 0:
      return {
        x: "0%",
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        zIndex: 10,
        filter: "brightness(1)",
      };

    case -1:
      return {
        x: "-78%",
        y: 38,
        rotate: -5,
        scale: 0.88,
        opacity: 0.92,
        zIndex: 7,
        filter: "brightness(0.8)",
      };

    case 1:
      return {
        x: "78%",
        y: 38,
        rotate: 5,
        scale: 0.88,
        opacity: 0.92,
        zIndex: 7,
        filter: "brightness(0.8)",
      };

    case -2:
      return {
        x: "-135%",
        y: 105,
        rotate: -10,
        scale: 0.7,
        opacity: 0.48,
        zIndex: 4,
        filter: "brightness(0.55)",
      };

    case 2:
      return {
        x: "135%",
        y: 105,
        rotate: 10,
        scale: 0.7,
        opacity: 0.48,
        zIndex: 4,
        filter: "brightness(0.55)",
      };

    default:
      return {
        x: position < 0 ? "-175%" : "175%",
        y: 150,
        rotate: position < 0 ? -12 : 12,
        scale: 0.55,
        opacity: 0,
        zIndex: 0,
        filter: "brightness(0.4)",
      };
  }
};

const cardVariants = {
  animate: (position) => {
    const transform = getCardTransform(position);

    return {
      x: transform.x,
      y: transform.y,
      rotate: transform.rotate,
      scale: transform.scale,
      opacity: transform.opacity,
      zIndex: transform.zIndex,
      filter: transform.filter,

      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.8,
      },
    };
  },
};

function ProjectCard({ project, position }) {
  const isActive = position === 0;

  return (
    <motion.article
      className={`project-card ${isActive ? "project-card--active" : ""}`}
      custom={position}
      variants={cardVariants}
      animate="animate"
      initial={false}
      style={{
        "--project-accent": project.accent,
      }}
    >
      <div className="project-card__image">
        <img src={project.image} alt={project.title} draggable="false" />
        <div className="project-card__image-overlay" />
        {isActive && (
          <div className="project-card__image-content">
            <div className="project-card__profile">
              <span>{project.description}</span>
            </div>
            <a
              className="project-card__cv"
              style={{
                color: '#fff',
              }}
              href={project.links[0]}
            >
              <FaEye />
            </a>
          </div>
        )}
      </div>

      <div className="project-card__body">
        <div className="project-card__header">
          <div
            className="project-card__icon"
            style={{
              color: project.accent,
            }}
          >
            {project.icon}
          </div>
          <a  href={project?.links[1]}className="project-card__cv" style={{
              color: '#fff',
            }}><FaCode  /></a>
        </div>
        <h3>{project.title}</h3>
        <div className="project-card__technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSlider() {
  const [activeIndex, setActiveIndex] = useState(2);

  const visibleProjects = useMemo(() => {
    return web.map((project, index) => ({
      project,
      position: getRelativePosition(index, activeIndex),
    }));
  }, [activeIndex]);

  const nextProject = () => {
    setActiveIndex((current) => (current + 1) % CARD_COUNT);
  };

  const previousProject = () => {
    setActiveIndex((current) => (current - 1 + CARD_COUNT) % CARD_COUNT);
  };

  const selectProject = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="projects-slider">
      <div className="projects-slider__stage">
        <div className="projects-slider__glow" />
        <div className="projects-slider__orbit">
          <div className="projects-slider__orbit-ring" />

          <div className="projects-slider__orbit-inner" />
          {web.map((_, index) => {
            const position = getRelativePosition(index, activeIndex);
            const transform = getCardTransform(position);
            return (
              <button
                key={index}
                type="button"
                className={`projects-slider__orbit-dot ${
                  position === 0 ? "projects-slider__orbit-dot--active" : ""
                }`}
                style={{
                  "--dot-x": transform.x,
                  "--dot-y": `${transform.y}px`,
                }}
                onClick={() => selectProject(index)}
                aria-label={`Show project ${index + 1}`}
              />
            );
          })}
        </div>

        <div className="projects-slider__cards">
          {visibleProjects.map(({ project, position }) => (
            <ProjectCard
              key={project.id}
              project={project}
              position={position}
            />
          ))}
        </div>

        <button
          type="button"
          className="
            projects-slider__arrow
            projects-slider__arrow--prev
          "
          onClick={previousProject}
          aria-label="Previous project"
        >
          <span>‹</span>
        </button>

        <button
          type="button"
          className="
            projects-slider__arrow
            projects-slider__arrow--next
          "
          onClick={nextProject}
          aria-label="Next project"
        >
          <span>›</span>
        </button>
      </div>

      <div className="projects-slider__controls">
        <div className="projects-slider__progress">
          <div className="projects-slider__progress-line" />

          {web.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`
                projects-slider__progress-dot
                ${
                  index === activeIndex
                    ? "projects-slider__progress-dot--active"
                    : ""
                }
              `}
              onClick={() => selectProject(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <div className="projects-slider__counter">
          <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>

          <span>/</span>

          <span>{String(CARD_COUNT).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
}
