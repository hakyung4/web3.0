import React from 'react'
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.5] justify-center items-center">
                    <a href="/">
                        <img src={logo} alt="logo" className="w-32" />
                    </a>
                </div>
                <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                    <p className="text-white text-base text-center mx-2 cursor-pointer hover:text-[#D3D3D3] hover:border-b hover:border-white">
                        <a href="https://www.coinbase.com/explore" target="_blank" rel="noreferrer">
                            Market
                        </a>
                    </p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer hover:text-[#D3D3D3] hover:border-b hover:border-white">
                        <a href="/">
                            Exchange
                        </a>
                    </p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer hover:text-[#D3D3D3] hover:border-b hover:border-white">
                        <a href="https://ethereum.org/en/what-is-ethereum/" target="_blank" rel="noreferrer">
                            Tutorial
                        </a>
                    </p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer hover:text-[#D3D3D3] hover:border-b hover:border-white">
                        <a href="https://metamask.io" target="_blank" rel="noreferrer">
                            Wallets
                        </a>
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col mt-5">
                <p className="text-white text-3xl text-center">Contact us</p>
                <p className="text-white text-sm text-center mt-2">test@gmail.com</p>
            </div>
            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
            <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
                <p className="text-white text-sm text-center">@hakyung4 2022</p>
                <p className="text-white text-sm text-center">All Rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
