import ProfileField from './ProfileField';
import FormSubmitBtn from './FormSubmitBtn';

const ProfilePage = () => {
  return (
    <div className="h-screen bg-zinc-600 text-white font-roboto flex place-content-center items-center gap-2">
      <div className="bg-zinc-500 rounded-lg w-2/5 flex flex-col items-center py-3 px-10 gap-3 font-semibold text-2xl">
        <h1 className="text-3xl font-bold">Profile Page</h1>
        <ProfileField keyText="Full Name" valueText="Muhesh" />
        <ProfileField keyText="Username" valueText="MuheshKumar" />
        <ProfileField keyText="Email" valueText="muhesh@gmail.com" />
        <ProfileField keyText="Phone Number" valueText="+9191234567890" />
        <ProfileField
          keyText="Credit Card Number"
          valueText="1111-2222-3333-4444"
        />
        <FormSubmitBtn textContent="Logout" />
      </div>
    </div>
  );
};

export default ProfilePage;
