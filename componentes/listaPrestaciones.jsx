import estilo from "@/estilos/prestaciones.module.css";
import { Prestaciones } from "./prestaciones";


export const ListaPrestaciones = ({ list }) => {
   
    return (
        <div className={estilo.art}>
            {list.length ? (
                list.map((servicio, index) => (
                    <section  key={index} className={estilo.sec} >
                        <Prestaciones {...servicio} >
                            <p className={estilo.p}>{servicio.info}</p>
                        </Prestaciones>
                    </section>
                ))) : <p>no hay prestaciones</p>}
        </div>
    );
}