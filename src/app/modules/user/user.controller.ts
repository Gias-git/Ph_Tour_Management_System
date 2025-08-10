/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes"
import { UserServices } from "./user.service";
import { catchAsync } from "../../utils/CatchAsync";
import { sendResponse } from "../../utils/sendResponse";


const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserServices.createUser(req.body);
    // res.status(httpStatus.CREATED).json({
    //     message: `User Created Successfully`,
    //     user
    // })

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "User Created Successfully",
        data: user
    })
})


const getAllUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserServices.getAllUser();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "User Retrieved Successfully",
        meta: result.meta,
        data: result.data
    })
})

// const createUser = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         throw new AppError(httpStatus.BAD_REQUEST, "Fake error")
//         const user = await UserServices.createUser(req.body);

//         res.status(httpStatus.CREATED).json({
//             message: `User Created Successfully`,
//             user
//         })
//     } catch (err: any) {
//         // eslint-disable-next-line no-console
//         console.log(err);
//         next(err)
//     }
// }


// const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const users = await UserServices.getAllUser();
//         res.status(httpStatus.OK).json({
//             success: true,
//             message: "Find User Retrieved Successfully",
//             data: users
//         })
//     } catch (err: any) {
//         // eslint-disable-next-line no-console
//         console.log(err)
//         next(err)
//     }
// }



export const UserControllers = {
    createUser,
    getAllUser
}