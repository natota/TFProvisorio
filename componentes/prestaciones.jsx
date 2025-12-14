import estilo from "@/estilos/prestaciones.module.css";

export const Prestaciones=({ nombre, descripcion, texto, foto, children }) => {
    return (
        <article className={estilo.prestacion}>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <div>
                <p>{texto}</p>
                {children}
            </div>
            <img className={estilo.img} src={foto}  alt="" />
        </article>
    )
}