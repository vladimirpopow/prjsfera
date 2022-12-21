import { useEffect } from "react";
import "./buttomStyle.css";


const DarkMode = () => {
    const handleToggled = () => {
        document.body.classList.toggle("dark");
        localStorage.setItem(
            "dark",
            document.body.className
        );
    };

useEffect(() => {
    if (localStorage.getItem("dark")) {
        document.body.classList.add("dark");
    }
}, []);

return (
    <label>
     <input className="input" type="checkbox"
     onClick={handleToggled} />
     <span className="switch">
     <span className="handle"/>
        </span>
     </label>
   );
};

export default DarkMode