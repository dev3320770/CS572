{
    _id: ObjectId(),
    ISBN: "", //unique
    author: [{
        name:{
            fname:"",
            lname:""
        }

    }],
    tags:["", "", ""],
    student:[{
        name:{
            fname:"",
            lname:""
        },
        studentId:"",
        email:"",
        address:[{
            city:"",
            town:"",
            zipCode:"",
            streetName:""
        }],
        checkOutDate: Date,
        returnDate: Date
    }],
    isAvailable: true


}