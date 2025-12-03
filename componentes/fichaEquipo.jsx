import { Ficha } from "./ficha";

export const FichaEquipo = ({ ficha }) => {
    return (
        <>
            {ficha.length ? (
                ficha.map((e, index) => (
                    <Ficha key={index} {...e} />
                ))) : <p>no hay historias</p>}
        </>
    );
}