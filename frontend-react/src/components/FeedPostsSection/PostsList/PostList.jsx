import React, { useState, useEffect } from "react";
import PostElement from "../PostElement/PostElement";
import PostService from "../../../services/post.service.js";

function PostList() {
	const [posts, setPosts] = useState([]);

      useEffect(() => {
       
        const fetchPosts = async () => {
          try {
            const user = JSON.parse(localStorage.getItem('user'));
            const userFriendsPosts = await PostService.getFriendsAndUserPostsByUserId(
              user.user.user_id
            );
            setPosts(userFriendsPosts);
          } catch (error) {
            console.error(error);
            alert('Ha ocurrido un error al obtener las publicaciones del usuario.');
          }
        };
    
        fetchPosts();
      }, []);

	return (
		<div>
			<ol id="lista-publicaciones">
				{posts.map((post) => (
					<PostElement key={post.post_id} data={post} />
				))}
			</ol>
		</div>
	);
}

export default PostList;
