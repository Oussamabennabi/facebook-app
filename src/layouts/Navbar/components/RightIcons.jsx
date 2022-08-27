import React, { useRef, useState } from 'react'
import { ReactComponent as CreateIcon } from "../assets/icons/create.svg";
import { ReactComponent as MessengerIcon } from "../assets/icons/messenger.svg";
import { ReactComponent as NotificationIcon } from "../assets/icons/notification.svg";
import {Dropdown} from "./Dropdown";
import { useOutsideAlerter } from "../../../hooks/useOutsideAlert";
import {useSelector} from 'react-redux'
const RightIcons = () => {
  const [isOpen, setIsOpen] = useState(false);
 const wrapperRef = useRef(null);
 useOutsideAlerter(wrapperRef, setIsOpen);
  const { userPhoto } = useSelector((s) => s.user)
  
  return (
    <div className="right-icons-container icons-container">
      <button className="icon ">
        <CreateIcon fill="#d0d1d5" className="mb-1 mr-1" />
        <div className="info-text">Create</div>
      </button>
      <button className="icon">
        <MessengerIcon fill="#d0d1d5" />
        <div className="info-text">Messenger</div>
      </button>
      <button className="icon">
        <NotificationIcon fill="#d0d1d5" />
        <div className="info-text">Notification</div>
      </button>
      <button onClick={() => setIsOpen(!isOpen)} className="user-icon">
        <img src={userPhoto} alt={""} />
        <div className="info-text">Account</div>
      </button>
      <div ref={wrapperRef}>{isOpen && <Dropdown />}</div>
    </div>
  );
}

export default RightIcons