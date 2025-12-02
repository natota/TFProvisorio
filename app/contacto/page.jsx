"use client";
import "@/estilos/globals.css";
import { useEffect, useState } from "react";
/*
export const metadata = {
    title: "Te esperamos!!!"
}*/
export default function Contacto() {
    const [contacto, setContacto] = useState([]);
    const [user, setUser] = useState({
        nombre: "",
        email: "",
        telefono: "",
        comentario: ""
    });

    useEffect(() => {
        const guardados = localStorage.getItem("contactos");
        if (guardados) {
            setContacto(JSON.parse(guardados));
        }
    }, []);

    // Guardar cambios en localStorage
    useEffect(() => {
        localStorage.setItem("contactos", JSON.stringify(contacto));
    }, [contacto]);

const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoContacto = {
        id: contacto.length + 1,
        ...user,
    };
    setContacto([...contacto, nuevoContacto]);
    
    alert(`Gracias por comunicarte con nosotros, ${user.nombre}!`);
    setUser({ nombre:"", email:"", telefono:"", comentario:"" });
    console.log(JSON.stringify(contacto));
     e.target.reset();
}

return (
    <main className="contacto">
        <section className="section">
            <form className="formulario" onSubmit={handleSubmit}>
                <h2 className="titulo">Contacto  🐾</h2>
                <div className="div">
                    <label>Nombre:</label>
                    <input className="input" type="text" name="nombre" value={contacto.nombre} onChange={handleChange} required />
                </div>
                <div className="div">
                    <label >Email:</label>
                    <input className="input" type="email" name="email" value={contacto.email} onChange={handleChange} required />
                </div>

                <div className="div">
                    <label >Teléfono:</label>
                    <input className="input" type="tel" name="telefono" value={contacto.telefono} onChange={handleChange} required ></input>
                </div>
                <div className="div">
                    <label >Comentario:</label>
                    <textarea className="input" name="comentario" value={contacto.comentario} onChange={handleChange} required placeholder="¿en qué te gustaría colaborar?"></textarea>
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





