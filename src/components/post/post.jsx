import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';
import Comments from "../comments/comments";
import { useState } from "react";

function Post({ post }) {

    const [commentOpen, setCommentsOpen] = useState(false);

    // TEMP
    const liked = false;

    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link
                                to={`/profile/${post.userId}`}
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <span className="name">{post.name}</span>
                            </Link>
                            <span className="date">23 minutes ago</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <ul>
                        <li><strong>Edad:</strong> {post.edad || "No especificado"}</li>
                        <li><strong>Raza:</strong> {post.raza || "No especificado"}</li>
                        <li><strong>Género:</strong> {post.genero || "No especificado"}</li>
                        <li><strong>Descripción:</strong> {post.descripcion || "No especificado"}</li>
                        <li><strong>Precio:</strong> ${post.precio || "No especificado"}</li>
                    </ul>
                    {post.img && <img src={post.img} alt="" />}
                </div>
                <div className="info">
                    <div className="item">
                        {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                        12 Likes
                    </div>
                    <div className="item" onClick={() => setCommentsOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon />
                        12 Comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon />
                        Share
                    </div>
                </div>
                {commentOpen && <Comments />}
            </div>
        </div>
    )
}

export default Post;
