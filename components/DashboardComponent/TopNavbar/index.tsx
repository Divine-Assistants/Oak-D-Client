import { Avatar } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import {
  LayoutContext,
  NavContext,
  NotificationContext,
} from "@/context/UserDashboardLayout";
import { useRouter } from "next/router";
import { getSingleUser } from "@/api/api";

export interface userType {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export function TopNavbar() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [navTitle, setNavTitle] = useState<string>("");
  const { showNav, setShowNav } = useContext(LayoutContext);
  const { activeNav, setActiveNav } = useContext(NavContext);
  const { showNotification, setShowNotification } =
    useContext(NotificationContext);
  const [user, setUser] = useState<userType | null>(null);

  const router = useRouter();

  function handleSearchBar() {
    setShowSearchBar(true);
  }
  function handleNotification() {
    setActiveNav(6);
    setShowNotification(true);
    router.push("/dashboard/notification");
  }

  useEffect(() => {
    const getUser = async () => {
      const { data } = await getSingleUser();
      setUser(data);
    };
    getUser();
  }, []);

  useEffect(() => {
    if (activeNav === 0) {
      setNavTitle("Dashboard");
    } else if (activeNav === 1) {
      setNavTitle("Transaction");
    } else if (activeNav === 2) {
      setNavTitle("Generate Quote");
    } else if (activeNav === 3) {
      setNavTitle("Support");
    } else if (activeNav === 4) {
      setNavTitle("FAQ's");
    } else if (activeNav === 5) {
      setNavTitle("Settings");
    } else if (activeNav === 6) {
      setNavTitle("Notification");
    } else {
      setNavTitle("");
    }
  }, [activeNav]);

  return (
    user && (
      <div className="flex items-center lg:col-span-10 p-[10px] ">
        <div
          onClick={() => setShowNav(true)}
          className={
            showSearchBar ? `hidden` : `mr-auto lg:hidden cursor-pointer`
          }
        >
          <img src="../img/menu-bar-icon.svg" alt="Menu Bar" className="" />
        </div>

        <div className="hidden lg:block mr-auto ">
          <h1 className="text-[28px] font-[600]">{navTitle}</h1>
        </div>
       
        <div
          className={
            showSearchBar
              ? `relative w-[100%] cursor:pointer`
              : `hidden lg:block lg:w-[40%] lg:flex lg:items-center lg:relative lg:mr-[20px]`
          }
        >
          <img
            src="../img/search-icon.svg"
            alt="Search Icon"
            className="absolute top-[50%] transform translate-y-[-50%] left-[20px] "
          />

          <input
            type="text"
            placeholder="Search"
            className="bg-[#F3F3F3] w-[100%] px-[50px] text-[16px] md:text-[18px] py-[15px] outline-none rounded-[4px]"
          />

          <img
            src="../img/close-icon.svg"
            alt="Close Icon"
            className="absolute top-[50%] transform translate-y-[-50%] right-[20px] cursor-pointer lg:hidden "
            onClick={() => setShowSearchBar(false)}
          />
        </div>

        <div
          onClick={handleSearchBar}
          className={
            showSearchBar
              ? `hidden`
              : `bg-[#F3F3F3] p-[10px] mr-[10px] rounded-[10px] cursor-pointer lg:hidden`
          }
        >
          <img
            src="../img/search-icon.svg"
            alt="Search Icon"
            className="h-[20px] md:h-[30px]"
          />
        </div>

        {/* <div
          onClick={handleNotification}
          style={{ backgroundColor: showNotification ? "#0A089A" : "#F3F3F3" }}
          className={
            showSearchBar
              ? `hidden lg:block`
              : `p-[10px] mx-[30px] rounded-[10px] cursor-pointer`
          }
        >
          <img
            src={
              showNotification
                ? `../img/active-notification-icon.svg`
                : `../img/notification-icon.svg`
            }
            alt="Notification Icon"
            className="h-[20px] md:h-[30px] "
          />
        </div> */}

        <div
          className={
            showSearchBar
              ? `hidden lg:block`
              : `block lg:flex lg:items-center lg:gap-x-[10px] `
          }
        >
          <div className="flex items-center justify-center h-[50px] w-[50px] md:h-[70px] md:w-[70px] rounded-[50%] p-[10px] font-[700] text-[18px] md:text-[24px] bg-[#F3F3F3] text-[#0A089A] ">
            <p>{`${user?.firstName.charAt(0).toUpperCase()}${user?.lastName.charAt(0).toUpperCase()}`}</p>
          </div>

          <div className="hidden lg:block text-[#1E1E1E] ">
            <p className="text-[16px] font-[600] ">{`${user?.firstName} ${user?.lastName}`}</p>
            <p className="text-[13px] text-[#9C9C9C] font-[500] ">
              {user?.email}
            </p>
          </div>
        </div>
      </div>
    )
  );
}
