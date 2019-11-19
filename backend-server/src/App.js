import express from 'express';
import {extractParamsFromGithubUrl, getCommitMessages, mapCommitMessagesToMapCount, extractTimesFromTimespan} from './Github';

const PORT = 3000;

const app = express();
app.listen(PORT, () => {
    console.log("Server running on port 3000");
});

app.get("/commitcounts", (req, res) => {
    const { interval, url } = req.query;
    const params = extractParamsFromGithubUrl(url);
    const timespan = extractTimesFromTimespan(interval);
    getCommitMessages(params, timespan).then((response) => {
        const commitCounts = mapCommitMessagesToMapCount(response.data);
        const returnObject = {
            interval: interval,
            commitCounts: commitCounts,
        };
        res.json(returnObject);
    });
});