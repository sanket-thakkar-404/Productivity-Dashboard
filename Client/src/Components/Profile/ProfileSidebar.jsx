import MenuItem from "./MenuItem";
import ProfileAvatar from "./ProfileAvatar";

const ProfileSidebar = () => {
  return (
    <div className="p-3  rounded-2xl">
      <div className="flex w-full h-full justify-center item-center">
        <ProfileAvatar />
      </div>
      <div className="mt-20 p-3 space-y-3">
        <MenuItem icon="ri-file-list-line" text="Account Details" active />
        <MenuItem icon="ri-truck-line" text="Address" />
        <MenuItem icon="ri-lock-line" text="Password" />
      </div>
    </div>
  );
};

export default ProfileSidebar;
