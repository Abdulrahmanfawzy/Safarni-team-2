import Toggle from "./_components/Toggle";
import OptionCard from "./_components/OptionCard";
import BackButton from "../../components/ui/BackButton";

function AccountSecurity() {
  return (
    <div className="p-6 max-w-5xl mt-20 mx-auto space-y-6">
      <BackButton />
      <h1 className="text-2xl text-center font-bold text-gray-800">
        Account & Security
      </h1>

      {/* Toggles */}
      <div className="space-y-4">
        <Toggle label="Biometric ID" />
        <Toggle label="Face ID" />
      </div>

      {/* Options */}
      <div className="space-y-4">
        <OptionCard
          title="Device Management"
          description="Manage your account on the various devices you own."
        />
        <OptionCard
          title="Deactivate Account"
          description="Temporarily deactivate your account. Easily reactivate when you're ready."
        />
        <OptionCard
          title="Delete Account"
          description="Permanently remove your account and data from Tripmate. Proceed with caution."
          danger
        />
      </div>
    </div>
  );
}

export default AccountSecurity;
