const app = require("./server");
const fetch = require("node-fetch");

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Express departed from port ${port}`))

// const data = { name: "emma", fact: "interesting" };

// fetch("http://localhost:3000/",
//     {
//         method: "POST",
//         header: { "Content-Type": "application/json" },
//         body: data
//     }).catch(err => console.log("Error while posting task to server", err));