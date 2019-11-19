import express from 'express';

const PORT = 3000;

const app = express();
app.listen(PORT, () => {
    console.log("Server running on port 3000");
});

app.get("/url", (req, res) => {
    const response = {
        interval: "week",
        commitCounts: {
            "trueAdm": 1,
            "testUser": 2
        }
    };
    res.json(response);
});