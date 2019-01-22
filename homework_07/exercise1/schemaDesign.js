var schema = {
    
    "ISBN" : "ISBN1323433434", 
    "author": [{
        "name":{
            "fname":"Festus",
            "lname":"Iipito"
        }

    }],
    "tags":["mongoDB", "javascript", "nodeJs"],
    "student":[{
        "name":{
            "fname":"Tuta",
            "lname":"Franco"
        },
        "studentId":986683,
        "email":"fiipito@mum.edu",
        "address":[{
            "city":"Iowa",
            "town":"Fairfield",
            "zipCode":"57776",
            "streetName":"1000 North Street"
        }],
        "checkOutDate": Date.now(),
        "returnDate": new Date("February 19, 2019 00:00:00"),
        "status": 1
    }],
    "isAvailable": false


}