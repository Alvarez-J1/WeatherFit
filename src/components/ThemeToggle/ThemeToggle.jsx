import "./ThemeToggle.css";

function ThemeToggle({ theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
    >
      <span className="theme-toggle__icon theme-toggle__icon_sun"></span>
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb"></span>
      </span>
      <span className="theme-toggle__icon theme-toggle__icon_moon"></span>
    </button>
  );
}

export default ThemeToggle;
