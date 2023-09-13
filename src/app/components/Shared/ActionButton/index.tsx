import { SelectedPage } from "@/app/shared/types";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <Link
      className='cursor-pointer rounded-md bg-secondary-500 px-10 py-2 transition-colors hover:bg-primary-500'
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
      scroll={true}
    >
      {children}
    </Link>
  );
};

export default ActionButton;
