let amountParticipant = prompt('How many people is there')
let participants = []
for (let i=0;i<amountParticipant;i++){
  participants.push(`<li>${prompt('Tell me the name of the participant, one by one')}</li>`)
}
participants.sort()
document.querySelector('#target').innerHTML = `<ol>${participants.join('')}</ol>`;