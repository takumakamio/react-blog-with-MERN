import "./singlePost.css";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <EditOutlinedIcon className="singlePostIcon" />
            <DeleteOutlineIcon className="singlePostIcon" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Takuma</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minus
          necessitatibus inventore natus, tempore laboriosam accusamus quasi
          repudiandae, id animi labore totam consequatur vero, odit molestiae.
          Est ex exercitationem ipsam?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quia minus necessitatibus inventore natus, tempore
          laboriosam accusamus quasi repudiandae, id animi labore totam
          consequatur vero, odit molestiae. Est ex exercitationem ipsam?Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quia minus
          necessitatibus inventore natus, tempore laboriosam accusamus quasi
          repudiandae, id animi labore totam consequatur vero, odit molestiae.
          Est ex exercitationem ipsam?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quia minus necessitatibus inventore natus, tempore
          laboriosam accusamus quasi repudiandae, id animi labore totam
          consequatur vero, odit molestiae. Est ex exercitationem ipsam?Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quia minus
          necessitatibus inventore natus, tempore laboriosam accusamus quasi
          repudiandae, id animi labore totam consequatur vero, odit molestiae.
          Est ex exercitationem ipsam?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quia minus necessitatibus inventore natus, tempore
          laboriosam accusamus quasi repudiandae, id animi labore totam
          consequatur vero, odit molestiae. Est ex exercitationem ipsam?Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quia minus
          necessitatibus inventore natus, tempore laboriosam accusamus quasi
          repudiandae, id animi labore totam consequatur vero, odit molestiae.
          Est ex exercitationem ipsam?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quia minus necessitatibus inventore natus, tempore
          laboriosam accusamus quasi repudiandae, id animi labore totam
          consequatur vero, odit molestiae. Est ex exercitationem ipsam?Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quia minus
          necessitatibus inventore natus, tempore laboriosam accusamus quasi
          repudiandae, id animi labore totam consequatur vero, odit molestiae.
          Est ex exercitationem ipsam?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quia minus necessitatibus inventore natus, tempore
          laboriosam accusamus quasi repudiandae, id animi labore totam
          consequatur vero, odit molestiae. Est ex exercitationem ipsam?Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quia minus
          necessitatibus inventore natus, tempore laboriosam accusamus quasi
          repudiandae, id animi labore totam consequatur vero, odit molestiae.
          Est ex exercitationem ipsam?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quia minus necessitatibus inventore natus, tempore
          laboriosam accusamus quasi repudiandae, id animi labore totam
          consequatur vero, odit molestiae. Est ex exercitationem ipsam?
        </p>
      </div>
    </div>
  );
}
