import React, {useState} from 'react';
import {FiMenu} from "react-icons/fi";
import {Link} from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {IoCloseOutline} from "react-icons/io5";
import clsx from "clsx";

function Navbar() {
    const [isSideMenuOpen, setMenu] = useState(false);
    const navLinks = [
        {
            label: "Collection",
            link: "#"
        },
        {
            label: "Men",
            link: "#"
        },
        {
            label: "About",
            link: "#"
        },
        {
            label: "Contract",
            link: "#"
        }
    ];

    return (
        <main>
            <nav className="flex justify-between px-8 items-center py-6 lg:px-24">
                <div className="flex items-center gap-8">
                    <section className="flex items-center gap-4">
                        {/* menu */}
                        <FiMenu
                            onClick={() => setMenu(true)}
                            className="text-3xl cursor-pointer lg:hidden"/>
                        {/* logo */}
                        <Link to={"/"} className="text-4xl font-mono">
                            Logo
                        </Link>
                    </section>
                    {
                        navLinks.map((d, i) => (
                            <Link key={i} className="hidden lg:block text-2xl text-gray-400 hover:text-black"
                                  to={d.link}>
                                {d.label}
                            </Link>
                        ))
                    }
                </div>

                {/* sidebar mobile menu */}
                <div className={clsx(
                    "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
                    isSideMenuOpen && 'translate-x-0'
                )}>
                    <section
                        className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
                        <IoCloseOutline
                            onClick={() => setMenu(false)}
                            className="mt-0 mb-8 text-3xl cursor-pointer"/>
                        {
                            navLinks.map((d, i) => (
                                <Link key={i} className="font-bold" to={d.link}>
                                    {d.label}
                                </Link>
                            ))
                        }
                    </section>
                </div>

                {/* last section */}
                <section className="flex items-center gap-4">
                    <AiOutlineShoppingCart className="text-3xl"/>
                    <img src="https://i.pravatar.cc/150?img=52"
                         width={40}
                         height={40}
                         className="h-8 w-8 rounded-full"
                         alt="avatar-img"/>
                </section>
            </nav>
            <hr className="lg:mx-24"/>
        </main>
    );
}

export default Navbar;