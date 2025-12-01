import estilo from "@/estilos/prestaciones.module.css";
import { Prestaciones } from "./prestaciones";


export const ListaHistorias = ({cuenta}) => {
  
    return (
        <div className={estilo.art}>
       {cuenta.length ?(
        cuenta.map((l, index)=>(
            <section  key={index} className={estilo.sec}>
                <Prestaciones {...l}>
                    <p className={estilo.p}></p>
                </Prestaciones>
            </section>
        ) ) ):<p>no hay historias</p> }
        </div>
    );
};