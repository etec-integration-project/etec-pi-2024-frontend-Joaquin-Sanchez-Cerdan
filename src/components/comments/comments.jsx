import "./comments.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
const Comments = () => {
    const { currentUser } = useContext(AuthContext);

    const comments = [
        {
            id: 1,
            desc: "EDEMSER",
            name: "Jhon Salchichon",
            userId: 1,
            profilePicture: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 2,
            desc: "Miami",
            name: "Minecraft",
            userId: 1,
            profilePicture: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        }]

    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="write a comment" />
                <button>Send</button>
            </div>
            {comments.map((comment) => (
                <div className="comment">
                    <img src={comment.profilePicture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>
    );
}

export default Comments