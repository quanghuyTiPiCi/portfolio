import SocialMediaIcons from "@/app/components/Shared/SocialMediaIcons";
type Props = {};

const Footer = ({}: Props) => {
  return (
    <footer className='h-64 bg-primary-400 pt-10'>
      <div className='mx-auto w-5/6'>
        <SocialMediaIcons />
        <div className='justify-center text-center md:flex md:justify-between'>
          <p className='text-white font-playfair text-2xl font-semibold'>Trần Quang Huy</p>
          <p className='text-white font-playfair text-2xl font-semibold'>
            &copy;2023 Trần Quang Huy. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
