import React from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = React.useState('light');
  
    React.useEffect(() => {
      // Set the 'data-theme' attribute to switch themes
      document.documentElement.setAttribute('data-theme', theme);
      // Optionally toggle 'dark' class if using class-based dark mode
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const handleToggle = (event) => {
      setTheme(event.target.checked ? 'dark' : 'light');
    };
  
    return (
      <label className="swap swap-rotate">
        <input type="checkbox" onChange={handleToggle} checked={theme === 'dark'} />
        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.637 21.292l1.414-1.415L4.16 17.98l-1.415 1.414zM2 13h3v-2H2zm1.343-6.263l1.415-1.415L5.637 6.71 4.223 8.124zM12 5V2h-2v3zm5.657-.263l1.415 1.414-1.415 1.415-1.414-1.414zM22 11v2h-3v-2zm-2.98 5.98l1.414 1.415-1.415 1.414-1.414-1.414zM12 22h2v-3h-2zm-6.98-3.02l1.414-1.415L6.71 18.708l1.415 1.414zm8.48-.686a7.943 7.943 0 0 0 4.5-4.5h-2.955a5.957 5.957 0 0 1-3.327 3.327v2.955a7.94 7.94 0 0 0 1.782.218zm-1.782-.218V18.74a5.957 5.957 0 0 1-3.327-3.327H5.5a7.943 7.943 0 0 0 4.5 4.5zm-4.5-6.723h2.955a5.957 5.957 0 0 1 3.327-3.327V5.5a7.943 7.943 0 0 0-4.5 4.5H5.5a7.943 7.943 0 0 0 4.5 4.5zm1.5-6.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5zm0 2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z"/></svg>
        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9zm-9 7a7 7 0 1 0-7-7 7 7 0 0 0 7 7zm0-12a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm0 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/></svg>
      </label>
    );
  };
  
export default ThemeToggle;
