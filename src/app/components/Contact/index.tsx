import React from "react";
import { motion } from "framer-motion";
import LineGradient from "../Shared/LineGradient";
import { PhoneIcon, EnvelopeIcon, GlobeAltIcon, MapPinIcon } from "@heroicons/react/24/solid";
import SocialMediaIcons from "@/app/components/Shared/SocialMediaIcons";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section id='contact' className='pt-32 pb-32'>
      <div className='w-5/6 mx-auto'>
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
          <div className='w-fit'>
            <p className='text-4xl uppercase font-semibold font-playfair mb-2'>Contact</p>
            <div>
              <LineGradient />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          animate={{
            rotateX: 360,
          }}
          className='mt-20'
        >
          <div className='relative overflow-hidden rounded-lg w-1/2 h-[300px] bg-primary-400 mx-auto shadow-lg shadow-indigo-500/50 flex items-end before:content-brush before:absolute before:top-[-80px] before:left-0 before:z-[1]'>
            <div className='h-3/4 bg-white w-full p-5 rounded-b-lg md:flex justify-between relative z-[2]'>
              <div>
                <p className='text-lg text-black font-semibold'>Trần Quang Huy</p>
                <p className='text-sm text-primary-400 mb-2'>Developer React JS</p>
                <div className='h-[2px] bg-gray-500 w-1/4' />
                <div className='mt-5'>
                  <p className='my-2 text-gray-600 text-sm flex items-center gap-x-2'>
                    <PhoneIcon className='w-4 h-4 text-primary-400' />
                    (+84) 932 221 244
                  </p>
                  <p className='my-2 text-gray-600 text-sm flex items-center gap-x-2'>
                    <EnvelopeIcon className='w-4 h-4 text-primary-400' />
                    quanghuytrandn@gmail.com
                  </p>
                  <p className='my-2 text-gray-600 text-sm flex items-center gap-x-2'>
                    <GlobeAltIcon className='w-4 h-4 text-primary-400' />
                    Hòa Vang, Đà Nẵng
                  </p>
                  {/* <p className='my-2'>
                  <MapPinIcon className='w-4 h-4 text-primary-400' />
                </p> */}
                </div>
              </div>
              <div className='bg-primary-400 h-fit p-6 rounded-lg'>
                <SocialMediaIcons />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
