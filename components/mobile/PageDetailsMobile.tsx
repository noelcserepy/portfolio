import Button from "components/ui/Button";
import H1 from "components/ui/H1";
import H2 from "components/ui/H2";
import MouseSpring from "components/ui/MouseSpring";
import UpperSmall from "components/ui/UpperSmall";
import { type Page } from "data";
import { motion } from "framer-motion";
import { useState } from "react";

const infoVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    y: 10,
    transition: {
      opacity: {
        duration: 0.2,
      },
      y: {
        duration: 0.2,
      },
      height: {
        delay: 0.15,
        duration: 0.15,
      },
      ease: "easeIn",
    },
  },
  enter: {
    height: "auto",
    opacity: 1,
    y: 0,
    transition: {
      opacity: {
        delay: 0.15,
        duration: 0.15,
      },
      y: {
        delay: 0.15,
        duration: 0.15,
      },
      height: {
        duration: 0.2,
      },
      ease: "easeOut",
    },
  },
};

function PageDetailsMobile({ page }: { page: Page }) {
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [responsibilitiesOpen, setResponsibilitiesOpen] = useState(false);
  const [technologiesOpen, setTechnologiesOpen] = useState(false);

  return (
    <div className="flex w-[90%] flex-col items-center space-y-4 text-center lg:w-3/5 lg:space-y-8">
      <div className="flex flex-col space-y-2">
        <H1>{page.title}</H1>
        <H2>{page.subtitle}</H2>
      </div>
      <div className="flex flex-col space-y-2">
        {page.technologies || page.responsibilities ? (
          <>
            <h3 onClick={() => setDescriptionOpen(!descriptionOpen)}>
              <UpperSmall>Description</UpperSmall>
            </h3>
            <motion.p
              className="pointer-events-none"
              variants={infoVariants}
              initial="hidden"
              animate={descriptionOpen ? "enter" : "hidden"}
            >
              {page.description}
            </motion.p>
          </>
        ) : (
          <p>{page.description}</p>
        )}
      </div>
      {page.responsibilities && (
        <div className="flex flex-col space-y-2">
          <h3 onClick={() => setResponsibilitiesOpen(!responsibilitiesOpen)}>
            <UpperSmall>Responsibilities</UpperSmall>
          </h3>
          <motion.p
            className="pointer-events-none"
            variants={infoVariants}
            initial="hidden"
            animate={responsibilitiesOpen ? "enter" : "hidden"}
          >
            {page.responsibilities}
          </motion.p>
        </div>
      )}
      {page.technologies && (
        <div className="flex flex-col space-y-2">
          <h3 onClick={() => setTechnologiesOpen(!technologiesOpen)}>
            <UpperSmall>Technologies</UpperSmall>
          </h3>
          <motion.p
            className="pointer-events-none"
            variants={infoVariants}
            initial="hidden"
            animate={technologiesOpen ? "enter" : "hidden"}
          >
            {page.technologies}
          </motion.p>
        </div>
      )}
      <div className="flex items-center space-x-4">
        {page.website && (
          <a href={page.website} target="_blank" rel="noreferrer">
            {page.header === "Portfolio" ? (
              <Button>{page.buttonText}</Button>
            ) : (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm89.8 96h-43.92c-1.15-30.72-11.09-59.83-27.94-82.2A90.18 90.18 0 0 1 217.8 122ZM128 218a1.75 1.75 0 0 1-1.32-.59c-19.56-21.07-31.26-51.2-32.56-83.41h67.75c-1.29 32.21-13 62.34-32.55 83.41a1.75 1.75 0 0 1-1.32.59Zm-33.88-96c1.3-32.21 13-62.34 32.56-83.41a1.77 1.77 0 0 1 2.64 0c19.56 21.07 31.26 51.2 32.55 83.41Zm15.94-82.2C93.21 62.17 83.27 91.28 82.12 122H38.2a90.18 90.18 0 0 1 71.86-82.2ZM38.2 134h43.92c1.15 30.72 11.09 59.83 27.94 82.2A90.18 90.18 0 0 1 38.2 134Zm107.74 82.2c16.85-22.37 26.79-51.48 27.94-82.2h43.92a90.18 90.18 0 0 1-71.86 82.2Z"
                />
              </motion.svg>
            )}
          </a>
        )}

        {page.github && (
          <a href={page.github} target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M206.13 75.92A57.79 57.79 0 0 0 201.2 29a6 6 0 0 0-5.2-3a57.77 57.77 0 0 0-47 24h-26a57.77 57.77 0 0 0-47-24a6 6 0 0 0-5.2 3a57.79 57.79 0 0 0-4.93 46.92A55.88 55.88 0 0 0 58 104v8a54.06 54.06 0 0 0 50.45 53.87A37.85 37.85 0 0 0 98 192v10H72a26 26 0 0 1-26-26a38 38 0 0 0-38-38a6 6 0 0 0 0 12a26 26 0 0 1 26 26a38 38 0 0 0 38 38h26v18a6 6 0 0 0 12 0v-40a26 26 0 0 1 52 0v40a6 6 0 0 0 12 0v-40a37.85 37.85 0 0 0-10.45-26.13A54.06 54.06 0 0 0 214 112v-8a55.88 55.88 0 0 0-7.87-28.08ZM202 112a42 42 0 0 1-42 42h-48a42 42 0 0 1-42-42v-8a43.86 43.86 0 0 1 7.3-23.69a6 6 0 0 0 .81-5.76a45.85 45.85 0 0 1 1.43-36.42a45.85 45.85 0 0 1 35.23 21.1a6 6 0 0 0 5.06 2.77h32.34a6 6 0 0 0 5.06-2.76a45.83 45.83 0 0 1 35.23-21.11a45.85 45.85 0 0 1 1.43 36.42a6 6 0 0 0 .79 5.74A43.78 43.78 0 0 1 202 104Z"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default PageDetailsMobile;
