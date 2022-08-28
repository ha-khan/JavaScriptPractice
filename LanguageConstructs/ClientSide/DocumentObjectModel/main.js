function main() {
    const http = require('http')
    const fs = require('fs')

    let buffer = Buffer.alloc(1024);
    fs.open('./main.html', (err, fd) => {
        if (err == null) {
            console.log('error is null')
        }
        fs.readSync(fd, buffer)
        fs.close(fd)
    });

    const server = http.createServer((req, res) => {
        res.write(buffer);
        res.end();
    });


    server.listen(8080)
}


main()
