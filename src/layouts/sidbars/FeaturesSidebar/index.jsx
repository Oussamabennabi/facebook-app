import React, { useEffect, useState } from 'react'
import SidebarItem from '../components/ui/SidebarItem'

import {FeaturesIcons,YourShortcutsIcons} from './utils'

import { ReactComponent as SeeMoreIcon } from './assets/icons/see_more.svg'
import { ReactComponent as SeeLessIcon } from './assets/icons/see_less.svg'
import ExpandIcon from '../components/ui/ExpandIcon'

import { useSelector } from "react-redux";


const FeaturesSidebar = () => {
  const { userName, userPhoto } = useSelector((s) => s.user);
  const [isListExpaned, setIsListExpaned] = useState(false);
  const [iconsCount, setIconsCount] = useState(6);
  useEffect(() => {
    if (isListExpaned) {
      setIconsCount(FeaturesIcons.length);
    } else {
      setIconsCount(6);
    }
  }, [isListExpaned]);
  return (
    <div className="overflow-y-scroll h-full w-full max-w-none :max-w-[calc(360px)] flex justify-between  flex-col items-center py-4  px-2 ">
      {/* TODO: */}
      <div className="w-full">
        <SidebarItem leftIcon={userPhoto}>
          <h3 className=" font-semibold text-base text-white">{userName}</h3>
        </SidebarItem>
        {FeaturesIcons.slice(0, iconsCount).map((icon, i) => (
          <SidebarItem key={i} leftIcon={icon.icon}>
            <h3 className=" font-semibold text-base text-white">
              {icon.title}
            </h3>
          </SidebarItem>
        ))}

        <ExpandIcon
          state={isListExpaned}
          setState={setIsListExpaned}
          icon={
            isListExpaned ? (
              <SeeLessIcon fill="#E4E6EB" />
            ) : (
              <SeeMoreIcon fill="#E4E6EB" />
            )
          }
          text={isListExpaned ? "See less" : "See more"}
        />

        <hr className="border w-full my-3 border-neutral-700" />
      </div>
      {/*  */}
      <div className="w-full mb-auto">
        <div className="w-full flex justify-between  items-center">
          <span className="text-neutral-500 mx-1 font-bold">
            Your shortcuts
          </span>
          <button className="text-blue-700 ">Edit </button>
        </div>
        <div className="w-full my-3">
          {YourShortcutsIcons.map((icon, i) => (
            <SidebarItem key={i} leftIcon={icon.icon}>
              <h3 className=" font-semibold text-base text-white">
                {icon.title}
              </h3>
            </SidebarItem>
          ))}
        </div>
      </div>
      {/*  */}
      <div className="w-full">
        <p className="text-sm text-neutral-500 mt-4">
          <a href="#">Privacy</a>?? <a href="#">Terms</a>??{" "}
          <a href="#">Advertising</a>?? <a href="#">Ad Choices</a>??{" "}
          <a href="#">Cookies</a>?? ?? Meta ?? 2022
          <span className="block  mt-3">
            Made With ?????? By{" "}
            <a href="https://github.com/Oussamabennabi" target={"_blank"}>
              Oussama Bennabi
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default FeaturesSidebar