import {Request,Response,NextFunction, Router} from "express";

export const SchoolRouter : Router = Router()

SchoolRouter.get('/school',(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).send({status : '200'})
})