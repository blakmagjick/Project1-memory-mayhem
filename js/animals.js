// Project 1 - Memory Mayhem

// Empty Arrays
cardsPicked = []
cardsPickedId = []
matchedCards = []

const memGame1 = {
// Card Options
cardsList: [
    {
    card: 'cardinal', 
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/cardinal.png'
    },
    {
    card: 'cardinal',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/cardinal.png'
    },
    {
    card: 'cat',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/cat.png'
    },
    {
    card: 'cat',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/cat.png'
    },
    {
    card: 'fox',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/fox.png'
    },
    {
    card: 'fox',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/fox.png'
    },
    {
    card: 'owl',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/owl.png'
    },
    {
    card: 'owl',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/owl.png'
    },
    {
    card: 'sloth',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/sloth.png'
    },
    {
    card: 'sloth',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/sloth.png'
    },
    {
    card: 'turtle',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/turtle.png'
    },
    {
    card: 'turtle',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/turtle.png',
    }
],
// Create the Gameboard.
creatingBoard() {
    const gameboard = document.querySelector('.board')
    this.cardsList.sort(() => .5 - Math.random())
    for (let i = 0; i < this.cardsList.length; i++){
        let cards = document.createElement('img')
        cards.setAttribute('src', 'Front-Back/animal background.png') 
        cards.setAttribute('id', i)
        cards.setAttribute('class', 'cards')       
        gameboard.append(cards)  
        cards.addEventListener('click', (event) => memGame1.flipTheCard(event))
        this.cardsList[i].disabled = false
    }
},
// Check for matches
checkMatches () {
    let onePicked = cardsPicked[0] 
    let twoPicked = cardsPicked[1] 
    let message = document.querySelector('.messages')
    if (onePicked.card === twoPicked.card){
        message.innerHTML = 'You found a match!'
        memGame1.positiveMatch()
    } else {
       message.innerHTML = 'Those do not match. Try again!'
       memGame1.negativeMatch()
    }

},
// Does not match
negativeMatch () {
    let pick1 = cardsPickedId[0]
    let pick2 = cardsPickedId[1]
    const match = document.getElementById(pick1)
    const match1 = document.getElementById(pick2)
    match.setAttribute('src', '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/animal background.png')
    match1.setAttribute('src', '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/animal background.png')
    cardsPicked = []
    cardsPickedId = []
},
// Does match
positiveMatch () {
    let pick1 = cardsPickedId[0]
    let pick2 = cardsPickedId[1]
    const match1 = document.getElementById(pick1)
    const match2 = document.getElementById(pick2)
    match1.setAttribute('src', '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/memoryBlank.jpg')
    cardsPicked[0].disabled = true
    match2.setAttribute('src', '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/memoryBlank.jpg')
    cardsPicked[1].disabled = true
    this.scoring()
    cardsPicked = []
    cardsPickedId = []
    this.win()
},
// Flip your card
flipTheCard(event) {
    let selectedCard = event.target.id
    let card = this.cardsList[selectedCard]
    if (card.disabled) {
        return
    } 
    cardsPicked.push(card)
    cardsPickedId.push(selectedCard)
    event.target.src = card.pic
    if (cardsPicked.length === 2){
        setTimeout(this.checkMatches, 300)
    } 
},
// Scoring
scoring () {
    let score = document.getElementById('scoreNum')
    score.innerHTML++
},
// Game is won
win () {
    let message = document.querySelector('.messages')
    let score = document.getElementById('scoreNum')
    if (score.innerHTML == 6){
        message.innerHTML = 'You won!'
    }
}
}
// END OF OBJECT, don't put anything after this curly bracket

memGame1.creatingBoard()