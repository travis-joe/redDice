/**
 * Created by Administrator on 2016/8/2.
 */

import validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data){
    let errors = {};
    if(validator.isNull(data.username)){
        errors.email = 'This field is require'
    }
    if(validator.isNull(data.email)){
        errors.email = 'This field is require'
    }
    if(!validator.isEmail(data.email)){
        errors.email = 'email is invalid'
    }
    if(validator.isNull(data.password)){
        errors.password = 'This field is require'
    }
    if(!validator.equals(data.password,data.passwordConfirmation)){
        errors.password = 'password must match'
    }
    if(validator.isNull(data.passwordConfirmation)){
        errors.passwordConfirmation = 'This field is require'
    }
    if(validator.isNull(data.timezone)){
        errors.timezone = 'This field is require'
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }
}