import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string;
  image: any;
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, image }: Props) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className='relative'>
      <div className={overlayStyles}>
        <p className='font-playfair text-2xl'>{title}</p>
        <p className='mt-7'>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan
          tincidunt.
        </p>
      </div>
      <Image
        width={400}
        height={400}
        src={image}
        alt={projectTitle}
      />
    </motion.div>
  );
};
export default Project;
