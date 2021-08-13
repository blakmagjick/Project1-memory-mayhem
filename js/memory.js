// document.addEventListener('DOMContentLoaded', () => {


// Project 1 - Memory Mayhem

// Empty Array
    cardsPicked = []
    cardsPickedId = []
    matchedCards = []
// Card Options
const memGame = {
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
        pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/vanGoghMulberryTree-small.png'
    }
    ],
// Create the Gameboard.
    creatingBoard() {
        const gameboard = document.querySelector('.board')
        for (let i = 0; i < this.cardsList.length; i++){
            let cards = document.createElement('img')
            cards.setAttribute('src', 'Front-Back/memoryBack.png') 
            cards.setAttribute('id', i)
            cards.setAttribute('class', 'cards')
            gameboard.append(cards)  
            cards.addEventListener('click', (event) => memGame.flipTheCard(event))
            }
        },
        // Check for matches

    // negativeMatch () {
    //     const noMatch = 
    // },

    checkMatches () {
        // let cards = document.querySelectorAll('img')
        let onePicked = cardsPicked[0] 
        // console.log(onePicked)
        let twoPicked = cardsPicked[1] 
        // console.log(twoPicked)
        if (onePicked.card === twoPicked.card){
            alert('You fournd a match')
            memGame.positiveMatch()
        } else {
            alert('These do not match')
           memGame.negativeMatch()
        }

    },
        // Check for matches

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

    positiveMatch () {
        let pick1 = cardsPickedId[0]
        let pick2 = cardsPickedId[1]
        const match1 = document.getElementById(pick1)
        const match2 = document.getElementById(pick2)
        match1.setAttribute('src', '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/memoryBlank.jpg')
        match2.setAttribute('src', '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/memoryBlank.jpg')
        cardsPicked = []
        cardsPickedId = []
    },
// Flip your card
// Store the first event.target.id
// Store the second event.target.id
    flipTheCard(event) {
        let selectedCard = event.target.id
        cardsPicked.push(this.cardsList[selectedCard])
        cardsPickedId.push(selectedCard)
        event.target.src = this.cardsList[selectedCard].pic
        if (cardsPicked.length === 2){
            setTimeout(this.checkMatches, 300)
        } 
         
    }
     
    //  cardsList.sort(() => 0.5 - Math.random())
// Scoring
    }
// END OF OBJECT, don't put anything after this curly bracket

memGame.creatingBoard()

// Eventlisteners
// let pushedButton = document.getElementsByClassName('cards')
// console.log(pushedButton)
// pushedButton.addEventListener('click', () => memGame.flipTheCard())

