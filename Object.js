
// non singletone object
const Student = {
    name : "Avishkar",
    age : 20,
    Roll_no : 162
};

console.log(Student);
console.log("Accessing object 1 Name: "+Student.name);

// singletone object
const person = new Object()
person.id="124avi"
person.name = "AVishkar"
console.log(person);

//Combining the two object
const combine = {...Student, ...person}
console.log(combine);

// Another way to access object
const {Roll_no}= Student
console.log("Other way to access "+Roll_no);