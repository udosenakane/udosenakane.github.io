import { useDetectClickOutside } from 'react-detect-click-outside'
import { useState } from 'react'


const Dropdown = ({ children }: any) => {
    const [open, setOpen] = useState(false)

    const ref = useDetectClickOutside({ onTriggered: closeDropdown });

    function closeDropdown(event:any) {
        document.addEventListener('click', function(e) {
            var target = e.target 
            if(event?.target != target)
                setOpen(false);

        }, false);
    }
    return (
        <div>
            <button id="port-toggler"
                className="port-togglers uppercase w-full text-center bg-gray-300 py-3"
                onClick={() => {
                    setOpen(!open);
                }}>Tools used</button>

            {open && <div ref={ref}>{children}</div>}
        </div>
    )
}

export default Dropdown