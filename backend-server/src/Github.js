const YEAR = 365;
const DAYS = 7;
const HOURS = 24;
const SECONDS = 3600;
const MILLI_SECONDS = 1000;

export const getCommitMessages = (axios, params, timespan) => {
    return axios.get(`https://api.github.com/repos/${params.owner}/${params.repo}/commits?since=${timespan.since}&until=${timespan.until}`);
};

export const extractParamsFromGithubUrl = (gitHubUrl) => {
    const url = new URL(gitHubUrl);
    const params = url.pathname.split("/").filter((element) => element !== "");
    return {
        owner: params[0],
        repo: params[1]
    }
};

export const extractTimesFromTimespan = (timespan, nowDate) => {
    switch (timespan) {
        case 'hours':
            const sinceHours = new Date(nowDate - HOURS * SECONDS * MILLI_SECONDS);
            return {
                since: sinceHours.toISOString(),
                until: nowDate.toISOString(),
            };
        case 'week':
            const sinceWeek = new Date(nowDate - DAYS * HOURS * SECONDS * MILLI_SECONDS);
            return {
                since: sinceWeek.toISOString(),
                until: nowDate.toISOString(),
            };
        case 'year':
            const sinceYear = new Date(nowDate - YEAR * DAYS * HOURS * SECONDS * MILLI_SECONDS);
            return {
                since: sinceYear.toISOString(),
                until: nowDate.toISOString(),
            };
    }
};

export const mapCommitMessagesToMapCount = (commitMessages) => {
    const countMap = {};
    commitMessages.forEach((commitMessage) => {
        if (commitMessage.author) {
            const authorName = commitMessage.author.login;
            if (countMap[authorName] === undefined) {
                countMap[authorName] = 1;
            } else {
                countMap[authorName] = countMap[authorName] + 1;
            }
        }
    });
    return countMap;
};