import { Ficha } from "./ficha";

export const FichaEquipo = ({ ficha }) => {
    return (
        <>
            {ficha.length ? (
                ficha.map((e, id) => (
                    <Ficha key={id} {...e} />
                ))) : <p>no hay historias</p>}
        </>
    );
}