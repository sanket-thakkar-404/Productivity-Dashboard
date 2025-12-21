import React, { useRef } from "react";

const ProfileAvatar = () => {

  const filRef = useRef(null)

  return (
    <div
      onClick={() => filRef.current.click()}
      className="h-70 w-70 mt-15 rounded-2xl relative cursor-pointer"
    >
      <img
        src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
        alt="profile photo"
        className="w-full h-full rounded-2xl brightness-75 contrast-75"
      />

      <i className="ri-camera-4-line text-5xl absolute text-white z-40 bottom-35 left-30"></i>
      <h5 className="text-center text-2xl absolute left-18 bottom-6 text-white">
        Click to change <br /> Photo
      </h5>
      <div><input type="file"  ref={filRef} hidden  accept="image/*"/></div>
    </div>
  );
};

export default ProfileAvatar;
