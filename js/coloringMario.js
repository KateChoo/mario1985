const width = 10
const xmas2020k = document.querySelector('.xmas2020k')
let squares = []

// 0 - blue
// 1 - background_color
// 2 - gold
// 3 - skin
// 4 - empty

const layout = [
1, 1, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1,  
1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 1, 
1, 1, 4, 4, 4, 2, 2, 2, 2, 3, 3, 2, 3, 4, 4, 4, 4, 4, 1, 1,  
1, 1, 4, 4, 2, 2, 3, 2, 3, 3, 3, 2, 3, 3, 3, 4, 4, 4, 1, 1,  
1, 1, 4, 4, 2, 2, 3, 2, 2, 3, 3, 3, 2, 3, 3, 3, 4, 4, 1, 1,  
1, 1, 4, 4, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 4, 4, 4, 1, 1,  
1, 1, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 1, 1,  
1, 1, 4, 4, 4, 2, 2, 2, 0, 2, 2, 2, 4, 4, 4, 4, 4, 4, 1, 1,  
1, 1, 4, 4, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 4, 4, 4, 1, 1, 
1, 1, 4, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 1, 1,  
1, 1, 4, 3, 3, 3, 2, 0, 3, 0, 0, 3, 0, 2, 3, 3, 4, 4, 1, 1,  
1, 1, 4, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 4, 4, 1, 1,  
1, 1, 4, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 4, 4, 1, 1,  
1, 1, 4, 4, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 4, 4, 4, 1, 1,  
1, 1, 4, 4, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 4, 4, 4, 1, 1,
1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1,   
1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1,  
1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1,  
1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1,  
1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1  
]

const xmasEmoji = [
    '🎅', '❄️', '🎁', '🦌', '⛄', '🎄', 'Merry', 'Xmas'
    // '👪',
]

// const xmasBlessing = [
//     //'url(https://cdn.pixabay.com/photo/2020/11/23/03/55/snowflakes-5768630_1280.jpg)',
//     'Merry Xmas', '', '', '', '', '', '', '','Happy', '', '', '', '', '', '', '', '','2021'
// ]

function createBoard() {
    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div')
        xmas2020k.appendChild(square)
        squares.push(square)

        if (layout[i] === 1) {
            squares[i].classList.add('background_color')
        } else if (layout[i] === 2){
            squares[i].classList.add('gold')
        } else if (layout[i] === 3){
            squares[i].classList.add('skin')
        } else if (layout[i] === 0){
            squares[i].classList.add('blue')
        }     
    }
}
createBoard()

function marioColorChange(e){
    //console.log(e.target)
    if(e.target.className === 'blue'){
        e.target.classList.remove('blue')
        e.target.classList.add('red')

        //let randomEmoji = Math.floor(Math.random() * xmasEmoji.length);
        //e.target.textContent = xmasEmoji[randomEmoji];
    } else if (e.target.className === 'background_color'){
        //let randomBlessing = Math.floor(Math.random() * xmasBlessing.length);
        //e.target.textContent = xmasBlessing[randomBlessing];
        e.target.classList.remove('background_color')
        e.target.classList.add('change_background')
        let randomEmoji = Math.floor(Math.random() * xmasEmoji.length);
        e.target.textContent = xmasEmoji[randomEmoji];        
    } else if (e.target.className === 'gold'){
        e.target.classList.remove('gold')
        e.target.classList.add('green')
    } 
    // else if (e.target.className === 'skin'){
    //     e.target.classList.remove('skin')
    //     e.target.classList.add('white')
    // }
}

document.addEventListener('mouseover', marioColorChange)


