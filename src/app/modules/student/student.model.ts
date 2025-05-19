import {Schema, model } from 'mongoose';
import { IGuardian, ILocalGuardian } from './student.interface';


const guardianSchema = new Schema<IGuardian>({
    name: {
        type: String,
        required: true
    },
    relation:{
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    contactNo:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }

})


const localGuardianSchema = new Schema<ILocalGuardian>({
    name: {
        type: String,
        required: true
    },
    relation:{
        type: String,
        required: true
    },
    occupation:{
        type: String,
        required: true
    },
    contactNo:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }
})


const studentSchema = new Schema({
    studentId : {
        type : String,
        required : true,
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNo : {
        type: String,
        required: true
    },
    emergencyContactNo: {
        type: String,
        required: true
    },
    presentAddress: {
        type: String,
        required: true
    },
    permanentAddress: {
        type: String,
        required: true
    },
    guardian: {
        type: guardianSchema,

    },
    localGuardian: {
        type: localGuardianSchema,
        
    },
    bloodGroup: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    },
    academicYear: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const Student = model('Student', studentSchema);
export default Student;
   