import React from "react";
import "../../assets/css/header.css";

export default function Header() {
    const closeHeaderNav = async () => {
        const headerNav = document.querySelector(".header-nav");
        const headerActions = document.querySelector(".header-actions");
        const headerResponsive = document.querySelector(".header-responsive");
        const headerToggleX = document.querySelector(
            ".header-toggle .fa-xmark"
        );
        const headerToggleBars = document.querySelector(
            ".header-toggle .fa-bars"
        );

        headerToggleX.classList.toggle("hidden");
        headerToggleBars.classList.toggle("hidden");

        headerResponsive.classList.toggle("hidden-header-line");

        if (headerResponsive.style.height === "0px") {
            headerResponsive.style.height = "184px";
        } else {
            headerResponsive.style.height = "0px";
        }
    };
    return (
        <header className="header shadow-md bg-white fixed left-0 right-0 px-[100px] flex flex-col  lg:flex-row justify-between py-4 lg:items-center">
            <div className="header-logo text-lg font-bold lg:mb-0 lg:pb-0 flex justify-between">
                <div>Material Tailwind</div>
                <div
                    className="header-toggle lg:hidden"
                    onClick={closeHeaderNav}
                >
                    <i class="fa-solid fa-xmark hidden"></i>
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
            <div className="header-nav hidden lg:flex flex-col lg:flex-row gap-x-6 gap-y-4">
                <div>
                    <i class="fa-solid fa-newspaper"></i> Pages
                </div>
                <div>
                    <i class="fa-solid fa-user"></i> Account
                </div>
                <div>
                    <i class="fa-regular fa-file-lines"></i> Docs
                </div>
            </div>
            <div className="header-actions hidden lg:block font-[600] uppercase text-sm mt-5 lg:mt-0">
                <a
                    className="inline-block mr-3 transition-all px-5 py-3 rounded-md hover:bg-slate-300"
                    href="#"
                >
                    Sign in
                </a>
                <a
                    className="inline-block px-5 py-3 rounded-md bg-black text-white"
                    href="#"
                >
                    Blocks
                </a>
            </div>
            <div
                style={{ height: "0px" }}
                className="header-responsive h-0 hidden-header-line overflow-hidden transition-all pt-4 mt-4 flex flex-col lg:hidden"
            >
                <div className="flex flex-col lg:flex-row gap-x-6 gap-y-4">
                    <div>
                        <i class="fa-solid fa-newspaper"></i> Pages
                    </div>
                    <div>
                        <i class="fa-solid fa-user"></i> Account
                    </div>
                    <div>
                        <i class="fa-regular fa-file-lines"></i> Docs
                    </div>
                </div>
                <div className="font-[600] uppercase text-sm mt-5 lg:mt-0">
                    <a
                        className="inline-block px-5 py-3 rounded-md hover:bg-slate-300"
                        href="#"
                    >
                        Sign in
                    </a>
                    <a
                        className="inline-block px-5 py-3 rounded-md bg-black text-white"
                        href="#"
                    >
                        Blocks
                    </a>
                </div>
            </div>
        </header>
    );
}
