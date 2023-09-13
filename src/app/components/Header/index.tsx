"use client";

import Image from "next/image";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { SelectedPage } from "@/app/shared/types";
import React, { useEffect, useState } from "react";
import MenuItem from "@/app/components/Header/MenuItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/app/assets/Logo.png";
import { Pages } from "@/app/constants/menu";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const flexBetween = "flex items-center justify-between";

const Header = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.HOME);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.HOME);
      }

      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarBackground = isTopOfPage ? "" : "bg-primary-400 drop-shadow";

  return (
    <nav>
      <div className={`${navbarBackground} transition duration-200 fixed top-0 z-40 w-full py-6`}>
        <div className={`mx-auto w-5/6`}>
          <div className={`flex justify-between w-full gap-16`}>
            <Image src={Logo} alt='logo' />
            {isAboveMediumScreens ? (
              <div className={`${flexBetween}`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {Pages.map((it) => (
                    <MenuItem
                      key={it.id}
                      setSelectedPage={setSelectedPage}
                      selectedPage={selectedPage}
                      page={it.page}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <button
                className='rounded-full bg-secondary-500 p-2'
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className='h-6 w-6 text-white' />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow'>
          {/* CLOSE ICON */}
          <div className='flex justify-end p-12'>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className='h-6 w-6 text-gray-400' />
            </button>
          </div>
          {/*  MENU ITEMS */}
          <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
            {Pages.map((it) => (
              <MenuItem
                key={it.id}
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
                page={it.page}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
