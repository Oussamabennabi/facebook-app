import React from "react";
//

import "../../assets/styles/index.css";
import { ReactComponent as LiveVideoIcon } from "../../assets/icons/live-video.svg";
import { ReactComponent as VideoPhotoIcon } from "../../assets/icons/photo-video.svg";
import { ReactComponent as FeelingActivityIcon } from "../../assets/icons/feeling-activity.svg";

//
import { useDispatch } from "react-redux";
import { MODULE_REDUCERS } from "../../../../store/module-slice";
//
import { useSelector } from "react-redux";

const CreateNewPostCard = () => {
  const dispatch = useDispatch();


  const { userName, userPhoto } = useSelector((s) => s.user);
  
  return (
    <div className="card-container section-container">
      <div className="post">
        <img src={userPhoto} alt={userPhoto} />
        <button
          onClick={() => dispatch(MODULE_REDUCERS.showModule())}
          className="post-btn"
          // disabled={isLoading}
        >
          What's on your mind, {userName}?
        </button>
      </div>
      <hr className="w-full border-neutral-600 my-2 mt-4" />
      <div className="icons">
        <button>
          <span>
            <LiveVideoIcon fill="#F2435F" />
          </span>

          <div className="text">Live Video</div>
        </button>

        <button onClick={() => dispatch(MODULE_REDUCERS.showModule())}>
          <span>
            <VideoPhotoIcon fill="#44BC62" />
          </span>
          <div className="text"> Photo/video</div>
        </button>
        <button>
          <span>
            <FeelingActivityIcon fill="#F7B829" />
          </span>
          <div className="text">Feeling/activity</div>
        </button>
      </div>
    </div>
  );
};

export default CreateNewPostCard;