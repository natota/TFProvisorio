"use client";
import { Avisos } from "@/componentes/avisos";
import { ListaHistorias } from "@/componentes/listaHistorias";
import "@/estilos/globals.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [historias, setHistorias] = useState([]);

  useEffect(() => {
    fetch("/data/historias.json")
      .then((response) => response.json())
      .then((data) =>
        setHistorias(data))
      .catch(((error) => console.error('Error al cargar las historias:', error)));
  }, []);

  return (
    <div className="home ">
      <div className="portada">
        <div className="izquierda">
          <div className="fotoPortada">
            <img src="/imagenes/fotoPortada.jpeg" alt="varios animales agrupados" ></img>
          </div>
          <div className="opcion">
            <Avisos titulo="NO TE OLVIDES..."
              texto="llevar a tus mascotas al veterinario al menos una vez al año, aunque parezca estar sano. Muchas enfermedades no tienen síntomas hasta que están avanzadas." />
          </div>
        </div>
        <div className="texto">
          <h2 >¡BIENVENIDOS! 🐾 </h2>
          <p>En <strong>Hogar para peluditos</strong>, nos dedicamos a rescatar y proteger a mascotas que
            se encuentran en situación de abandono o maltrato. Creemos que cada patita merece una segunda oportunidad.</p>
          <br />

          <p>Nuestro objetivo es encontrarles un hogar definitivo, donde puedan recibir el amor y el cuidado
            que merecen y vivan felices y saludables. Creemos que cada mascota  es un ser vivo que merece ser
            tratado con respeto, compasión y amor.</p>
          <br />
          <p>Nuestro compromiso es con ellos, y también con vos: juntos podemos construir una comunidad más compasiva y responsable.</p>
          <br />
          <br />
          <Avisos titulo="¿Qué puedes encontrar en nuestra págna?"
            texto="">
            <br />
            <ul>
              <li className="lis">🐾 Información sobre nuestras mascotas disponibles para adopción</li>
              <li className="lis">🐾 Historias de éxito de mascotas que han encontrado su hogar</li>
              <li className="lis">🐾 Noticias y actualizaciones sobre nuestros eventos y actividades</li>
              <li className="lis">🐾 Formas de involucrarte y apoyar nuestra causa</li>
            </ul>
          </Avisos>
        </div>
      </div>
      <br />
      <div>
        <ListaHistorias cuenta={historias} />
      </div>
      <div className="despedida">
        <h2>Gracias por visitar nuestra página!!!!</h2>
        <p>Estamos emocionados de que te hayas unido a nuestra comunidad y esperamos que puedas
          encontrar en nosotros un aliado en la lucha por los derechos y el bienestar de las mascotas.</p>
        <br />
      </div>
      <div className="galeria">
        <img className="ImgS" src="/imagenes/image 46.png" alt="gato gris" ></img>
        <img className="ImgS" src="/imagenes/image 31.jpeg" alt="cachorro negro" ></img>
        <img className="ImgS nonfoto" src="/imagenes/image 47.png" alt="gatito en el campo" ></img>
        <img className="ImgS nonfoto" src="/imagenes/image 32.jpeg" alt="perro en la playa" ></img>
        <img className="ImgS" src="/imagenes/adopcion6.jpeg" alt="conejo en una caja" ></img>
        <img className="ImgS" src="/imagenes/chanchito.jpg" alt="chanchito" ></img>
        <img className="nonfoto ImgS" src="/imagenes/image 33.jpeg" alt="perritos en la arena" ></img>
        <img className="nonfoto ImgS" src="/imagenes/image 49.png" alt="gato siamés" ></img>
        <img className="nonfoto ImgS" src="/imagenes/image 34.jpeg" alt="cachorro sonriente" ></img>
        <img className="nonfoto ImgS" src="/imagenes/image 50.png" alt="gatito manchado" ></img>
      </div>
    </div>
  );
}
