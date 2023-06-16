import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import { LayoutContext } from "@/context/UserDashboardLayout";
import { NavContext } from "@/context/UserDashboardLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { userData } from "@/pages/get-started";
import { getCookie, setCookie } from "cookies-next";

export function SideNavbar() {
  const { showNav, setShowNav } = useContext(LayoutContext);
  const { activeNav, setActiveNav } = useContext(NavContext);
  const router = useRouter();
  const token = getCookie("token");
  console.log(token);
  useEffect(() => {
    // set the active navbar state based on the current page URL
    const currentPath = window.location.pathname;
    if (currentPath === "/dashboard") {
      setActiveNav(0);
    } else if (currentPath === "/dashboard/transaction") {
      setActiveNav(1);
    } else if (currentPath === "/dashboard/generatequote") {
      setActiveNav(2);
    } else if (currentPath === "/dashboard/support") {
      setActiveNav(3);
    } else if (currentPath === "/dashboard/faq") {
      setActiveNav(4);
    } else if (currentPath === "/dashboard/settings") {
      setActiveNav(5);
    }
  }, []);

  const logoutUser = () => {
    setCookie("token", "");
    router.push("/login");
  };

  return (
    <div
      className={
        showNav
          ? `absolute z-[100] bg-[#FFFFFF] w-[100%] top-[0%] left-[0%] py-[50px] px-[30px]`
          : `hidden lg:block lg:static lg:col-span-2 lg:row-span-5 py-[50px] px-[30px] bg-[#FFFFFF] `
      }
    >
      <div className="flex justify-between items-center lg:justify-center mb-[50px]">
        <div>
          <Image
            src="../img/company-logo.svg"
            alt="Oak & D Logo"
            width={50}
            height={50}
          />
        </div>

        <div onClick={() => setShowNav(false)}>
          <Image
            src="../img/dashboard-close-icon.svg"
            alt="Close Icon"
            width={30}
            height={30}
            className="lg:hidden"
          />
        </div>
      </div>

      {/* OVERVIEW SECTION */}
      <h1 className="mb-[20px] text-[14px] text-[#1E1E1E] font-[600] uppercase">
        Overview
      </h1>

      <Link href="/dashboard">
        <div
          className="flex gap-[10px] mb-[50px] cursor-pointer"
          onClick={() => setActiveNav(0)}
        >
          <Image
            src="../img/dashboard-active-icon.svg"
            alt="Dashboard Icon"
            width={25}
            height={25}
            style={{ display: activeNav === 0 ? "block" : "none" }}
          />

          <Image
            src="../img/dashboard-icon.svg"
            alt="Dashboard Icon"
            width={25}
            height={25}
            style={{ display: activeNav !== 0 ? "block" : "none" }}
          />

          <p
            className="text-[18px] font-[600] "
            style={{ color: activeNav === 0 ? "#1E1E1E" : "#9C9C9C" }}
          >
            Dashboard
          </p>
        </div>
      </Link>

      <Link href="/dashboard/transaction">
        <div
          className="flex gap-[10px] mb-[50px] cursor-pointer"
          onClick={() => {
            setActiveNav(1);
          }}
        >
          <Image
            src="../img/dashboard-active-transaction-icon.svg"
            alt="Transaction Icon"
            width={25}
            height={25}
            style={{ display: activeNav === 1 ? "block" : "none" }}
          />

          <Image
            src="../img/dashboard-transaction-icon.svg"
            alt="Transaction Icon"
            width={25}
            height={25}
            style={{ display: activeNav !== 1 ? "block" : "none" }}
          />

          <p
            className="text-[18px] text-[#9C9C9C] font-[600] "
            style={{ color: activeNav === 1 ? "#1E1E1E" : "#9C9C9C" }}
          >
            Transactions
          </p>
        </div>
      </Link>

      <Link href="/dashboard/generatequote">
        <div
          className="flex gap-[10px] md:w-[50%] lg:w-[100%] mb-[50px] lg:border-b-[2px] lg:border-[#9C9C9C] pb-[40px] cursor-pointer"
          onClick={() => setActiveNav(2)}
        >
          <Image
            src="../img/dashboard-active-generate-quote-icon.svg"
            alt="Generate Quote Icon"
            width={25}
            height={25}
            style={{ display: activeNav === 2 ? "block" : "none" }}
          />

          <Image
            src="../img/dashboard-generate-quote-icon.svg"
            alt="Generate Quote Icon"
            width={25}
            height={25}
            style={{ display: activeNav !== 2 ? "block" : "none" }}
          />

          <p
            className="text-[18px] font-[600] "
            style={{ color: activeNav === 2 ? "#1E1E1E" : "#9C9C9C" }}
          >
            Generate Quote
          </p>
        </div>
      </Link>

      {/* HELP SECTION */}
      <h1 className="mb-[20px] text-[14px] text-[#1E1E1E] font-[600] uppercase">
        Help Center
      </h1>

      <Link href="/dashboard/support">
        <div
          className="flex gap-[10px] mb-[50px] cursor-pointer"
          onClick={() => setActiveNav(3)}
        >
          <Image
            src="../img/dashboard-active-support-icon.svg"
            alt="Dashboard Icon"
            width={25}
            height={25}
            style={{ display: activeNav === 3 ? "block" : "none" }}
          />

          <Image
            src="../img/dashboard-support-icon.svg"
            alt="Dashboard Icon"
            width={25}
            height={25}
            style={{ display: activeNav !== 3 ? "block" : "none" }}
          />

          <p
            className="text-[18px] text-[#9C9C9C] font-[600] "
            style={{ color: activeNav === 3 ? "#1E1E1E" : "#9C9C9C" }}
          >
            Support
          </p>
        </div>
      </Link>

      <Link href="/dashboard/faq">
        <div
          className="flex gap-[10px] mb-[50px] cursor-pointer"
          onClick={() => setActiveNav(4)}
        >
          <Image
            src="../img/dashboard-active-faq-icon.svg"
            alt="Transaction Icon"
            width={25}
            height={25}
            style={{ display: activeNav === 4 ? "block" : "none" }}
          />

          <Image
            src="../img/dashboard-faq-icon.svg"
            alt="Transaction Icon"
            width={25}
            height={25}
            style={{ display: activeNav !== 4 ? "block" : "none" }}
          />

          <p
            className="text-[18px] text-[#9C9C9C] font-[600] "
            style={{ color: activeNav === 4 ? "#1E1E1E" : "#9C9C9C" }}
          >
            FAQ&apos;s
          </p>
        </div>
      </Link>

      <Link href="/dashboard/settings">
        <div
          className="flex gap-[10px] md:w-[50%] lg:w-[100%] mb-[50px] lg:border-b-[2px] lg:border-[#9C9C9C] pb-[40px] cursor-pointer"
          onClick={() => setActiveNav(5)}
        >
          <Image
            src="../img/dashboard-active-setting-icon.svg"
            alt="Generate Quote Icon"
            width={25}
            height={25}
            style={{ display: activeNav === 5 ? "block" : "none" }}
          />

          <Image
            src="../img/dashboard-setting-icon.svg"
            alt="Generate Quote Icon"
            width={25}
            height={25}
            style={{ display: activeNav !== 5 ? "block" : "none" }}
          />

          <p
            className="text-[18px] text-[#9C9C9C] font-[600] "
            style={{ color: activeNav === 5 ? "#1E1E1E" : "#9C9C9C" }}
          >
            Settings
          </p>
        </div>
      </Link>

      <div className="flex gap-[10px] cursor-pointer">
        <Image
          src="../img/dashboard-logout-icon.svg"
          alt="Transaction Icon"
          width={25}
          height={25}
        />

        <p
          className="text-[18px] text-[#AC0108] font-[600]"
          onClick={() => {
            logoutUser();
          }}
        >
          Log Out
        </p>
      </div>
    </div>
  );
}
