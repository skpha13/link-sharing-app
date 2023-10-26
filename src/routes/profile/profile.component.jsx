import { useState, useEffect } from "react";
import avatar from "../../assets/avatar_01.png";
import FormItem from "../formItem/formItem.component";
import axios from "axios";

const Profile = () => {
  const [isUserLoaded, setisUserLoaded] = useState(false);
  const [fields, setFields] = useState([]);

  const getUserByID = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7299/api/User/GetUserById?id=1"
      );

      let arr = [
        {
          label: "First Name*",
          placeholder: response.data.name,
        },
        {
          label: "Last Name*",
          placeholder: response.data.name,
        },
        {
          label: "Email*",
          placeholder: response.data.email,
        },
      ];
      return arr;
    } catch (error) {
      if (error.response.data.status !== 200)
        // show something on app
        console.log(error.response.data.title);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const arr = await getUserByID();
      setFields(arr);
      setisUserLoaded(true);
    };

    fetchData();
  }, []);

  var name = "";
  const updateInputData = (value, label) => {
    if (label === "First Name*") name = value;
  };

  const updateUser = async () => {
    try {
      const response = await axios.put(
        "https://localhost:7299/api/User/update?id=1",
        {
          name: name,
        }
      );
      if (response.status === 200) {
        // show something on app
        console.log(response.data);
        setFields([
          {
            label: "First Name*",
            placeholder: name,
          },
          {
            label: "Last Name*",
            placeholder: name,
          },
          {
            label: "Email*",
            placeholder: fields[2].placeholder,
          },
        ]);
      }
    } catch (error) {
      console.log(error.response.data.errors.Name[0]);
    }
  };

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
                onChangeHadler={updateInputData}
              />
            );
          })}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className="flex justify-end">
        <button
          onClick={updateUser}
          className="bg-indigo-500 text-white p-2 rounded-lg min-w-[64px]"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
