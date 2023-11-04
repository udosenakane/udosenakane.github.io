import { NavLink, Link } from "react-router-dom";
import akan from '../../public/akan.jpg'
import { useState } from 'react'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className="w-full bg-black py-3 text-white fixed top-0 z-10">
                <nav className="px-5 flex sm:flex-row flex-col justify-between w-full">
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center">
                            <img className="rounded mr-2" src={akan} style={{ height: '20px', width: '20px' }} alt="akan picture" />
                            <span className="font-bold">Akan Udosen</span>
                        </div>


                        <a href="#" onClick={() => {
                            setOpen(!open);
                        }} className="sm:hidden">
                            <span className="fas fa-bars"></span>
                        </a>
                    </div>

                    <ul className={`${open ? 'block' : 'hidden'}  sm:block sm:flex flex-col 
                    sm:flex-row text-sm uppercase font-bold text-gray-300`}>
                        <li className="mr-5 w-full sm:bg-inherit rounded-full sm:mt-0 mt-5">
                            <NavLink to={'/'} className={`${({ isActive }: any) => isActive ? "active" : ""} 
                                hover:text-gray-400 
                                hover:bg-gray-500 block w-full rounded-full 
                                sm:bg-inherit bg-gray-700 hover:sm:bg-inherit 
                                hover:sm:border-b-2 active:bg-gray-800 
                                active:text-gray-600 sm:p-0 p-2`}>
                                Home
                            </NavLink>
                        </li>

                        <li className="mr-5 w-full sm:bg-inherit rounded-full sm:mt-0 mt-5">
                            <NavLink to='/about' className={`${({ isActive }: any) => isActive ? "active" : ""} 
                                hover:text-gray-400 
                                hover:bg-gray-500 block w-full rounded-full 
                                sm:bg-inherit bg-gray-700 hover:sm:bg-inherit 
                                hover:sm:border-b-2 active:bg-gray-800 
                                active:text-gray-600 sm:p-0 p-2`}>
                                About
                            </NavLink>
                        </li>

                        <li className="mr-5 w-full sm:bg-inherit rounded-full sm:mt-0 mt-5">
                            <NavLink to='/work' className={`${({ isActive }: any) => isActive ? "active" : ""} 
                                hover:text-gray-400 
                                hover:bg-gray-500 block w-full rounded-full 
                                sm:bg-inherit bg-gray-700 hover:sm:bg-inherit 
                                hover:sm:border-b-2 active:bg-gray-800 
                                active:text-gray-600 sm:p-0 p-2`}>
                                Work
                            </NavLink>
                        </li>

                        {/* <li className="mr-5 w-full sm:bg-inherit rounded-full sm:mt-0 mt-5">
                            <NavLink to='/service'
                                className="hover:text-gray-400 hover:bg-gray-500 
                                block w-full rounded-full 
                                sm:bg-inherit bg-gray-700 hover:sm:bg-inherit hover:sm:border-b-2
                                active:bg-gray-800 active:text-gray-600 sm:p-0 p-2">
                                Service
                            </NavLink>
                        </li> */}

                        <li className="mr-5 w-full sm:bg-inherit rounded-full sm:mt-0 mt-5">
                            <NavLink to='/contact' className={`${({ isActive }: any) => isActive ? "active" : ""} 
                                hover:text-gray-400 
                                hover:bg-gray-500 block w-full rounded-full 
                                sm:bg-inherit bg-gray-700 hover:sm:bg-inherit 
                                hover:sm:border-b-2 active:bg-gray-800 
                                active:text-gray-600 sm:p-0 p-2`}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Header;