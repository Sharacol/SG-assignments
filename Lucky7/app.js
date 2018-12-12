let play = ()=>{
    let startingBet = document.getElementById('Bet').value

    if(startingBet <= 0){
        return alert("Please enter a value greater than 0!")
    }

    let roll = 0
    let maxMoney = startingBet
    let rollWhenRich = 0
    let moneyNow = startingBet
    
    while(moneyNow > 0) {
        let sum = rollDice() + rollDice()
        if(sum === 7 ){
            moneyNow += 4
            console.log('yo won!')
        }else{
            moneyNow -= 1
        }
        console.log(moneyNow)
        if(moneyNow > maxMoney){
            maxMoney = moneyNow
            rollWhenRich = roll
        }
        roll++
    }

    updatePage(startingBet, roll, maxMoney, rollWhenRich)
}

let rollDice = ()=>{
    return Math.floor(Math.random()*6) +1
}

let updatePage = ( startingBet, roll, maxMoney, rollWhenRich ) =>{
    document.getElementById('playButton').innerHTML = "Play Again"
    document.getElementById('Starting').innerHTML = `${startingBet}`
    document.getElementById('Broke').innerHTML = roll
    document.getElementById('Rich').innerHTML = maxMoney
    document.getElementById('Roll Rich').innerHTML = rollWhenRich
    document.getElementById('gameTable').style.display = "inline-block"
}