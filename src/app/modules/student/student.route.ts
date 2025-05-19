interface IGuardian{
    name: string;
    relation: string;
    occupation: string;
    contactNo: string;
    email: string;
    address: string;
}

interface ILocalGuardian{
    name: string;
    relation: string;
    occupation: string;
    contactNo: string;
    email: string;
    address: string;
}


interface IStudent{
    studentId: string;
    password: string;
    name: string;
    gender: string;
    dateOfBirth: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
    guardian: IGuardian;
    localGuardian: ILocalGuardian;
    bloodGroup: string;
    profileImage: string;
    academicYear: string;
    isDeleted: boolean;

}