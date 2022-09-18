

let c: number = Symbol('hello');


let mp: Map<Symbol, string> = new Map();

mp.set(c, "world");


console.log(mp.get(c));
