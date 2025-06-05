// Prototype in js
//  A javascript object objeCt object  which is an entity state and behavior(properties and method )
//js property have a special prototype called prototy pe
//We can set prototype using --proto-- 

let student = {
    Name: "shahzaib",
    Class: "9th",
    address: function () {
        return console.log(this.Class);
    }
};
student.address();

const employ = {
    calcutax() {
        console.log("tax rate is 10%")
    }
};

const ali1 = {
    salary: "50000",
    calcutax() {
        // its result comes this claculate text giving         
        console.log("tax rate is 30%")

    }
};
const ali2 = {
    salary: "50000"
};
const ali3 = {
    salary: "50000"
};
const ali4 = {
    salary: "50000"
};
ali1.__proto__ = employ
ali2.__proto__ = employ
ali3.__proto__ = employ
ali4.__proto__ = employ
ali1.calcutax()
ali2.calcutax()
