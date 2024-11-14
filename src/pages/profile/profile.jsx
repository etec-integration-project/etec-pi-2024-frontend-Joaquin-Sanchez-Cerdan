import React, { useState } from "react";
import axios from "axios";
import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/posts";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleConfirm = async () => {
    console.log("Datos para enviar:", formData);

    try {
        const response = await axios.post('/api/perros/agregar', {
            nombre: formData.field1,
            edad: formData.field2,
            raza: formData.field3,
            genero: formData.field4,
            descripcion: formData.field5,
            precio: formData.field6,
        }, {
            headers: {
                'Content-Type': 'application/json', // Asegúrate de que el tipo de contenido esté configurado correctamente
            }
        });

        console.log("Form data submitted:", response.data);
        setShowModal(false);
    } catch (error) {
        console.error("Error submitting form data:", error);
    }
};


  const handleCancel = () => {
    setFormData({
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
      field6: ""
    });
    setShowModal(false);
  };

  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Ju Moz</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Argentina</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>Douggies</span>
              </div>
            </div>
            <button onClick={() => setShowModal(true)}>New Post</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
      {showModal && (
        <div className="modal">
          <div className="modalContent">
            <h2>Nuevo Post</h2>
            <form>
              <input
                type="text"
                name="field1"
                placeholder="Nombre del Animal"
                value={formData.field1}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="field2"
                placeholder="Edad del Animal"
                value={formData.field2}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="field3"
                placeholder="Raza del Animal"
                value={formData.field3}
                onChange={handleInputChange}
              />
              <select
                name="field4"
                value={formData.field4}
                onChange={handleInputChange}
              >
                <option value="" disabled>Seleccionar género</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
              <input
                type="text"
                name="field5"
                placeholder="Descripción del Animal"
                value={formData.field5}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="field6"
                placeholder="Precio del Animal"
                value={formData.field6}
                onChange={handleInputChange}
              />
              <div className="modalButtons">
                <button type="button" onClick={handleCancel}>Cancelar</button>
                <button type="button" onClick={handleConfirm}>Postear</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
