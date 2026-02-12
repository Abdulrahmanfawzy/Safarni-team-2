import { Button } from "../../components/ui/button";
import {
  ChevronRight,
  Lock,
  LogOut,
  PanelTop,
  UserRoundPen,
} from "lucide-react";
import { useState } from "react";

import ProfileAvatar from "./_components/ProfileAvatar";
import Modal from "../../components/common/Modal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

function ProfileMenu() {
  const navigate = useNavigate();
  const profile = useSelector((state: RootState) => state.profile);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-8 max-w-7xl mt-20 mx-auto p-4">
      <div className="gradient-border-single flex justify-start items-center gap-8 p-8">
        <div className="mr-4">
          <ProfileAvatar />
        </div>
        <div className="flex flex-col gap-2">
          <div>{profile.firstName}</div>
          <div>{profile.email}</div>
        </div>
      </div>
      <div className="gradient-border-single p-8 rounded-2xl">
        <div className=" flex flex-col gap-6">
          <Button
            variant="ghost"
            className="w-full shadow cursor-pointer flex p-6 items-center justify-between"
            onClick={() => navigate("edit")}
          >
            <div className="flex  items-center justify-start gap-2">
              <UserRoundPen />
              <span>Personal Info</span>
            </div>
            <div>
              <ChevronRight />
            </div>
          </Button>
          <Button
            variant="ghost"
            className="w-full shadow cursor-pointer flex p-6 items-center justify-between"
            onClick={() => navigate("bookings")}
          >
            <div className="flex items-center justify-start gap-2">
              <PanelTop />
              <span>My Bookings</span>
            </div>
            <div>
              <ChevronRight />
            </div>
          </Button>

          <Button
            variant="ghost"
            className="w-full shadow cursor-pointer flex p-6 items-center justify-between"
            onClick={() => navigate("security")}
          >
            <div className="flex items-center justify-start gap-2">
              <Lock />
              <span>Account & Security</span>
            </div>
            <div>
              <ChevronRight />
            </div>
          </Button>
          <Button
            variant="ghost"
            className="w-full shadow cursor-pointer flex p-6 items-center justify-between"
            onClick={() => setIsLogoutModalOpen(true)}
          >
            <div className="flex items-center text-red-600 justify-start gap-2">
              <LogOut />
              <span>Logout</span>
            </div>
            <div>
              <ChevronRight />
            </div>
          </Button>
        </div>
      </div>

      <Modal
        open={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
      >
        <div className="flex flex-col gap-6">
          <p className="text-center text-xl">
            Do You Want To Register The Exit Already ?
          </p>
          <div className="flex gap-3 justify-center">
            <Button
              className="flex-1 cursor-pointer"
              onClick={() => {
                setIsLogoutModalOpen(false);
                // TODO: Add logout logic here
              }}
            >
              Yes, Log me Out
            </Button>
            <Button
              variant="outline"
              className="flex-1 cursor-pointer"
              onClick={() => setIsLogoutModalOpen(false)}
            >
              No
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProfileMenu;
