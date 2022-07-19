import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../images/logo.png';
import { useState } from 'react';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <a href="/">
                    <img src={logo} alt="logo" className="w-32 cursor-pointer" />
                </a>
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between flex-initial items-center">
                <li className="mx-4 cursor-pointe hover:text-[#D3D3D3] my-2 text-lg no-underline hover:border-b hover:border-white">
                    <a href="https://www.coinbase.com/explore" target="_blank" rel="noreferrer">
                        Market
                    </a>
                </li>
                <li className="mx-4 cursor-pointe hover:text-[#D3D3D3] my-2 text-lg no-underline hover:border-b hover:border-white">
                    <a href="/">
                        Exchange
                    </a>
                </li>
                <li className="mx-4 cursor-pointe hover:text-[#D3D3D3] my-2 text-lg no-underline hover:border-b hover:border-white">
                    <a href="https://ethereum.org/en/what-is-ethereum/" target="_blank" rel="noreferrer">
                        Tutorial
                    </a>
                </li>
                <li className="mx-4 cursor-pointe hover:text-[#D3D3D3] my-2 text-lg no-underline hover:border-b hover:border-white">
                    <a href="https://metamask.io" target="_blank" rel="noreferrer">
                        Wallets
                    </a>
                </li>
            </ul>
            <div className="flex relative">
                {toggleMenu ? 
                <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                    flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
                    ">
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        <li className="mx-4 cursor-pointe hover:text-[#D3D3D3] my-2 text-lg no-underline hover:border-b hover:border-white">
                            <a href="https://www.coinbase.com/explore" target="_blank" rel="noreferrer">
                                Market
                            </a>
                        </li>
                        <li className="mx-4 cursor-pointe hover:text-[#D3D3D3] my-2 text-lg no-underline hover:border-b hover:border-white">
                            <a href="/">
                                Exchange
                            </a>
                        </li>
                        <li className="mx-4 cursor-pointe hover:text-[#D3D3D3] my-2 text-lg no-underline hover:border-b hover:border-white">
                            <a href="https://ethereum.org/en/what-is-ethereum/" target="_blank" rel="noreferrer">
                                Tutorial
                            </a>
                        </li>
                        <li className="mx-4 cursor-pointe hover:text-[#D3D3D3] my-2 text-lg no-underline hover:border-b hover:border-white">
                            <a href="https://metamask.io" target="_blank" rel="noreferrer">
                                Wallets
                            </a>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar
