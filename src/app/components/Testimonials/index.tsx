import { motion } from "framer-motion";
import LineGradient from "@/app/components/Shared/LineGradient";

type Props = {};

const Testimonials = ({}: Props) => {
  const testimonialsStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
   justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

  return (
    <section id='testimonials' className='pb-16 pt-32'>
      <div className='w-5/6 mx-auto'>
        <motion.div
          className='text-center md:w-1/3 md:text-left'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='mb-5 font-playfair text-4xl font-semibold text-red'>TESTIMONIALS</p>
          <LineGradient width='w-2/4 mx-auto' />
          <p className='mt-10'>Contrary to popular belief, Lorem Ipsum is not simply random text</p>
        </motion.div>
        {/* TESTIMONIALS */}
        <div className='gap-8 md:flex md:justify-between'>
          <motion.div
            className={`bg-blue ${testimonialsStyles} before:content-person1`}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className='font-playfair text-6xl'>“</p>
            <p className='text-center text-xl'>
              There are many variations of passages of Lorem Ipsum available
            </p>
          </motion.div>
          <motion.div
            className={`bg-yellow ${testimonialsStyles} before:content-person2`}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className='font-playfair text-6xl'>“</p>
            <p className='text-center text-xl'>
              Contrary to popular belief, Lorem Ipsum is not simply random text
            </p>
          </motion.div>
          <motion.div
            className={`bg-red ${testimonialsStyles} before:content-person3`}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className='font-playfair text-6xl'>“</p>
            <p className='text-center text-xl'>This book is a treatise on the theory of ethics</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
