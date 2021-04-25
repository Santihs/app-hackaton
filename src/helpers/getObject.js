

export const getObject = (datos) => {
    const { email, id , name} = datos;

    return {
        id,
        name,
        email,
    }
}
