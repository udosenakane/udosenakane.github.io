import { useState } from 'react'

const Footer = () => {
    const [currentDate] = useState(new Date());
    return (
        <>
            <footer className='bg-black py-3 fixed text-gray-400 
                uppercase font-bold bottom-0 text-center w-full'>
                <p className='uppercase'>&copy;{ currentDate.getFullYear() } | Akan Udosen</p>
            </footer>
        </>
    )
}

export default Footer;