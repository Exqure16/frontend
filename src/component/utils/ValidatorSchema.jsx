import React from 'react'
import * as yup from 'yup'
export const ValidatorSchema = yup.object().shape({
    fullname: yup.string('name should contain only letters').required('This field is required'),
    email: yup.string().required(),
    companyName: yup.string().required(),
    companyEmail: yup.string().required(),
    phoneNumber: yup.number('This field should contain only numbers').required(),
    altPhoneNumber: yup.number('This field should contain only numbers').required(),
    password: yup.string('This field should contain only numbers').required(),
    dateOfBirth: yup.number().required(),
    billingAddress: yup.string().required(),
    city: yup.string('This field should contain only letters').required(),
    state: yup.string('This field should contain only letters').required(),
    zipCode: yup.number().required()

}).required();
