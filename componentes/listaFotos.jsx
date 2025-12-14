import { Fotos } from "./fotos";

export const ListaFotos = ({lista}) => {
   
    return (
        < >
            {lista.length?(
                lista.map((foto,id) => (
                        <Fotos key={id} {...foto}/>
                ))) : <p>no hay fotos</p>}
        </>
    );
}