import "./sidebar.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, ad?
          Hic dignissimos quaerat a voluptatem consequuntur cupiditate dolorum
        </p>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
          </ul>
        </div>
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarItem">
          <div className="sidebarSocial">
            <FacebookIcon className="sidebarIcon" />
            <TwitterIcon className="sidebarIcon" />
            <PinterestIcon className="sidebarIcon" />
            <InstagramIcon className="sidebarIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
