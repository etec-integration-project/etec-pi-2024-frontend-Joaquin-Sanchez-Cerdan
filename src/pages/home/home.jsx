import "./home.scss";
import Stories from "../../components/stories/stories";
import Posts from "../../components/posts/posts";

const Home = () => {
    return (
        <div className="home">
            <Stories/>
            <Posts/>
        </div>
    );
};

export default Home;