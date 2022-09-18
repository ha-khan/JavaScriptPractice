
function* greeting(){
    yield "hello";
    yield " world";
};


buffer = ""
for (word of greeting()) {
    buffer += word
};

console.log(buffer)


console.log(greeting().next()[value])
