// Objects are the building blocks of more complex datatypes in javascript
// somewhat similar to go structs or dictionaries, or some instance obj of a class obj

// Literal definition of an object, somewhat similar to def an anonymous struct in go
let node = {
    // key-value, aka property, attribute, .. etc
    "value": 123,

    // quotes are optional
    right : function() {

        // this is a pointer receiver / pointer to the object instance 
        // being ref 
        console.log(this.value)
    } 
}


// extracting the value for the key "right" with is a function obj
// function object is then invoked/called
node["right"]()

