// Project 1 - Memory Mayhem

// Empty Arrays
cardsPicked = []
cardsPickedId = []
matchedCards = []

const memGame4 = {
// Card Options
cardsList: [
    {
    card: 'wildman', 
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/vanGoghWildMan-small.png'
    },
    {
    card: 'wildman',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/vanGoghWildMan-small.png'
    },
    {
    card: 'starryNight',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/vanGoghStarryNight-small.png'
    },
    {
    card: 'starryNight',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/vanGoghStarryNight-small.png'
    },
    {
    card: 'skeleton',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/vanGoghSkeleton-small.png'
    },
    {
    card: 'skeleton',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/vanGoghSkeleton-small.png'
    },
    {
    card: 'flowers',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/vanGoghBeautyEverywhere-small.png'
    },
    {
    card: 'flowers',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/vanGoghBeautyEverywhere-small.png'
    },
    {
    card: 'headshot',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/vanGoghHeadShot-small.png'
    },
    {
    card: 'headshot',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/vanGoghHeadShot-small.png'
    },
    {
    card: 'mullberrytree',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/vanGoghMulberryTree-small.png'
    },
    {
    card: 'mullberrytree',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/vanGoghMulberryTree-small.png',
    },
    {
    card: 'cherryblossoms',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/cherryblossoms.png',
    },
    {
    card: 'cherryblossoms',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/cherryblossoms.png',
    },
    {
    card: 'harbour',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/harbour.png',
    },
    {
    card: 'harbour',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/harbour.png',
    },
    {
    card: 'pinkflowers',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/pink flowers.png',
    },
    {
    card: 'pinkflowers',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/pink flowers.png',
    },
    {
    card: 'room',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/room.png',
    },
    {
    card: 'room',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/room.png',
    },
    {
    card: 'sunflowers',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/sunflowers.png',
    },
    {
    card: 'sunflowers',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/sunflowers.png',
    },
    {
    card: 'tableflowers',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/tableflowers.png',
    },
    {
    card: 'tableflowers',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/tableflowers.png',
    },
    {
    card: 'thefields',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/thefields.png',
    },
    {
    card: 'thefields',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/thefields.png',
    },
    {
    card: 'trees',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/trees.png',
    },
    {
    card: 'trees',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/trees.png',
    },
    {
    card: 'bandageear',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/bandageear.png',
    },
    {
    card: 'bandageear',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/bandageear.png',
    }
],
// Create the Gameboard.
creatingBoardHard() {
    const gameboard = document.querySelector('.board')
    this.cardsList.sort(() => .5 - Math.random())
    for (let i = 0; i < this.cardsList.length; i++){
        let cards = document.createElement('img')
        cards.setAttribute('src', 'Front-Back/memoryBack.png') 
        cards.setAttribute('id', i)
        cards.setAttribute('class', 'cards')       
        gameboard.append(cards)  
        cards.addEventListener('click', (event) => memGame4.flipTheCard(event))
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
        memGame4.positiveMatch()
    } else {
       message.innerHTML = 'Those do not match. Try again!'
       memGame4.negativeMatch()
    }
},
// Does not match
negativeMatch () {
    let pick1 = cardsPickedId[0]
    let pick2 = cardsPickedId[1]
    const match = document.getElementById(pick1)
    const match1 = document.getElementById(pick2)
    match.setAttribute('src', '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/memoryBack.png')
    match1.setAttribute('src', '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/memoryBack.png')
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
    if (score.innerHTML == 15){
        message.innerHTML = 'You won!'
    }
}
}
// END OF OBJECT, don't put anything after this curly bracket

memGame4.creatingBoardHard()