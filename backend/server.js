const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`);
})
