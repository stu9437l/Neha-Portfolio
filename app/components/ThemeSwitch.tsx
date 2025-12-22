// import { Moon, Sun } from "lucide-react";
// import { useState } from "react";

// const ThemeSwitch = () => {
//   const [theme, setTheme] = useState("dark");

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   return (
//     <div className="flex items-center gap-4">
//       <button
//         onClick={toggleTheme}
//         className={`p-2 rounded-lg transition-all ${
//           theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"
//         }`}
//       >
//         {theme === "light" ? (
//           <Moon className="w-5 h-5" />
//         ) : (
//           <Sun className="w-5 h-5 text-yellow-400" />
//         )}
//       </button>
//     </div>
//   );
// };

// export default ThemeSwitch;
