import { Link } from "react-router-dom";

const MainSettings = () => {
  return (
    <div className="mt-8 bg-gray-100">
      <ul className="flex gap-4 justify-start ml-10 text-xl">
        <li>
          <Link to="/*">Profile</Link>
        </li>
        <li>
          <Link to="/security">Security</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainSettings;