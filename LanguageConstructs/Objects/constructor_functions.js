// constructor function that returns a head 
// node of a single link list, using object literal syntax
function newList (value) {
    return {
        value: value,
        next: null
    };
};

// constructor function similar to above
// 
// The function keyword is a building block to construct more complex
// objects in a dynamic way, all functions are "empty" objects
// and when invoked, using the "this" keyword allows you access the instance
// and assign properties with values dynamically
function NewList2(value) {
    // attributes can be dynamically added to this "empty" pointer receiver
    this.value = value;
    this.next = null;
    this.type = 'ListNode'; // allows us to define a "type" in a sense
};

function populateFromArr (arr) {
    if (arr.length == 1) {
        // creates a unique instance of the object
        return new newList(arr[0]);
    };
    // closures allow us to have state propogated to foreach
    // fn call 
    h = newList(arr[0]);
    head = h;

    // () => { ... }  === function () { ... }
    arr.slice(1, arr.length).forEach(element => {
        node = new newList(element);
        head.next = node;
        head = head.next;
    });
    return h;
}


l = populateFromArr([123, 456, 789]);


console.log(l.value);
console.log(l.next.value);
console.log(l.next.next.value);



