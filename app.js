let randomText = [
    {
        q:"I am yellow and long?",
        ans:"banana"
    },
    {
        q:"I am orange and big round?",
        ans:"orange"
    },
    {
        q:"I am juicy and red?",
        ans:"apple"
    },
    {
        q:"I am your name?",
        ans:"sagar"
    },
    {
        q:"I am BITW?",
        ans:"cmpunk"
    }
]

const Hangman = function(word, noOfGuess, question){
    this.word = word.toLowerCase().split('')
    this.noOfGuess = noOfGuess
    this.guessedKeyInput = []
    this.status = 'playing'
    this.randomQues = question
}

const index = Math.floor(Math.random()*5)
let obj1 = new Hangman(randomText[index].ans, 5, randomText[index].q)
Hangman.prototype.getPuzzle = function(){
    let updatedStr = ''
    this.word.forEach((x)=>{
        if(this.guessedKeyInput.includes(x)){
            updatedStr += x
        }
        else{
            updatedStr += '*'
        }
    })
    return updatedStr
}

document.querySelector('#str').textContent = obj1.getPuzzle()
document.querySelector('#guessLeft').innerHTML = 'guess left : ' + '<span class="badge badge-danger ml-2">' + obj1.noOfGuess + '</span>'
document.querySelector('#ques').textContent = obj1.randomQues

window.addEventListener('keypress', (e)=>{
    obj1.makeGuess(e.key)
    let status = obj1.recalStatus()
    console.log(status)
    if(status === 'failed'){
        console.log('LoL')
        location.assign(`failed.html#${obj1.word.join('')}`)  //arr of char to str using join
    }
    else if(status === 'finished'){
        console.log('you win!!!')
        location.assign('win.html')
    }
    document.querySelector('#str').textContent = obj1.getPuzzle()
    document.querySelector('#guessLeft').innerHTML = 'guess left : ' + '<span class="badge badge-danger ml-2">' + obj1.noOfGuess + '</span>'
})