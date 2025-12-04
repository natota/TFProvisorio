"use client";
import { Avisos } from "@/componentes/avisos";
import { FichaEquipo } from "@/componentes/fichaEquipo";
import "@/estilos/globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
/*
export const metadata = {
    title: "¡Nuestro Equipo!"
}*/
export default function Nosotros() {
    const [equipo, setEquipo] = useState([]);
    useEffect(() => {//gestiona efectos secundarios como pedir datos externos
        fetch("/data/equipo.json") //se usa para hacer una petición: pedimos datos a un archivo json
            .then((res) => res.json())//obtiene el json en javascript
            .then((data) =>           
                setEquipo(data))      //guarda la info en equipo, lo actualiza
            .catch(((err) => console.error('Error al cargar el equipo:', err)));//para el caso de errores
    }, []);
    return (
        <div className="home">
            <div>
                <h2>¡NUESTRO EQUIPO! 🐾 </h2>
                <br />
                <p>Las emergencias que aquejan a nuestro país también han afectado a las mascotas,
                    la fauna silvestre y a los animales de producción. Estudiantes y médicos veterinarios se
                    encuentran realizando diversos operativos para ayudar a estos otros grandes afectados por las catástrofes.</p>
                <br />
                <div className=" fotos2">
                    <FichaEquipo ficha={equipo} />
                </div>
            </div>
            <div className="voluntarios">

                <div className="voluntarios1">
                    <h2> 🐾 ¿QUERÉS SER VOLUNTARIO/A ? </h2>
                    <p>En el <strong>Hogar para peluditos</strong> hay mucho por hacer. </p>
                    <br />
                    <p>Para que puedas integrarte, hemos creado un espacio formativo permanente que nos ayude a potenciar la
                        participación real y efectiva de aquellos que deseen dejar de ser visitantes para convertirse en voluntarios
                        de nuestra ONG.</p>
                    <br />
                    <p>Todos los años el <strong>Hogar para peluditos</strong> abre la inscripción para reclutar voluntarios que posean un real compromiso para trabajar
                        en las distintas áreas de nuestro refugio.</p>
                    <p>Actualmente cerca de 150 voluntarios trabajan en nuestro Refugio proveyendo compañía, estímulo y ejercicio a
                        nuestros animales, brindando su trabajo en caniles, enfermería, página web, colectas, reeducación y sociabilización
                        de animales con problemas de conducta, evaluando adoptantes, efectuando traslados y rescates, trabajando en jornadas
                        y asistiendo a colegios para concientizar, dando la bienvenida y asistiendo a nuestros visitantes. </p>
                    <p>VOS PODES SER UNO DE ELLOS.</p>
                </div>
                <Avisos className="voluntarios2" titulo="¡UNITE A NOSOTROS!"
                    texto="Si querés formar parte de nuestro equipo de voluntarios, envianos un mensaje en el formulario de contacto
                           y nos comunicaremos con vos a la brevedad.">
                    <p><Link href="/contacto"><strong>TE ESTAMOS ESPERANDO!🐾</strong></Link></p>
                </Avisos>
            </div>
            <h2>Nuestro equipo es feliz compartiendo con otros su pasión y su conocimiento!!</h2>
        </div>);

}