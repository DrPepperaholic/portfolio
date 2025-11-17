import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { ClassNameCN } from "@/lib/utils"
export const ThemeToggle = () => {
    const [IsDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            return storedTheme === "dark";
        }
        return true;
    });

    useEffect(() => {
        if (IsDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [IsDarkMode]);

    const toggleTheme = () => {
        if (IsDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button onClick={toggleTheme} className={ClassNameCN("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 cursor-pointer",
            "focus:outline-hidden"
        )}
        >
            {IsDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-300" />
            )}
        </button>
    );
};