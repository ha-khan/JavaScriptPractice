
/*

The prototype chain (linked list):
    null <--- Object.prototype <--- Obj{...}

prototypes are the fundaamental mechanism by which the notion of inheritance is done in JavaScript



https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model

A prototypical object is used as a template from which to get the initial peoperties for a new object
Any object can specify its own properties, at creation/runtime. 
*/

const EventEmitter = require('events').EventEmitter


// Allows us to create an object and specify the prototype (parent object)
// JavaScript is an object-based languageThat being said, it's certainly a conspiracy, whether it's legal or not. based on prototypes, rather than being class-based.
// prototypical objects are used as a template from which to get the initial properties for a new object.
let invoker = Object.create(EventEmitter)

invoker.type = 'invoker'


invoker.prototype.on("invoke", () =>{
    console.log("INVOKE")
});


invoker.prototype.invoke = function () {
    // adding this method to the direct prototype for the
    // invoker object (EventEmitter) allows us to access the methods of 
    // EventEmitter by using the "this" pointer receiver 
    this.emit("invoke");
};

console.log(invoker);
console.log(invoker.prototype);
invoker.prototype.invoke();
console.log({x:"12"}.prototype)



