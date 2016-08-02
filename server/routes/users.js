/**
 * Created by Administrator on 2016/8/2.
 */
import express from 'express'
import validateInput from '../shared/validations/signup'
let router = express.Router()

router.post('/',(req,res)=>{

    const {errors,isValid} = validateInput(req.body)
    if(isValid){
        res.json({success:true})
    }else{
        res.status(400).json(errors)
    }

    console.log(req.body)

})

export default router