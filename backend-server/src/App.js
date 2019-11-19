import express from 'express';
import {extractParamsFromGithubUrl, getCommitMessages, mapCommitMessagesToMapCount, extractTimesFromTimespan} from './Github';
import axios from 'axios';
import cors from 'cors';

const PORT = 5000;

const app = express();
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/commitcounts", (req, res) => {
    const { interval, url } = req.query;
    const params = extractParamsFromGithubUrl(url);
    const timespan = extractTimesFromTimespan(interval, new Date());
    getCommitMessages(axios, params, timespan).then((response) => {
        const commitCounts = mapCommitMessagesToMapCount(response.data);
        const returnObject = {
            interval: interval,
            commitCounts: commitCounts,
        };
        res.json(returnObject);
    });
});