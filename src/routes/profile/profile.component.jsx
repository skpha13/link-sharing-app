import { useState, useEffect } from "react";
import avatar from "../../assets/avatar_01.png";
import FormItem from "../formItem/formItem.component";
import axios from "axios";

const Profile = () => {
  const [isUserLoaded, setisUserLoaded] = useState(false);
  const [fields, setFields] = useState([
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
  ]);

  useEffect(() => {
    const getUserByID = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7299/api/User/GetUserById?id=1"
        );
        setisUserLoaded(true);
        const updatedFields = fields.map((field, index) => {
          switch (index) {
            case 0:
              return { ...field, placeholder: response.data.name };

            case 1:
              return { ...field, placeholder: response.data.name };

            case 2:
              return { ...field, placeholder: response.data.email };

            default:
              return { ...field, placeholder: "" };
          }
        });
        setFields(updatedFields);
      } catch (error) {
        console.error(error);
        return [];
      }
    };

    getUserByID();
  }, [fields]);

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

      {isUserLoaded ? (
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
      ) : (
        <p>Loading...</p>
      )}

      <div className="flex justify-end">
        <button className="bg-indigo-500 text-white p-2 rounded-lg min-w-[64px]">
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
