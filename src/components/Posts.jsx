import { useState } from "react";
import { postData } from "../raw-data/post-data";

function Posts() {
  const [postList, setPostList] = useState(postData);

  const likedPost = (postIndex) => {
    const newPostList = [...postList];
    newPostList[postIndex].likes = newPostList[postIndex].likes + 1;
    setPostList(newPostList);
  }

  const dislikedPost =(postIndex) => {
    const newPostList = [...postList];
    if (newPostList[postIndex].likes > 0) {
      newPostList[postIndex].likes = newPostList[postIndex].likes - 1;
      setPostList(newPostList);
    }
  }

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
          {postList.map((post, index) => {
            return (
              <div key={index} class="post-item">
                <div class="post-header">
                  <h2>{post.title}</h2>
                  <div class="post-social-media-stats">
                    <span class="stats-topic">Likes: </span>
                    <span class="post-likes">{post.likes}</span>
                  </div>
                </div>
                <p class="post-content">{post.content}</p>
                <div class="post-actions">
                  <button
                    class="like-button"
                    onClick={() => {
                      likedPost(index);
                    }}
                  >
                    Like
                  </button>
                  <button
                    class="dislike-button"
                    onClick={() => {
                      dislikedPost(index);
                    }}
                  >
                    Dislike
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Posts;
