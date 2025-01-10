"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiHome, FiShoppingBag, FiBook, FiPhone } from "react-icons/fi";
import MainLogo from '../../images/main-logo.jpg'
export default function Sidebar(): JSX.Element {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleMenu = (menu: string): void => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <div className="lg:hidden md:hidden ">
            {/* Menu Icon */}
            <button
                className="fixed top-6 left-4 z-50  text-black p-2 "
                onClick={() => setIsSidebarOpen(true)}
            >
                <FiMenu size={24} />
            </button>

            {/* Sidebar Backdrop */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar Panel */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-lg transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <FiX size={24} />
                </button>

                {/* Header with Location Selection */}
                <div className="p-4 border-b">
                    <Image
                        src={MainLogo}
                        width={127}
                        height={33}
                        alt="Main Logo" />



                </div>

                {/* Navigation Menu */}
                <nav className="mt-4">
                    <ul>
                        <SidebarItem
                            icon={<FiHome />}
                            label="Home"
                            isCollapsible={false}
                        />
                        <SidebarItem
                            icon={<FiShoppingBag />}
                            label="Shop"
                            isCollapsible={true}
                            openMenu={openMenu}
                            toggleMenu={toggleMenu}
                            subItems={["Meats & Seafood", "Bakery", "Beverages"]}
                        />
                        <SidebarItem
                            icon={<FiBook />}
                            label="Blog"
                            isCollapsible={false}
                        />
                        <SidebarItem
                            icon={<FiPhone />}
                            label="Contact"
                            isCollapsible={false}
                        />
                    </ul>
                </nav>
            </div>
        </div>
    );
}

interface SidebarItemProps {
    icon: JSX.Element;
    label: string;
    isCollapsible: boolean;
    openMenu?: string | null;
    toggleMenu?: (menu: string) => void;
    subItems?: string[];
}

const SidebarItem = ({
    icon,
    label,
    isCollapsible,
    openMenu,
    toggleMenu,
    subItems,
}: SidebarItemProps): JSX.Element => {
    const isOpen = openMenu === label;

    return (
        <li>
            <div
                className={`flex items-center justify-between p-4 hover:bg-gray-200 cursor-pointer ${isCollapsible ? "border-b" : ""
                    }`}
                onClick={() => isCollapsible && toggleMenu && toggleMenu(label)}
            >
                <div className="flex items-center space-x-3">
                    {icon}
                    <span>{label}</span>
                </div>
                {isCollapsible && <FiChevronDown className={`${isOpen ? "rotate-180" : ""} transition-transform`} />}
            </div>
            {isCollapsible && isOpen && subItems && (
                <ul className="pl-8 bg-gray-50">
                    {subItems.map((item) => (
                        <li key={item} className="p-2 hover:bg-gray-200 cursor-pointer">
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};
