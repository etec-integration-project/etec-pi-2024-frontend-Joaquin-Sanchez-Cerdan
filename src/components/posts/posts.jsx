import { useEffect, useState } from "react";
import axios from "axios"; 
import Post from "../post/post";
import "./posts.scss";

const Posts = () => {
  const [data, setData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/perros/post'); 
        setData(response.data); 
      } catch (error) {
        console.error("Error al obtener los datos: ", error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <div className="posts">
      {data.map(post => (
        <Post post={post} key={post.id} /> 
      ))}
    </div>
  );
};

export default Posts;
