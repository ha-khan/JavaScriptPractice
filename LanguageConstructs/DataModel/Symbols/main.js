var c = Symbol('hello');
var mp = new Map();
mp.set(c, "world");
console.log(mp.get(c));
