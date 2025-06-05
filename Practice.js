// Q1: your are creating to a website for your collage .creat class user with 2 properties
// name,and email.its also has a method called view data() that allowes user to view website data.
console.log("Q:1")
// Anser:
class collageStudent {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewdata() {
        alert("Name : " + this.name + " " + "  Email : " + this.email)
        
    }
}
let student1 = new collageStudent("aliya", "aliya@gmail.com");
let student2 = new collageStudent("amir", "amir@gmail.com");

//show user one data
console.log(student1)
console.log(student1.viewdata())

//show user 2 data 
console.log(student2)
console.log(student2.viewdata())

console.log("Q:2")

// Q2:Creat a new class calles admin which inherits from user.
//   add a new method  called edit data to admin that allows it to edit website
//   data.

//Answer:

class Admin extends collageStudent {
    constructor(name,email){
    super(name,email)
    }
    //TO edit the data by admin
    editdata() {
        alert("Edit the data by admin  "  +"Name : " + this.name + " " + "  Email : " + this.email)
      
    }

}

let edit1=new Admin("amir1","amir@gmail.com")
//comes edit data in alert and console 
console.log(edit1)
console.log(edit1.editdata)

















