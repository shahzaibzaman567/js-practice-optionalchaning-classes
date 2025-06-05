// Class is a program code templet for creating object
//Those object will have some state(variable) and some behavior (function) insite it.
class ToyotaCar {
//for eample start will satart and stop and car brand will not writr bar bar so we can use classes   
  strat() {
     console.log("start");
  }

  stop() {
    console.log("stop");
  }
  setBrand(brand){
    this.brand=brand ;
  
}
showbrand(){
  console.log(  this.brand)
}

}

console.log(ToyotaCar);

//this is created new object
let furtuner = new ToyotaCar();

//its beacome print obj and function of classes
console.log(furtuner);
//brand  furtuner 
furtuner.setBrand("furtuner");
furtuner.showbrand()

//use classes in different variable   like
let linux = new ToyotaCar();
console.log(linux);















