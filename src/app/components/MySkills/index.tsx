import Image from "next/image";
import { motion } from "framer-motion";

import LineGradient from "@/app/components/Shared/LineGradient";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import Skills from "@/app/assets/skills-image.png";

type Props = {};

const MySkills = ({}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id='skills' className='pb-48 pt-48'>
      {/* HEADER AND IMAGE SECTION */}
      <div className='w-5/6 mx-auto'>
        <div className='md:flex md:justify-between md:gap-16 '>
          <motion.div
            className='md:w-1/3'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className='mb-5 font-playfair text-4xl font-semibold'>
              MY <span className='text-red'>SKILLS</span>
            </p>
            <LineGradient width='w-1/3' />
            <p className='mb-7 mt-10'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </motion.div>
          <div className='mt-16 md:mt-0'>
            {isAboveMediumScreens ? (
              <div
                className='relative z-0 ml-20 before:absolute before:-left-10 before:-top-10
            before:z-[-1] before:h-full before:w-full 
            before:rounded-t-[400px] before:border-2 before:border-blue'
              >
                <Image className='z-10 ' src={Skills} alt='skills' />
              </div>
            ) : (
              <Image className='z-10 ' src={Skills} alt='skills' />
            )}
          </div>
        </div>
        {/* SKILLS */}
        <div className='mt-16 gap-32 md:flex md:justify-between'>
          {/* EXPERIENCE */}
          <motion.div
            className='mt-10 md:w-1/3'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className='relative h-32'>
              <div className='z-10'>
                <p className='font-playfair text-5xl font-semibold'>01</p>
                <p className='mt-3 font-playfair text-3xl font-semibold'>Experience</p>
              </div>
              <div className='absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-blue md:w-3/4'></div>
            </div>
            <p className='mt-5'>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
          </motion.div>
          {/* INNOVATIVE */}
          <motion.div
            className='mt-10 md:w-1/3'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className='relative h-32'>
              <div className='z-10'>
                <p className='font-playfair text-5xl font-semibold'>01</p>
                <p className='mt-3 font-playfair text-3xl font-semibold'>Innovative</p>
              </div>
              <div className='absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-red md:w-3/4'></div>
            </div>
            <p className='mt-5'>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout
            </p>
          </motion.div>
          {/* IMAGINATIVE */}
          <motion.div
            className='mt-10 md:w-1/3'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className='relative h-32'>
              <div className='z-10'>
                <p className='font-playfair text-5xl font-semibold'>01</p>
                <p className='mt-3 font-playfair text-3xl font-semibold'>Imaginative</p>
              </div>
              <div className='absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-yellow md:w-3/4'></div>
            </div>
            <p className='mt-5'>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
