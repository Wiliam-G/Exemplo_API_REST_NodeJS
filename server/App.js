const express = require(express);
const app = express();

app.route('/', require('./route/UsersRoute'));

app.listen(3000);
console.log("Listening on port 3000")