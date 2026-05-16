import "./SideBar.css";

function SideBar({ onEditProfileClick, onLogout }) {
  return (
    <div className="sidebar">
      <button
        type="button"
        className="sidebar__edit-btn"
        onClick={onEditProfileClick}
      >
        Change profile data
      </button>
      <button type="button" onClick={onLogout} className="sidebar__logout-btn">
        Log out
      </button>
    </div>
  );
}

export default SideBar;
