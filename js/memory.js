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
    checkMatches () {
        let cards = document.querySelectorAll('img')
        let onePicked = this.cardsPickedId[0] 
        let twoPicked = this.cardsPickedId[1] 
        if (onePicked === twoPicked){
            alert('You fournd a match')
            cards[onePicked].setAttribute('src', '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/memoryBlank.png' )
            cards[twoPicked].setAttribute('src', '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/memoryBlank.png' )
        } else {
            alert('These do not match')
            cards[onePicked].setAttribute('src', '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/memoryBack.png' )
            cards[twoPicked].setAttribute('src', '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/memoryBack.png')
        }
        this.cardsPicked = []
        this.cardsPickedId = []
        console.log('Just Checking')

    },
// Flip your card
// Store the first event.target.id
// Store the second event.target.id
    flipTheCard(event) {
        let selectedCard = event.target.id
        cardsPicked.push(this.cardsList[selectedCard].card)
        console.log(cardsPicked)
        cardsPickedId.push(selectedCard)
        console.log(cardsPickedId)
        
        event.target.src = this.cardsList[selectedCard].pic

        if (cardsPicked.length === 2){
            setTimeout(this.checkMatches, 300)
        } 
        //   console.log(event.target.id)  
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

