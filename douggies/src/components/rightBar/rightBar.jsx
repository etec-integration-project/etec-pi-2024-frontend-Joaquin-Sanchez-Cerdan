import rightBar from './rightBar.scss';
import martinaUser from '../../multimedia/martinaUser.jpg';
import darioUser from '../../multimedia/darioUser.jpg';

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={martinaUser} alt="" />
              <span>Martina Rodriguez</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={darioUser} alt="" />
              <span>Darío Fernández</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={darioUser} alt="" />
              <p>
                <span>Darío Fernández</span> changed their cover picture  
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={darioUser} alt="" />
              <p>
                <span>Darío Fernández</span> changed their cover picture  
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={darioUser} alt="" />
              <p>
                <span>Darío Fernández</span> changed their cover picture  
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={darioUser} alt="" />
              <p>
                <span>Darío Fernández</span> changed their cover picture  
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={darioUser} alt="" />
              <div className="online" />
              <span>Darío Fernández</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={darioUser} alt="" />
              <div className="online" />
              <span>Darío Fernández</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={darioUser} alt="" />
              <div className="online" />
              <span>Darío Fernández</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={darioUser} alt="" />
              <div className="online" />
              <span>Darío Fernández</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={darioUser} alt="" />
              <div className="online" />
              <span>Darío Fernández</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={darioUser} alt="" />
              <div className="online" />
              <span>Darío Fernández</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={darioUser} alt="" />
              <div className="online" />
              <span>Darío Fernández</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={darioUser} alt="" />
              <div className="online" />
              <span>Darío Fernández</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;