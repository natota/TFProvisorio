

export const Ficha = ({ imagen, alt, titulo }) => {
    return (
        <figure >
            <img src={imagen} alt={alt} width="95%" />
            <figcaption>{titulo}</figcaption>
        </figure>
    );
}