const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res, next)=> {
    
    const salt_rounds = 5;
    const hashedPassword = await bcrypt.hash(req.body.password, salt_rounds);


    try {
        const user = await prisma.model_user.create({
            data: {
                username: req.body.username,
                password: hashedPassword,
            }
        })
    } catch (error) {
        next(error)
    }


    const token = jwt.sign({id:user.id}, process.env.JWT)
    res.status(201).send({token, user:{userId.user.id}, username:user.username})
})


router.post("/login", async (req, res, next)=> {

    try {
        const user = await prisma.user.findUnique({
            where: {username: req.body.username}
        })

        if(!user) {
            return res.status(401).send("Invalid Login")
        }
        const isValid = bcrypt.compare(req.body.password, user.password);

        if(!isValid) {
            return res.status(401).send("Invalid Login")
        }

        const token = jwt.sign({id:user.id}, process.env.JWT);
        res.status(201).send({token, user:{userId:user.id}, username: user.username})

    } catch (error) {
        next(error);
    }
});

router.get("/me", async (req, res, next)=> {
    if(!req.user){
        return res.send({})
    }

    try {
        const user = await prisma.user.findUnique({
            where: {id: req.user.id}
        })
        res.send(user)

    }  catch (error) {
            next(error)
    }


})


module.exports = router;