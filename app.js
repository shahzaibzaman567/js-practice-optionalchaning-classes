//optional changing cannot exist value but it no come error it comes 
//undefine or null  uses  in Array and object


const user = {
    name: "shahzaib",
    Country: "Pakistan",
    Address: {
        City: "Ring Road Peshawer",
        school: "Aziz Jan institue of learning"
    }
}
// Its no come error only undefined
console.log(user.roadNO)

//its will come error 
// console.log(user.roadNO.house)

//solve the problem with optional chaning
console.log(user.roadNO?.house)

//uses optional changing 
console.log(user?.Address?.City)

//optional changing with array
console.log("Optional changing with ayyay")

const Student = [
    { Name: "shahzaib", age: 15 },
    { Name: "okab", age: 16 },
    { Name: "surkab", age: 44 }
]
//its come error 
// console.log(Student[3].Name)

// its come error 
console.log(Student[3]?.Name)

//  importance if you not using optional changing the other optiona is very long like this 
if (Student[4]) {

    console.log(Student[4].Name)
}
else {
    console.log("No maching same user")
}

//its very diffcult and longer than optional changing
















