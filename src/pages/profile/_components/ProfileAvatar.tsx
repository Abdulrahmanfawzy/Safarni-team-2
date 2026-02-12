import React from "react";
import { mockProfileData } from "../_mock/MockProfileData";

function ProfileAvatar() {
  return (
    <div className="p-1 rounded-full bg-linear-to-r from-[#3F52B4] to-[#B22459] flex justify-center items-center">
      <img
        src={mockProfileData.profileImage}
        alt="Profile Avatar"
        className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover"
      />
    </div>
  );
}

export default ProfileAvatar;
