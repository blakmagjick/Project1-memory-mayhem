class MemoryGame {
    constructor(theme){
        this.theme = theme
    }
    creatingBoard() {
        const gameboard = document.querySelector('.board')
        this.theme.cards.sort(() => .5 - Math.random())
        for (let i = 0; i < this.theme.cards.length; i++){
            let squares = document.createElement('img')
            squares.setAttribute('src', this.theme.background)
            squares.setAttribute('id', i)
            squares.setAttribute('class', 'cards') 
            squares.setAttribute('disabled', 'false') 
            gameboard.append(squares)  
            squares.addEventListener('click', (event) => this.flipTheCard(event))
        }
    }   
    flipTheCard(event) {
        let selectedCard = event.target.id
        let card = this.theme.cards[selectedCard]
            if (card.disabled) {
                return
            } 
        cardsPicked.push(card)
        cardsPickedId.push(selectedCard)
            if (cardsPickedId[0] == cardsPickedId[1]){
                let message = document.querySelector('.messages')
                message.innerHTML = 'Please pick another card.'
                cardsPicked.pop()
                cardsPickedId.pop()
            }
        event.target.src = this.theme.cards[selectedCard].pic
            if (cardsPicked.length === 2){
                setTimeout(() => this.checkMatches(), 500)
            } 
    }
    negativeMatch() {
        let pick1 = cardsPickedId[0]
        let pick2 = cardsPickedId[1]
        const match = document.getElementById(pick1)
        const match1 = document.getElementById(pick2)
        match.setAttribute('src', this.theme.background)
        match1.setAttribute('src', this.theme.background)
        cardsPicked = []
        cardsPickedId = []
    }
    positiveMatch() {
        let pick1 = cardsPickedId[0]
        let pick2 = cardsPickedId[1]
        const match1 = document.getElementById(pick1)
        const match2 = document.getElementById(pick2)
        match1.setAttribute('src', 'Front-Back/memoryBlank.jpg')
        cardsPicked[0].disabled = true
        match2.setAttribute('src', 'Front-Back/memoryBlank.jpg')
        cardsPicked[1].disabled = true
        this.scoring()
        cardsPicked = []
        cardsPickedId = []
        this.win()
    }
    checkMatches() {
        let onePicked = cardsPicked[0] 
        let twoPicked = cardsPicked[1]
        let message = document.querySelector('.messages')
        if (onePicked.card === twoPicked.card){
            message.innerHTML = 'You found a match!'
            this.positiveMatch()
        } else {
            message.innerHTML = ''
            this.negativeMatch()
        }
    }
    scoring() {
        let score = document.getElementById('scoreNum')
        score.innerHTML++
    }
    win() {
        let message = document.querySelector('.messages')
        let score = document.getElementById('scoreNum').innerText
        if (score == this.theme.cards.length/2) {
                message.innerHTML = 'You won!' 
            }  
    }
}