//Class is the blueprint for creating objects with specific properties and methods
class Student{
    details(name){
        console.log("Hello my name is "+name );
    }
}

const std = new Student();                                      // std  is the object of the Student class
console.log(std.details("Avishkar"));                           // details is the method of the class Student 

// Animal Class
class Animal{
    speak(){
        console.log("Animal makes differnt sound");
    }
}

const animal = new Animal();
animal.speak();

// Calulator class
class Calulator{
    add(a,b){
        return console.log(a+b);
    }
    sub(a,b){
        return console.log(a-b);
    }
}

const cal= new Calulator;
console.log(cal.add(5,10));
console.log(cal.sub(5,10));