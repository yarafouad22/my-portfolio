import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const dark = savedTheme === "dark";

    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;

    document.documentElement.classList.toggle("dark", newIsDark);

    localStorage.setItem("theme", newIsDark ? "dark" : "light");

    setIsDark(newIsDark);
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light Mode" : "Dark Mode"}
      className="theme-toggle"
    >
      <i className={isDark ? "bi bi-sun-fill" : "bi bi-moon-fill"} />
    </button>
  );
}