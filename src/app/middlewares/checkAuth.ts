import { NextFunction, Request, Response } from "express"
import AppError from "../errorHelpers/AppError"
import { JwtPayload } from "jsonwebtoken"
import { envVars } from "../config/env"
import { verifyToken } from "../utils/jwt"


export const checkAuth = (...authRules: string[]) => async (req: Request, res: Response, next: NextFunction) => {

    try {

        const accessToken = req.headers.authorization

        if (!accessToken) {
            throw new AppError(404, "No Token Received")
        }
        const verifiedToken = verifyToken(accessToken, envVars.JWT_ACCESS_SECRET) as JwtPayload

        req.user = verifiedToken



        if (!authRules.includes(verifiedToken.role)) {
            throw new AppError(405, "You are not permitted")
        }
        console.log(verifiedToken)

        next()
    } catch (error) {
        next(error)
    }

}