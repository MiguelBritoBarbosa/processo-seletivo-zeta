//Objeto com as propriedades do token

export const authenticator = {
    secret: String(process.env.TOKEN_SECRET),
    expires: String(process.env.TOKEN_EXPIRATION),
};
