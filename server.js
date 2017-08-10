let express = require('express')
let open = require("open");

let app = express();
app.use(express.static('./wwwroot/'));

let server = app.listen(8000, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        let url = 'http://localhost:8000';
        console.log(`打开浏览器访问：${url}`);
        open(url)
    }
})