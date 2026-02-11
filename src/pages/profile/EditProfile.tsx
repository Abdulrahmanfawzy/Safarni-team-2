import { useSelector } from "react-redux";
import type { RootState } from "../../store";

import BackButton from "../../components/ui/BackButton";

function EditProfile() {
  const profile = useSelector((state: RootState) => state.profile);

  return (
    <div className="max-w-7xl mx-auto mt-20 p-4">
      <BackButton />
      <div className="gradient-border-single p-8 rounded-2xl">
        <h1 className="text-center font-bold text-xl">Personal Information</h1>
        <form className="flex flex-col gap-2 mt-8">
          <label className="flex flex-col gap-2" />
          Name
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="First Name"
            value={profile.firstName}
          />
          <label className="flex flex-col gap-2" />
          Email
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Email"
            value={profile.email}
          />
          <label className="flex flex-col gap-2" />
          Location
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="ex: Cairo, Egypt"
            value={profile.location}
          />
          <label className="flex flex-col gap-2" />
          Phone Number
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="ex: +201234567890"
            value={profile.phoneNumber}
          />
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
