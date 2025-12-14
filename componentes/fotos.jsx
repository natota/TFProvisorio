import  "@/estilos/fotosHistorias.css";

export const Fotos= ({ foto, alt, titulo, descripcion }) => {
    return (
        <div  className="vista vista01">
            <img   src={foto} width="100%" alt={alt} />
            <div className="mask">
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
            </div>
        </div>
    );
}