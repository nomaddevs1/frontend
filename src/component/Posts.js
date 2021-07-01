import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./../action/index";

const Posts = () => {
  const user = useSelector((state) => state.user);
  const posts = useSelector((state) => Object.values(state.post));
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const LikePost = ({ post }) => {
    return post.likes.find((like) => like === (user.googleId || user?._id)) ? (
      <i
        className={`heart inline like icon`}
        onClick={() => console.log(post._id)}
      ></i>
    ) : (
      <i
        className={`heart outline like icon`}
        onClick={() => console.log(post._id)}
      ></i>
    );
  };
  return (
    <>
      {!posts.length ? (
        "loading..."
      ) : (
        <div className="ui grid">
          {posts.map((post) => (
            <div className="three wide column" key={post._id}>
              <div className="ui card">
                <div className="content">
                  <div className="right floated meta">
                    {post.createdAt.split("T")[1]}
                  </div>
                  {post.title}
                </div>
                <div className="image">
                  <img src="/aranprime-ogLJ4BusYzE-unsplash.jpg" alt="Hand" />
                </div>
                <div className="content">
                  <button>
                    <LikePost post={post} />
                  </button>

                  <i className="comment icon"></i>
                  {post.comment?.length || 0}
                </div>
                <div className="extra content"></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
