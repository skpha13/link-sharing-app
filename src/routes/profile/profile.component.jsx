import avatar from "../../assets/avatar_01.png";
import FormItem from "../formItem/formItem.component";

const Profile = () => {
  const fields = [
    {
      label: "First Name*",
      placeholder: "Ben",
    },
    {
      label: "Last Name*",
      placeholder: "Wrigth",
    },
    {
      label: "Email*",
      placeholder: "ben@example.com",
    },
  ];

  return (
    <div className="bg-white rounded-lg m-4 p-4">
      <h1 className="font-bold text-lg">Profile Details</h1>
      <p className="text-slate-700">
        Add your details to create a personal touch to your profile
      </p>

      <div className="flex justify-between items-center m-4 bg-grey p-4 rounded-lg">
        <p className="text-slate-700">Profile Picture</p>

        <img
          src={avatar}
          alt="Avatar"
          className="max-w-[200px] rounded-lg"
        ></img>

        <p className="text-slate-700">
          Image must be below 1024
          <span className="text-slate-700 text-sm">x</span>1024 px.
          <br />
          Use PNG, JPG, or BMP format.
        </p>
      </div>

      <div className="flex flex-col items-center m-4 bg-grey p-4 rounded-lg">
        {fields.map((field) => {
          return (
            <FormItem
              key={field.label}
              labelName={field.label}
              placeholder={field.placeholder}
            />
          );
        })}
      </div>

      <div className="flex justify-end">
        <button className="bg-indigo-500 text-white p-2 rounded-lg min-w-[64px]">
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
