let userName = window.prompt('Please enter your name: ')
let userScore = 0;

for (let i = 0; i < questions.length; i++) {
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if(userAnswer === question.correctAnswer) {
        userScore = userScore + 10
    }
}

window.alert('Your score is: '+userScore)

let serializedGames = localStorage.getItem('games')

let games = []
if(serializedGames === null) {
    games = []
} else {
    games = JSON.parse(serializedGames)
}

let game = {
    user: userName,
    score: userScore
}

games.push(game)

console.log(games)

serializedGames = JSON.stringify(games)
localStorage.setItem('games', serializedGames)