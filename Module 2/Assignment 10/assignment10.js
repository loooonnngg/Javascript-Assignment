let numCandidate = parseInt(prompt('How many candidate is there'));
let candidateList = [];
for (let i = 1; i <= numCandidate; i++) {
  let candidateName = prompt(`Name for candidate ${i}`);
  candidateList.push({name: candidateName, votes: 0});
}

let numVoter=parseInt(prompt('How many voter is there'))
for (let i=0;i<numVoter;i++){
  let voteCandidate = prompt('Who do you vote for')
  for (let j=0;j<numCandidate;j++){
    if (voteCandidate===candidateList[j].name){
      candidateList[j].votes+=1;
    }
  }
}
candidateList.sort((a, b) => b.votes - a.votes)
let finalOutput = `The winner is ${candidateList[0].name} with ${candidateList[0].votes} votes.<br>
results:<br>`
for (let i=0;i<numCandidate;i++){
  finalOutput+=(`${candidateList[i].name}: ${candidateList[i].votes} votes<br>`)
}
document.querySelector('#target').innerHTML = finalOutput;