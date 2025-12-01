import estilo from "@/estilos/header.module.css";

export default function Header() {
    return (
        <header className={estilo.encabezado} >
            <div className={estilo.img}>
                <img  src="/imagenes/hogar.png" width={100} height={100} alt="logo" />
            </div>
            <div>
                <p className={estilo.head}><strong>Hogar para peluditos</strong></p>
            </div>
        </header>
    )
}