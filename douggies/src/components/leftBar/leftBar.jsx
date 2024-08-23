import leftBar from './leftBar.scss';
import userjumozz from '../../multimedia/userjumozz.jpg'
import Friends from "../../multimedia/1.png";
import Groups from "../../multimedia/2.png";
import Market from "../../multimedia/3.png";
import Watch from "../../multimedia/4.png";
import Memories from "../../multimedia/5.png";
import Events from "../../multimedia/6.png";
import Gaming from "../../multimedia/7.png";
import Gallery from "../../multimedia/8.png";
import Videos from "../../multimedia/9.png";
import Messages from "../../multimedia/10.png";
import Tutorials from "../../multimedia/11.png";
import Courses from "../../multimedia/12.png";
import Fund from "../../multimedia/13.png";
const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <div className="user">
          <img src={userjumozz} />
          <span>Ju Mozz</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;