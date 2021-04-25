

export const getObject = (datos) => {
    const { email, id , name, picture} = datos;
    const { data } = !!picture;
    const { url } = !!data

    return {
        id,
        name,
        email,
        url,
    }
}
