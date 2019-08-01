Hangman.prototype.makeGuess = function(x){
    if(!this.guessedKeyInput.includes(x)){  //insert into guessed arr only unique chars
        this.guessedKeyInput.push(x)
    }

    if(!this.word.includes(x)){ //wrong guess then decrement noOfGuess
        this.noOfGuess--
    }
}

Hangman.prototype.recalStatus = function(){
    let flag = false
    let k = 'playing'
    let currPuzzle = this.getPuzzle()
    if(currPuzzle.includes('*')){
        flag = true
    }
    if(this.noOfGuess<1 && flag == true){
        k = 'failed'
    }
    else if(this.noOfGuess>-1 && flag == false){
        k = 'finished'
    }
    return k
}