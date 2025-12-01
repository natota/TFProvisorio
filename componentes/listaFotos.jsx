import { Fotos } from "./fotos";

export const ListaFotos = ({lista}) => {
   
    return (
        < >
            {lista.length?(
                lista.map((foto) => (
                        <Fotos key={foto.id} {...foto}/>
                ))) : <p>no hay fotos</p>}
        </>
    );
}