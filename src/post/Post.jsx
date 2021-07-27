import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          mollitia! Velit, minima fugiat, non amet quo atque, minus maxime nam
          necessitatibus quam nihil quae aspernatur delectus vero ea distinctio
          autem?
        </p>
      </div>
    </div>
  );
}
