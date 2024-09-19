import express from "express";
import { info } from '../models/postmodel.js';

const router = express.Router();

router.post('/', async(request,response)=>{
    try{
        const {tittle, description} = request.body;
        if(
            !tittle,
            !description
        ){
            return response.status(400).send({message: "enter details"});
        }
        const infodetails = {
            tittle: request.body.tittle,
            description: request.body.description,
            rating: request.body.rating,
            cost: request.body.cost
        }

        const infos = await info.create(infodetails);

        return response.status(200).send(infos);
    }
    catch(error){
        console.log(error);
        return response.status(400).send({message: "error"})
    }
})


router.get('/',async(request,response)=>{
    try{
        const infos = await info.find({})

        return response.status(200).send(infos);
    }catch(error){
        console.log(error);
        return response.status(400).send({message: "error"})
    }
})

router.get('/:id',async(request,response)=>{
    try{
        const {id} = request.params;

        const infos = await info.findById(id);
        return response.status(400).send(infos);
    }catch(error){
        console.log(error);
        return response.status(400).send(error);
    }
})

router.delete('/:id',async(request,response)=>{
    try{
        const {id} = request.params;
        const infos = await info.findByIdAndDelete(id);

        if(!infos){
            return response.status(400).send({message: "not found"});
        }

        return response.status(200).send({message: "deleted"})
    }catch(error){
        console.log(error);
        return response.status(200).send({message:error.message});
    }
})

export default router;