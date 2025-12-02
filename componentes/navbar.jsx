import Link from "next/link";
import estilo from "@/estilos/nav.module.css";

export default function Navbar() {
    return (
        <div className={estilo.nav}>
            <ul>
                <li> <Link className={estilo.navE} href="./">🏠</Link>
                    <Link className={estilo.navLink} href="./">Inicio</Link>
                </li>
                <li><Link className={estilo.navE} href="/nosotros">👨‍👩‍👧‍👦</Link>
                    <Link className={estilo.navLink} href="/nosotros">Nosotros</Link></li>
                <li> <Link className={estilo.navE} href="/servicios">🐕‍🦺</Link>
                    <Link className={estilo.navLink} href="/servicios">Servicios</Link></li>
                <li><Link className={estilo.navE} href="/contacto">☎️</Link>
                    <Link className={estilo.navLink} href="/contacto">Contacto</Link></li>
            </ul>
        </div>
    );
}