import { Outlet, NavLink } from "react-router-dom";

const Account = () => {
  return (
    <div className="bg-[#181931] pt-20 w-full ">
      <div className="links-container bg-[#232345] h-20 px-2 sm:px-28 flex items-center gap-4 text-center sm:text-left">
        <NavLink
          to="/account/myaccount"
          className={({ isActive }) =>
            isActive ? "active-decoration " : "text-white"
          }
        >
          My Account
        </NavLink>
        <NavLink
          to="/account/mytransactions"
          className={({ isActive }) =>
            isActive ? "active-decoration " : "text-white"
          }
        >
          My Transactions
        </NavLink>
        <NavLink
          to="/account/liveevents"
          className={({ isActive }) =>
            isActive ? "active-decoration " : "text-white"
          }
        >
          Live Events
        </NavLink>
        <NavLink
          to="/account/closedevents"
          className={({ isActive }) =>
            isActive ? "active-decoration " : "text-white"
          }
        >
          Closed Events
        </NavLink>
        <NavLink
          to="/account/resolvedevents"
          className={({ isActive }) =>
            isActive ? "active-decoration " : "text-white"
          }
        >
          Resolved Events
        </NavLink>
        <NavLink
          to="/account/mytrade"
          className={({ isActive }) =>
            isActive ? "active-decoration " : "text-white"
          }
        >
          My Trade
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Account;
