import jwt, { JwtPayload, SignOptions } from "jsonwebtoken"

export const generateToken = (JwtPayload: JwtPayload, secret: string, expiresIn: string) => {
    const token = jwt.sign(JwtPayload, secret, {
        expiresIn
    } as SignOptions)

    return token
}


export const verifyToken = (token: string, secret: string) => {
    const verifiedToken = jwt.verify(token, secret);

    return verifiedToken;
}