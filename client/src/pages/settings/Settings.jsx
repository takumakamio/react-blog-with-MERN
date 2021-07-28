import Sidebar from "../../components/sidebar/Sidebar";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import "./setting.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <div className="settingsTitleUpdate">Update Your Acoount</div>
          <div className="settingsTitleDelete">Delete Your Account</div>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <PersonRoundedIcon className="settingsPPIcon" />
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Taro" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
