//Inharitance is passing down properties and method from parent class to chlid class
// For example 
class Parent {
    hello() {
        console.log(" I am inheritance")
    }
}
//using parent method
class chlid extends Parent {
}
let chlidObj = new chlid();

console.log(chlidObj.hello());//print : I am inheritance

//Another example is
class person {
    constructor(eat, speaking, species) {
        this.eat = eat;
        this.speaking = speaking;
        this.species = species;

    }
};
class enginer extends person {
    work() {
        console.log("Problem solver and desginer");
    }
};
class docter extends person {
    work() {
        console.log("Problem solver to a patience");
    }
};

let Enginer=new enginer("yes","yes","human");
let Docter=new docter("yes","yes","human");

console.log(Enginer);
console.log(Docter);

console.log("Super key word")
//super key word
// the super key word is used to call the consturcture of
// its parent class to access the parent pro perties and methods

class Builder extends person {
   constructor(eat){
    super(eat);//to invoke parent class constructer
}
    work() {
        console.log(this.eat)
        console.log("build house and homes");
    }
};

let  builder=new Builder("Food");
console.log(builder.work())















