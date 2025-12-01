"use client";
import { ListaPrestaciones } from "@/componentes/listaPrestaciones";
import "@/estilos/globals.css";
import { useEffect, useState } from "react";
import { ListaFotos } from "@/componentes/listaFotos";
/*
export const metadata = {
    title: "Servicios"
}*/
export default function Servicios() {
    const [fotos, setFotos] = useState([]);
    const [prestaciones, setPrestaciones] = useState([]);

    useEffect(() => {
        fetch("/data/fotos.json")
            .then((response) => response.json())
            .then((data) =>
                setFotos(data))
            .catch(((error) => console.error('Error al cargar las fotos:', error)));
    }, []);


    useEffect(() => {
        fetch("/data/prestaciones.json")
            .then((res) => res.json())
            .then((dato) =>
                setPrestaciones(dato))
            .catch(((err) => console.error('Error al cargar las prestaciones:', err)));
    }, []);


    return (
        <div className="home">
            <h2>¡Hola! 🐾</h2>
            <br />
            <p>Somos <strong>Hogar para peluditos</strong>, un grupo de personas que ama a los animales
                y cree en las segundas oportunidades. Acá vas a conocer a nuestros rescatados, sus historias
                y cómo podés ayudarlos a encontrar la familia que tanto esperan.</p>
            <br />
            <br />
            <h2>🐾 Rescatados y esperando familia!!!</h2>
            <div className="fotos2">
                <ListaFotos lista={fotos} />

            </div>
            <ListaPrestaciones list={prestaciones} />
            <h2>¡Gracias por visitarnos y por ser parte del cambio!</h2>
        </div>);
}
