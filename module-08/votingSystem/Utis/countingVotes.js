const candidate = require("./candidate");

function countingVotes() {
    console.log('   Counting Votes  ');

    for (let i = 0; i < candidate.length; i++) {
        console.log(`${candidate[i].number}. ${candidate[i].name} - Votes received: ${candidate[i].votes}`);
    }

    let mostVoted = candidate[0];

    for (let j = 1; j < candidate.length; j++) {
        if (candidate[j].votes > mostVoted.votes) {
            mostVoted = candidate[j];
        }
    }

    console.log(`\nThe winner was: ${mostVoted.name} from the party: ${mostVoted.party} (${mostVoted.acronym}), with a total of: ${mostVoted.votes} votes.`);
}

module.exports = countingVotes;