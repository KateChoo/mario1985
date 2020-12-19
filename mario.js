const width = 10
const grid = document.querySelector('.grid')
let squares = []

// 0 - red
// 1 - background_color
// 2 - gold
// 3 - skin
// 4 - empty

const layout = [
1, 1, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4,  
1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 
1, 1, 4, 4, 4, 2, 2, 2, 2, 3, 3, 2, 3, 4, 4, 4, 4, 4, 4, 4,  
1, 1, 4, 4, 2, 2, 3, 2, 3, 3, 3, 2, 3, 3, 3, 4, 4, 4, 4, 4,  
1, 1, 4, 4, 2, 2, 3, 2, 2, 3, 3, 3, 2, 3, 3, 3, 4, 4, 4, 4,  
1, 1, 4, 4, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 4, 4, 4, 4, 4,  
1, 1, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4,  
1, 1, 4, 4, 4, 2, 2, 2, 0, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4,  
1, 1, 4, 4, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 4, 4, 4, 4, 4, 
1, 1, 4, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4,  
1, 1, 4, 3, 3, 3, 2, 0, 3, 0, 0, 3, 0, 2, 3, 3, 4, 4, 4, 4,  
1, 1, 4, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 4, 4, 4, 4,  
1, 1, 4, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 4, 4, 4, 4,  
1, 1, 4, 4, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4,  
1, 1, 4, 4, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 4, 4, 4, 4, 4,
1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,   
1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,  
1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,  
1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,  
1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4  
]

const xmasEmoji = [
    '🎅', '❄️', '🎁', '🦌', '⛄', '👪', '🎄',
]

const xmasBlessing = [
    //'url(https://cdn.pixabay.com/photo/2020/11/23/03/55/snowflakes-5768630_1280.jpg)',
    'Merry Xmas', '', '', '', '', '', '', '','Happy', '', '', '', '', '', '', '', '','2021'
]

//create board
function createBoard() {
    //for loop 
    for (let i = 0; i < layout.length; i++) {
        //create a square 
        const square = document.createElement('div')
        //put square in grid 
        grid.appendChild(square)
        //put square in sqaures array
        squares.push(square)

        if (layout[i] === 1) {
            squares[i].classList.add('background_color')
        } else if (layout[i] === 2){
            squares[i].classList.add('gold')
        } else if (layout[i] === 3){
            squares[i].classList.add('skin')
        } else if (layout[i] === 0){
            squares[i].classList.add('red')
        }     
    }
}
createBoard()

function marioColorChange(e){
    //console.log(e.target)
    if(e.target.className === 'red'){
        e.target.classList.remove('red')
        e.target.classList.add('blue')

        //let randomEmoji = Math.floor(Math.random() * xmasEmoji.length);
        //e.target.textContent = xmasEmoji[randomEmoji];
    } else if (e.target.className === 'background_color'){
        //let randomBlessing = Math.floor(Math.random() * xmasBlessing.length);
        //e.target.textContent = xmasBlessing[randomBlessing];
        e.target.classList.remove('background_color')
        e.target.classList.add('change_background')
        let randomEmoji = Math.floor(Math.random() * xmasEmoji.length);
        e.target.textContent = xmasEmoji[randomEmoji];
        // for (let i = 0; i < xmasBlessing.length; ++i){
        //     console.log(i)
        //     e.target.style.backgroundImage = xmasBlessing[i];
            
        // }
        // xmasBlessing.forEach(index =>
        //     e.target.textContent = xmasBlessing[index] 
        //     //console.log(e.target.textContent = xmasBlessing[index])
        // )
        
    }
}

document.addEventListener('mouseover', marioColorChange)



//interesting coloring
// function marioColorChange(e){
//     console.log(e.target)
//     if(e.target.className === 'red'){
//         e.target.classList.remove('red')
//         e.target.classList.add('blue')
//     }else{
//         e.target.classList.add('red')
//         e.target.classList.remove('blue')
//     }
// }