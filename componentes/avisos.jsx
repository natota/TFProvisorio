import estilo from "@/estilos/avisos.module.css";

export  const Avisos=({titulo,texto, children}) => {
    return (
        <div className={estilo.tarjetaAvisos}>
            <h3>🐾 {titulo} 🐾</h3>
            <p>{texto}</p>
            {children}
        </div>
    )
}