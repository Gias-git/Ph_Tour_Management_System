import z from "zod";
import { IsActive, Role } from "./user.interface";

export const createUserZodSchema = z.object({
    name: z
        .string({ error: "Name must be string" })
        .min(2, { message: "Name too short" })
        .max(50, { message: "Name too long" }),
    email: z.email(),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/\d/, { message: "Password must contain at least one digit" })
        .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" }),
    phone: z.string().regex(/^(?:\+?88)?01[3-9]\d{8}$/, {
        message: "Invalid Bangladeshi phone number",
    }).optional(),
    address: z.string({ error: "Address must be a string" }).optional()
})


export const UpdateUserZodSchema = z.object({
    name: z
        .string({ error: "Name must be string" })
        .min(2, { message: "Name too short" })
        .max(50, { message: "Name too long" }).optional(),
    email: z.email().optional(),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/\d/, { message: "Password must contain at least one digit" })
        .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" }),
    phone: z.string().regex(/^(?:\+?88)?01[3-9]\d{8}$/, {
        message: "Invalid Bangladeshi phone number",
    }).optional(),
    role: z
        // .enum(["ADMIN", "GUIDE", "USER", "SUPER_ADMIN"])
        .enum(Object.values(Role) as [string])
        .optional(),
    isActive: z
        .enum(Object.values(IsActive) as [string])
        .optional(),
    isDeleted: z
        .boolean({ error: "isDeleted must be true or false" })
        .optional(),
    isVerified: z
        .boolean({ error: "isVerified must be true or false" })
        .optional(),
    address: z.string({ error: "Address must be a string" }).optional()
})