const express = require("express");
const app = express();
const PORT = 3000;
const userDB = [];
app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h2>home page</h2>')
})

app.get('/getUsers', (req, res) => {

    userDB.length ? res.send(userDB) : res.send("no user Found")
})

app.post('/pushUser', (req, res) => {
    const exists = userDB.some((value) => {
        return req.body.email == value.email
    })
    exists ? res.send("user already exists") : (userDB.push(req.body), res.send(userDB))
})

app.put('/updateUser', (req, res) => {
    if (!req.query.email) {
        res.send("enter email")
        return
    }
    const user = userDB.indexOf((value) => {
        return value.email == req.query.email;
    }) ?? null
    if (user <= 0) {
        userDB.splice(user - 1, 1, req.body)
        res.send(userDB)
    }
})

app.delete('/deleteUser', (req, res) => {
    if (!req.query.email) {
        res.send("enter email")
        return
    }
    const user = userDB.indexOf((value) => {
        return value.email == req.query.email;
    }) ?? null
    if (user <= 0) {
        userDB.splice(user - 1, 1)
        res.send(userDB)
    }
})

app.use((req, res) => {
    res.send('<h2>Error 404, page not found</h2>')
})

app.listen(PORT, () => {
    console.log(`server is listning on PORT ${PORT}`);
})
