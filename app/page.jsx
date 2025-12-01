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
        <div className="fotoPortada">
          <img src="/fotoPortada.jpeg" alt="varios animales agrupados" ></img>
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
        <img src="/image 46.png" width="150" alt="gato gris" ></img>
        <img src="/image 31.jpeg" width="150" alt="cachorro negro" ></img>
        <img src="/image 47.png" width="150" alt="gatito en el campo" ></img>
        <img src="/image 32.jpeg" width="150" alt="perro en la playa" ></img>
        <img src="/adopcion6.jpeg" width="150" alt="conejo en una caja" ></img>
        <img src="/chanchito.jpg" width="150" alt="chanchito" ></img>
        <img className="nonfoto" src="/image 33.jpeg" width="150" alt="perritos en la arena" ></img>
        <img className="nonfoto" src="/image 49.png" width="150" alt="gato siamés" ></img>
        <img className="nonfoto" src="/image 34.jpeg" width="150" alt="cachorro sonriente" ></img>
        <img className="nonfoto" src="/image 50.png" width="150" alt="gatito manchado" ></img>
      </div>
    </div>
  );
}
