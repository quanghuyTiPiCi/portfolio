import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { SelectedPage } from "@/app/shared/types";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import Profile from "@/app/assets/profile.jpg";
import SocialMediaIcons from "@/app/components/Shared/SocialMediaIcons";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Landing = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id='home' className='gap-16 py-10 '>
      <div className='w-5/6 mx-auto md:h-full md:flex md:items-center md:justify-between'>
        {/* IMAGE SECTION */}
        <div className='z-10 mt-16 flex basis-3/5 justify-center md:order-2 md:mt-32'>
          {isAboveMediumScreens ? (
            <div
              className='relative z-0 ml-20 before:absolute before:-left-20 before:-top-20 before:z-[-1]
          before:h-full before:w-full before:max-w-[400px]  before:border-2 before:border-blue'
            >
              <Image
                src={Profile}
                alt='profile'
                className='z-10 w-full max-w-[300px] transition duration-500 hover:saturate-200 hover:filter md:max-w-[400px]'
              />
            </div>
          ) : (
            <Image
              src={Profile}
              alt='profile'
              className='z-10 w-full max-w-[300px] transition duration-500 hover:saturate-200 hover:filter md:max-w-[400px]'
            />
          )}
        </div>
        {/* MAIN SECTION */}
        <div className='z-30 mt-12 basis-2/5 md:mt-32'>
          {/* HEADING */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className='z-10 text-center font-playfair text-6xl md:text-start'>
              Trần Quang{" "}
              <span
                className='z-20 before:absolute before:-left-[30px] before:-top-[120px] before:z-[-1]
            xs:relative xs:font-semibold xs:text-deep-blue xs:before:content-brush'
              >
                Huy
              </span>
            </p>
            <p className='mb-7 mt-10 text-center text-sm md:text-start'>
              Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum viverra malesuada
              sem ac faucibus dolor. Sagittis scelerisque.
            </p>
          </motion.div>
          {/* CALL TO ACTIONS */}
          <motion.div
            className='mt-5 flex justify-center md:justify-start'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Link
              className='rounded-sm bg-gradient-rainblue px-7 py-3 font-semibold text-deep-blue
          transition duration-500 hover:bg-blue hover:text-white'
              href={`#${SelectedPage.CONTACT}`}
              onClick={() => setSelectedPage(SelectedPage.CONTACT)}
            >
              Contact Me
            </Link>
            <Link
              className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
              href={`#${SelectedPage.CONTACT}`}
              onClick={() => setSelectedPage(SelectedPage.CONTACT)}
            >
              <div className='flex h-full w-full items-center justify-center bg-deep-blue px-10 font-playfair transition duration-500 hover:text-red'>
                {`Let's talk`}
              </div>
            </Link>
          </motion.div>
          <motion.div
            className='mt-5 flex justify-center md:justify-start'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
