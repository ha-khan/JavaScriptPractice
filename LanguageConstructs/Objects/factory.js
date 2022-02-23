
// Returns a new obj list with the
// head init with a specific value
// and next ptr to null
function newList (value) {
    return {
        value: value,
        next: null
    };
};

function populateFromArr (arr) {
    if (arr.length == 1) {
        return newList(arr[0]);
    };
    // closures allow us to have state propogated to foreach
    // fn call 
    h = newList(arr[0]);
    head = h;
    arr.slice(1, arr.length).forEach(element => {
        node = newList(element);
        head.next = node;
        head = head.next;
    });
    return h;
}


l = populateFromArr([123, 456, 789]);


console.log(l.value);
console.log(l.next.value);
console.log(l.next.next.value);
