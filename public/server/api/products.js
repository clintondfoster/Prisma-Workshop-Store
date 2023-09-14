const express = require('express');
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get('/', async (req, res, next) => {
    try {
        const allProducts = await prisma.model_product.findMany();
        res.send(allProducts)
        console.log(allProducts)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req,res,next)=>{
    try{
        const product = await prisma.model_product.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.send(product)
    }catch(err){
        next(err)
    }
})

router.delete('/:id', async (req,res,next)=>{
    try{
        const product = await prisma.model_product.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.send(product)
    }catch(err){
        next(err)
    }
})

router.post('/', async (req,res,next)=>{
    try{
        const product = await prisma.model_product.create({
            // data:req.body
        })
        res.send(product)
    }catch(err){
        next(err)
    }
})

router.put('/:id', async (req,res,next)=>{
    try{
        const product = await prisma.model_products.update({
            where:{
                id: Number(req.params.id)
            },
            // data:req.body
        })
        res.send(product)
    }catch(err){
        next(err)
    }
})

module.exports = router;