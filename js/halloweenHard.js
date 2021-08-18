// Project 1 - Memory Mayhem

// Empty Arrays
let cardsPicked = []
let cardsPickedId = []
let matchedCards = []

const halloweenHard = {
    background: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/halloBack.png',
    cards: [
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
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/witch.png'
    },
    {
    card: 'candycorn',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/candycorn.png',
    },
    {
    card: 'candycorn',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/candycorn.png'
    },
    {
    card: 'catmoon',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/catmoon.png',
    },
    {
    card: 'catmoon',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/catmoon.png'
    },
    {
    card: 'creepycute',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/creepycute.png',
    },
    {
    card: 'creepycute',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/creepycute.png'
    },
    {
    card: 'halloweenghost',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/halloweenghost.png',
    },
    {
    card: 'halloweenghost',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/halloweenghost.png'
    },
    {
    card: 'halloweenkitty',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/halloweenkitty.png',
    },
    {
    card: 'halloweenkitty',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/halloweenkitty.png'
    },
    {
    card: 'happyghost',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/happyghost.png',
    },
    {
    card: 'happyghost',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/happyghost.png'
    },
    {
    card: 'hauntedhouse',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/hauntedhouse.png',
    },
    {
    card: 'hauntedhouse',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/hauntedhouse.png'
    },
    {
    card: 'kittypumpkin',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/kittypumpkin.png',
    },
    {
    card: 'kittypumpkinh',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/kittypumpkin.png'
    },
    {
    card: 'skellypumpkin',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/skellypumpkin.png',
    },
    {
    card: 'skellypumpkin',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/skellypumpkin.png'
    }
    ]
}

let game = new MemoryGame(halloweenHard)
game.creatingBoard()