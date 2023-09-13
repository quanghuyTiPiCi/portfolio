import LineGradient from "@/app/components/Shared/LineGradient";
import { motion } from "framer-motion";
import Project from "./Project";
import Project1 from "@/app/assets/project-1.jpeg";
import Project2 from "@/app/assets/project-2.jpeg";
import Project3 from "@/app/assets/project-3.jpeg";
import Project4 from "@/app/assets/project-4.jpeg";
import Project5 from "@/app/assets/project-5.jpeg";
import Project6 from "@/app/assets/project-6.jpeg";
import Project7 from "@/app/assets/project-7.jpeg";

type Props = {};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Projects = ({}: Props) => {
  return (
    <section id='projects' className='pb-48 pt-48'>
      {/* HEADINGS */}
      <motion.div
        className='mx-auto text-center md:w-2/5'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0.5, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className='font-playfair text-4xl font-semibold'>
            <span className='text-red'>PRO</span>JECTS
          </p>
          <div className='mt-5 flex justify-center'>
            <LineGradient width='w-1/3' />
          </div>
        </div>
        <p className='my-10'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book
        </p>
      </motion.div>
      {/* PROJECTS */}
      <div className='flex justify-center'>
        <motion.div
          className='sm:grid sm:grid-cols-3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div
            className='max-h[400px] flex max-w-[400px] items-center justify-center bg-red
            p-10 text-center font-playfair text-2xl font-semibold'
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title='Project 1' image={Project1} />
          <Project title='Project 2' image={Project2} />
          {/* ROW 2 */}
          <Project title='Project 3' image={Project3} />
          <Project title='Project 4' image={Project4} />
          <Project title='Project 5' image={Project5} />
          {/* ROW 3 */}
          <Project title='Project 6' image={Project6} />
          <Project title='Project 7' image={Project7} />
          <div
            className='max-h[400px] flex max-w-[400px] items-center justify-center bg-blue
            p-10 text-center font-playfair text-2xl font-semibold'
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
