_ = function main() {
    const http = require('http')
    const fs = require('fs')

    // declare an identifier in this scope for closures
    let buffer = null;
    fs.stat('./index.html', (err, stats) => {
        buffer = Buffer.alloc(stats.size);
        fs.open('./index.html', (err, fd) => {
            fs.readSync(fd, buffer)
            fs.close(fd)
        });
    })

    // potential race where buffer is not filled
    // at time of http request
    const server = http.createServer((req, res) => {
        res.write(buffer);
        res.end();
        console.log("handled")
    });


    server.listen(8080)
}();
