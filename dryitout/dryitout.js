// Project 1 - Memory Mayhem

// Empty Arrays
cardsPicked = []
cardsPickedId = []
matchedCards = []

let animal = [
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
]
let halloween = [
    {
    card: 'cat', 
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/cat.png'
    },
    {
    card: 'cat',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/cat.png'
    },
    {
    card: 'catnghost',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/catnghost.png'
    },
    {
    card: 'catnghost',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/catnghost.png'
    },
    {
    card: 'ghost',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/ghost.png'
    },
    {
    card: 'ghost',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/ghost.png'
    },
    {
    card: 'pumpkin',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/pumpkin.png'
    },
    {
    card: 'pumpkin',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/pumpkin.png'
    },
    {
    card: 'trickotreat',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/trickotreat.png'
    },
    {
    card: 'trickotreat',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/trickotreat.png'
    },
    {
    card: 'witch',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/witch.png'
    },
    {
    card: 'witch',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/witch.png',
    }
]
let vanGogh = [
    {
    card: 'cats', 
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/cats.png'
    },
    {
    card: 'cats',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/vanGogh-images/cats.png'
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
    }
]

class MemoryGame {
    constructor(theme){
        this.theme = theme
    }
    creatingBoard() {
        const gameboard = document.querySelector('.board')
        if (this.theme == 'animals'){
            animal.sort(() => .5 - Math.random())
            for (let i = 0; i < animal.length; i++){
                let cards = document.createElement('img')
                cards.setAttribute('src', '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/animal background.png')
                cards.setAttribute('id', i)
                cards.setAttribute('class', 'cards') 
                cards.setAttribute('disabled', 'false') 
                // animal[i].disabled = false
                gameboard.append(cards)  
                cards.addEventListener('click', (event) => this.flipTheCard(event))
            }
        } if (this.theme == 'halloween') {
            halloween.sort(() => .5 - Math.random())
            for (let i = 0; i < halloween.length; i++) {
                let cards = document.createElement('img')
                cards.setAttribute('src', 'Front-Back/halloBack.png') 
                cards.setAttribute('id', i) 
                cards.setAttribute('class', 'cards')
                cards.setAttribute('disabled', 'false') 
                // halloween[i].disabled = false    
                gameboard.append(cards)  
                cards.addEventListener('click', (event) => this.flipTheCard(event))
            }    
        } if (this.theme == 'vanGogh') {
            vanGogh.sort(() => .5 - Math.random())
            for (let i = 0; i < vanGogh.length; i++){
                let cards = document.createElement('img')
                cards.setAttribute('src', 'Front-Back/memoryBack.png')
                cards.setAttribute('id', i)
                cards.setAttribute('class', 'cards')  
                cards.setAttribute('disabled', 'false')
                // vanGogh[i].disabled = false     
                gameboard.append(cards)  
                cards.addEventListener('click', (event) => this.flipTheCard(event))
            }
        }     
    }
    flipTheCard(event) {
            let selectedCard = event.target.id
            let card = this.theme[selectedCard]
            console.log(selectedCard)
            console.log(card)
            if (card.disabled) {
                return
            } 
            cardsPicked.push(card)
            cardsPickedId.push(selectedCard)
            event.target.src = animal[selectedCard].pic
            if (cardsPicked.length === 2){
                setTimeout(this.checkMatches, 300)
            } 
    }
    negativeMatch () {
        let pick1 = cardsPickedId[0]
        let pick2 = cardsPickedId[1]
        const match = document.getElementById(pick1)
        const match1 = document.getElementById(pick2)
        match.setAttribute('src', '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/halloBack.png')
        match1.setAttribute('src', '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/halloBack.png')
        cardsPicked = []
        cardsPickedId = []
    }
    positiveMatch () {
        let pick1 = cardsPickedId[0]
        console.log(pick1)
        let pick2 = cardsPickedId[1]
        console.log(pick2)
        const match1 = document.getElementById(pick1)
        console.log(match1)
        const match2 = document.getElementById(pick2)
        console.log(match2)
        match1.setAttribute('src', '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/memoryBlank.jpg')
        cardsPicked[0].disabled = true
        match2.setAttribute('src', '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/memoryBlank.jpg')
        cardsPicked[1].disabled = true
        this.scoring()
        cardsPicked = []
        cardsPickedId = []
        this.win()
    }
    checkMatches () {
        let onePicked = cardsPicked[0] 
        console.log(onePicked)
        let twoPicked = cardsPicked[1]
        console.log(twoPicked)
        let message = document.querySelector('.messages')
        console.log(message)
        if (onePicked === twoPicked){
            message.innerHTML = 'You found a match!'
            this.positiveMatch()
        } else {
            message.innerHTML = 'Those do not match. Try again!'
            this.negativeMatch()
        }
    }
    scoring () {
        let score = document.getElementById('scoreNum')
        score.innerHTML++
    }
    win () {
        let message = document.querySelector('.messages')
        let score = document.getElementById('scoreNum')
        if (score.innerHTML == 6){
            message.innerHTML = 'You won!'
        }       
    }
}

let tester = new MemoryGame('animals')
console.log(tester)

tester.creatingBoard()


// Trying to DRY out the code...