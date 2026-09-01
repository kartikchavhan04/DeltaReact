import {useState} from 'react';

export default function LikeButton() {
  let [liked, setLiked] = useState(false);
  let [count, setCount] = useState(0);
  
  let toggleLike = () => {
    setLiked(!liked);
    setCount(count + 1);
  };

  let likeStyle = {
    color:'red' 
  };

  return (
    <div>
        <p>Clicks: {count}</p>
      <p onClick={toggleLike}>
        {liked ? <i className="fa-solid fa-heart" style={likeStyle}></i> : <i className="fa-regular fa-heart"></i>}
      </p>
    </div>
  );
}