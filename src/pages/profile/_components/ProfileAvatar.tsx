import React from "react";
import { mockProfileData } from "../MockProfileData";
function ProfileAvatar() {
  return (
    <div className="p-0.75 rounded-full bg-linear-to-r from-[#3F52B4] to-[#B22459]">
      <img
        src={mockProfileData.profileImage}
        alt="Profile Avatar"
        className="w-31.5 h-31.5 rounded-full"
      />
    </div>
  );
}

export default ProfileAvatar;
