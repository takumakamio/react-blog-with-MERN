import "./topbar.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
export default function Topbar() {
  const currentUser = true;
  return (
    <div className="top">
      <div className="topLeft">
        <FacebookIcon className="topIcon" />
        <TwitterIcon className="topIcon" />
        <PinterestIcon className="topIcon" />
        <InstagramIcon className="topIcon" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem"> {!currentUser && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {currentUser ? (
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        ) : (
          <>
            <ul className="topList">
              <li className="topListItem">
                <Link to="/login" className="link">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link to="/register" className="link">
                  REGISTER
                </Link>
              </li>
            </ul>
          </>
        )}
        <SearchIcon className="topSearchIcon" />
      </div>
    </div>
  );
}
