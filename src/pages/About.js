import React from "react";
import { AiOutlineMail, AiFillGithub} from "react-icons/ai";
import avatar from "../images/avatar.png";
import react from "../images/react.png";
import scrum from "../images/scrum.png";
import sass from "../images/sass.png"


const About =()=>{

    

    return (
        <div className="container-about">
            <div className="head">
                <div className="text">
                    <h2>Valentina Paredes Baquero</h2>
                    <p>Profesional de Ingeniería ambiental y estudiante de desarrollo web. Tengo 23 años, soy de Cali.  Me gusta jugar videojuegos, escuchar música, ver series, peliculas y hacer ejercicio.</p>
                </div>
                <img src={avatar} loading="lazy" alt="avatar"></img>
            </div>
            <div className="body">
            <h2>Lo que he aprendido en Make it Real</h2>
                <div className="item">
                    <div>
                    <img src={scrum} loading="lazy" alt="avatar"></img>
                    </div>
                    <div>
                    <h2>Metodologías ágiles como Scrum</h2>
                    <p>Aprendí sobre una de las metodologías más utilizadas en el ámbito de desarrollo de software que es Scrum y me ha ayudado a distribuir y planear mejor las entregas del proyecto con mi equipo de trabajo</p>
                    </div>
                </div>
                <div className="item">
                    <div>
                    <img src={sass} loading="lazy" alt="avatar"></img>
                    </div>
                    <div>
                    <h2>Responsive Design, Flexbox, Sass</h2>
                    <p>Aprendí sobre el responsive design para configurar el protyecto y que este se adapte a cualquier dispositivo. Ademas, aprendí a organizar mejor el documento mediante el flexbox, y a utilizar SASS en mi proyecto, especialmente con los Mixins.</p>
                    </div>
                </div>
                <div className="item">
                    <div>
                    <img src={react} loading="lazy" alt="avatar"></img>
                    </div>
                    <div>
                    <h2>React</h2>
                    <p>Aprendí sobre React, React Router, hooks como useState, useEffect. Hacer peticiones con Axios y también a configurar el entorno global con Redux y el middleware Redux-Thunk </p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p><AiOutlineMail></AiOutlineMail> Correo electrónico: valentina998a@hotmail.com</p>
                <a href="https://github.com/valentinapbm"><AiFillGithub></AiFillGithub> Git hub</a>
            </div>

        </div>
    )
}

export default About;