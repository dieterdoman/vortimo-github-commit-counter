var assert = require('assert');
var gitHub = require('../dist/src/Github');

describe('Github', function() {
    describe('#mapCommitMessagesToMapCount()', function() {
        it('should count the number of commit messages correctly', function() {
            var commitMessages = [
                {
                    author: {
                        login: "test"
                    }
                },
                {
                    author: {
                        login: "test"
                    }
                },
                {
                    author: {
                        login: "1234"
                    }
                },
                {},
            ];
            var expectedMap = {
                test: 2,
                "1234": 1
            };
            var result = gitHub.mapCommitMessagesToMapCount(commitMessages)
            assert.equal(result.test, expectedMap.test);
            assert.equal(result["1234"], expectedMap["1234"]);
        });
    });

    describe('#extractTimesFromTimespan()', function() {
        it('should have since and until correct for day', function() {
            var date = new Date();
            var expectedMap = {
                since: new Date(date - 24 * 3600 * 1000).toISOString().split('.')[0],
                until: date.toISOString().split('.')[0]
            };
            var result = gitHub.extractTimesFromTimespan("hours", date);
            assert.equal(result.since.split('.')[0], expectedMap.since);
            assert.equal(result.until.split('.')[0], expectedMap.until);
        });
        it('should have since and until correct for week', function() {
            var date = new Date();
            var expectedMap = {
                since: new Date(date - 7 * 24 * 3600 * 1000).toISOString().split('.')[0],
                until: date.toISOString().split('.')[0]
            };
            var result = gitHub.extractTimesFromTimespan("week", date);
            assert.equal(result.since.split('.')[0], expectedMap.since);
            assert.equal(result.until.split('.')[0], expectedMap.until);
        });
        it('should have since and until correct for year', function() {
            var date = new Date();
            var expectedMap = {
                since: new Date(date - 365 * 7 * 24 * 3600 * 1000).toISOString().split('.')[0],
                until: date.toISOString().split('.')[0]
            };
            var result = gitHub.extractTimesFromTimespan("year", date);
            assert.equal(result.since.split('.')[0], expectedMap.since);
            assert.equal(result.until.split('.')[0], expectedMap.until);
        });
    });

    describe('#extractParamsFromGithubUrl()', function() {
        it('should extract parameters correctly', function() {
            var expectedMap = {
                owner: 'facebook',
                repo: 'react'
            };
            var result = gitHub.extractParamsFromGithubUrl("https://github.com/facebook/react/");
            assert.equal(result.owner, expectedMap.owner);
            assert.equal(result.repo, expectedMap.repo);
        });
    });

    describe('#getCommitMessages()', function() {
        it('should make correct call', function() {
            var axios = {
                get: function (url) {
                    assert.equal(url, `https://api.github.com/repos/facebook/react/commits?since=then&until=now`);
                }
            };
            var params = {
                owner: 'facebook',
                repo: 'react'
            };
            var timespan = {
                since: 'then',
                until: 'now'
            };
            gitHub.getCommitMessages(axios, params, timespan);
        });
    });
});