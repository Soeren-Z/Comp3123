const http = require("http");
//TODO - Use Employee Module here
const Employees = require('./Employee');
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = 3000;
const server_name = "localhost";

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("<h1>Welcome to Lab Exercise 03</h1>")

            console.log(`http://${server_name}${req.url}`)
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            const employees = Employees.getAllEmployees();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(employees, null, 2));

            console.log(`http://${server_name}${req.url}`)
            console.log(JSON.stringify(employees, null, 2));
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const employees = Employees.getEmployeeNames();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(employees))

            console.log(`http://${server_name}${req.url}`)
            console.log(JSON.stringify(employees));
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format
            //e.g. { "total_salary" : 100 }  
            const totalSalary = Employees.getTotalSalary();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(totalSalary));

            console.log(`http://${server_name}${req.url}`)
            console.log(JSON.stringify(totalSalary));
        }
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})