"use client";

import "@/estilos/globals.css";
import { useEffect, useState } from "react";
/*
export const metadata = {
    title: "Te esperamos!!!"
}*/
export default function Contacto() {
    const [contacto, setContacto] = useState([]); //inicia vacío y se guardan los contactos
    const [user, setUser] = useState({//este use tiene UN objeto con estos atributos vacíos
        nombre: "",                   //setUser actualiza los atributos
        email: "",
        telefono: "",
        comentario: ""
    });
    useEffect(()=>{
    console.log(contacto);
    },[contacto]
    );
    const handleChange = (e) => {//actualiza cada componente del form a medida que cargamos
        const { name, value } = e.target;
        setUser({...user, [name]:value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoContacto = {
            id: Date.now(),//evita duplicados si borrás datos de la lista
            ...user, };
        setContacto((prevContacto)=>[...prevContacto, nuevoContacto]);//se guardan los datos definitivamente
        alert(`Gracias por comunicarte con nosotros, ${user.nombre}!`);
        setUser({ nombre: "", email: "", telefono: "", comentario: "" });
        console.log(contacto);
    }
    return (
        <main className="contacto">
            <section className="section">
                <form className="formulario" onSubmit={handleSubmit}>
                    <h2 className="titulo">Contacto  🐾</h2>
                    <div className="div">
                        <label>Nombre:</label>
                        <input className="input" type="text" name="nombre" value={user.nombre} onChange={handleChange} required />
                    </div>
                    <div className="div">
                        <label >Email:</label>
                        <input className="input" type="email" name="email" value={user.email} onChange={handleChange} required />
                    </div>

                    <div className="div">
                        <label >Teléfono:</label>
                        <input className="input" type="tel" name="telefono" value={user.telefono} onChange={handleChange} required />
                    </div>
                    <div className="div">
                        <label >Comentario:</label>
                        <textarea className="input" name="comentario" value={user.comentario} onChange={handleChange} required placeholder="¿en qué te gustaría colaborar?"/>
                    </div>
                    <button className="btn" type="submit" >Guardar</button>
                </form>
            </section>
            <section className="llamar">
                <p>Si querés colaborar con: </p><br />
                <h2> 🐾 <strong>Hogar para peluditos</strong> 🐾 </h2><br />
                <p>Esperamos tu mensaje completando el formulario</p>
                <p>...o llamando al <strong>291-45588444</strong></p>
                <p>También encontranos en todas las redes sociales</p>
            </section>
        </main>
    );

}





