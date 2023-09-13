import Twitter from "@/app/assets/twitter.png";
import Linkedin from "@/app/assets/linkedin.png";
import Facebook from "@/app/assets/facebook.png";
import Instagram from "@/app/assets/instagram.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const SocialMediaIcons = (props: Props) => {
  return (
    <div className="my-10 flex justify-center gap-7 md:justify-start">
      <Link
        href="https://www.linkedin.com"
        className="transition duration-500 hover:opacity-50"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={Linkedin} alt="linkedin-link" />
      </Link>
      <Link
        href="https://www.twitter.com"
        className="transition duration-500 hover:opacity-50"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={Twitter} alt="twitter-link" />
      </Link>
      <Link
        href="https://www.facebook.com"
        className="transition duration-500 hover:opacity-50"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={Facebook} alt="facebook-link" />
      </Link>
      <Link
        href="https://www.instagram.com"
        className="transition duration-500 hover:opacity-50"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={Instagram} alt="instagram-link" />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
