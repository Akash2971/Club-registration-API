const router = require('express').Router();
const Student = require('../models/Student');
const { registerValidation } = require('../validation');

router.post('/api/register',async (req,res)=>{
    
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const emailExist = await Student.findOne({email : req.body.email});
    const regnoExist = await Student.findOne({regno:req.body.regno});
    if(regnoExist) return res.status(400).send('Register Number already exists !')
    if(emailExist) return res.status(400).send('Email already exists !')


    const student = new Student({
        name: req.body.name,
        regno: req.body.regno,
        dept: req.body.dept,
        tag: req.body.tag,
        domain: req.body.domain,
        mobile: req.body.mobile,
        email: req.body.email
    })

    try{
        await student.save();
        res.send({student: student._id})
    }catch(err){
        res.status(400).send(err);
    }


});

module.exports = router;