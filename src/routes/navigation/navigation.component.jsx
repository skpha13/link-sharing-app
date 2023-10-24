import { Link, Outlet } from "react-router-dom";
const Navigation = () => {
  return (
    <>

    <div className="flex flex-row bg-white m-2 justify-center rounded-lg p-2 justify-between items-center">
      <h2>DevLinks</h2>
      <div>
        <Link
          to="/links"
          className="mr-10 text-gray hover:bg-purple-200 hover:text-purple-500 p-2 rounded-lg"
        >
          Links
        </Link>

        <Link
          to="/profile"
          className="mr-10 text-gray hover:bg-purple-200 hover:text-purple-500 p-2 rounded-lg"
        >
          Profile
        </Link>
      </div>

      <Link
        to="/preview"
        className="border-2 border-purple-500 rounded-lg p-2 text-purple-500"
      >
        Preview
      </Link>
    </div>
    <Outlet/>
    </>
  );
};

export default Navigation;
