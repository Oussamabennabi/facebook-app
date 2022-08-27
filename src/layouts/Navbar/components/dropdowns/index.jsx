import React from 'react'

// REACT ICONS
import { VscSettingsGear } from "react-icons/vsc";
import { IoMdHelpCircle } from "react-icons/io";
import {
  MdFeedback,
  MdOutlineArrowForwardIos,
  MdLock,
  MdLanguage,
  MdOutlineMailOutline,
} from "react-icons/md";
import {GoReport} from 'react-icons/go'
import { ImExit } from "react-icons/im";
import { FaLock } from 'react-icons/fa'
import { BsListStars, BsFillMoonFill } from "react-icons/bs";
import {RiListSettingsFill} from 'react-icons/ri'

import { ReactComponent as BackIcon } from '../../assets/icons/back.svg';
import { DropdownItem } from '../Dropdown';

import { useSelector, useDispatch } from "react-redux";
import { signOutAPI } from '../../../../features/authentication/services/userAPI';

export const MainDropdown = ({ setActiveMenu }) => {
  
  const { userPhoto, userName } = useSelector((s) => s.user);
  const dispatch = useDispatch()

  
  return (
    <>
      <div className="shadow-black mb-3 shadow-sm rounded-md">
        <DropdownItem
          leftIcon={
            <img className="user-icon" alt={userName} src={userPhoto} />
          }
        >
          <h3 className="text-white font-semibold text-base">{userName}</h3>
        </DropdownItem>
        <hr className="border-gray-700 w-11/12 mx-auto my-1" />
        <DropdownItem>
          <h3 className="text-blue-500 font-semibold text-sm">
            See all profiles
          </h3>
        </DropdownItem>
      </div>
      <div onClick={() => setActiveMenu("settings")}>
        <DropdownItem
          rightIcon={<MdOutlineArrowForwardIos />}
          leftIcon={<VscSettingsGear />}
        >
          <h3 className="text-white font-semibold ">Settings & privacy</h3>
        </DropdownItem>
      </div>
      <div onClick={() => setActiveMenu("help")}>
        <DropdownItem
          rightIcon={<MdOutlineArrowForwardIos />}
          leftIcon={<IoMdHelpCircle />}
        >
          <h3 className="text-white font-semibold ">Help & support </h3>
        </DropdownItem>
      </div>
      <div onClick={() => setActiveMenu("display")}>
        <DropdownItem
          rightIcon={<MdOutlineArrowForwardIos />}
          leftIcon={<BsFillMoonFill />}
        >
          <h3 className="text-white font-semibold ">Display & accessibility</h3>
        </DropdownItem>
      </div>
      <DropdownItem leftIcon={<MdFeedback />}>
        <h3 className="text-white font-semibold ">Give feedback</h3>
      </DropdownItem>
      <div onClick={()=>dispatch(signOutAPI())}>
        <DropdownItem leftIcon={<ImExit />}>
          <h3 className="text-white font-semibold ">Log Out</h3>
        </DropdownItem>
      </div>
      <p className="text-sm text-neutral-500 mt-4">
        <a href="#privacy">Privacy</a>· <a href="#Terms">Terms</a>·{" "}
        <a href="#Advertising">Advertising</a>·{" "}
        <a href="#Ad Choices">Ad Choices</a>· <a href="#Cookies">Cookies</a>· ·
        Meta © 2022
      </p>
    </>
  );
};


export const SettingsDropdown = ({ setActiveMenu }) => {
  return (
    <>
      <div className="dropdown-header mb-3">
        <span onClick={() => setActiveMenu("main")}>
          <BackIcon className="icon" />
        </span>

        <h1 className="font-bold text-2xl text-white">Settings & privacy</h1>
      </div>
      {/* item */}
      <div>
        <DropdownItem leftIcon={<VscSettingsGear />}>
          <h3 className="text-white font-semibold ">Settings</h3>
        </DropdownItem>
      </div>

      {/* item */}
      <div>
        <DropdownItem leftIcon={<MdLock />}>
          <h3 className="text-white font-semibold ">Privacy Checkup</h3>
        </DropdownItem>
      </div>

      {/* item */}
      <div>
        <DropdownItem leftIcon={<FaLock />}>
          <h3 className="text-white font-semibold ">Privacy Center</h3>
        </DropdownItem>
      </div>

      {/* item */}
      <div>
        <DropdownItem leftIcon={<BsListStars />}>
          <h3 className="text-white font-semibold ">Activity log</h3>
        </DropdownItem>
      </div>

      {/* item */}
      <div>
        <DropdownItem leftIcon={<RiListSettingsFill />}>
          <h3 className="text-white font-semibold ">Feed</h3>
        </DropdownItem>
      </div>

      {/* item */}
      <div>
        <DropdownItem leftIcon={<MdLanguage />}>
          <h3 className="text-white font-semibold ">Language</h3>
        </DropdownItem>
      </div>
    </>
  );
};

export const HelpDropdown = ({ setActiveMenu }) => {
  return (
    <>
      <div className="dropdown-header mb-3">
        <span onClick={() => setActiveMenu("main")}>
          <BackIcon className="icon" />
        </span>
        <h1 className="font-bold text-2xl text-white">Help & support</h1>
      </div>
      {/* item */}
      <div>
        <DropdownItem leftIcon={<IoMdHelpCircle />}>
          <h3 className="text-white font-semibold ">Help Center</h3>
        </DropdownItem>
      </div>

      {/* item */}
      <div>
        <DropdownItem leftIcon={<MdOutlineMailOutline />}>
          <h3 className="text-white font-semibold ">Support Inbox</h3>
        </DropdownItem>
      </div>

      {/* item */}
      <div>
        <DropdownItem leftIcon={<GoReport />}>
          <h3 className="text-white font-semibold ">Report a problem</h3>
        </DropdownItem>
      </div>
    </>
  );
};
          

export const DisplayDropdown = ({ setActiveMenu }) => {
  return <div></div>;
};
