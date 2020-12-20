const width = 10
const grid = document.querySelector('.grid')
//const scoreDisplay = document.getElementById('score')
let squares = []
const colorList = document.querySelector('#colorList')

// 0 - hat
// 1 - background_color
// 2 - hair
// 3 - skin
// 4 - empty
//layout 20*20
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
    '🎅', '❄️', '🎁', '🦌', '⛄', '🎄','Merry', 'Xmas'
    // '👪'
]

const xmasBlessing = [
    //'url(https://cdn.pixabay.com/photo/2020/11/23/03/55/snowflakes-5768630_1280.jpg)',
    'Merry Xmas', '', '', '', '', '', '', '','Happy', '', '', '', '', '', '', '', '','2021'
]

//how to connect createColorValue to layout
// function createColorValue(){
//     for(let i = 0; i < 3; i++){
//       let options = document.createElement('option')
//       //options.setAttribute('value',color)
//       options.setAttribute('class', i)
//       colorList.appendChild(options)
//       //console.log(options)
//       //colorBg.style.backgroundColor = options.value
//       if(options.className === '0'){
//         options.setAttribute('value','red')
//         options.textContent = 'Red'
//         //console.log(options)
//       }else if(options.className === '1'){
//         options.setAttribute('value','green')
//         options.textContent = 'Green'
//         //console.log(options)
//       }else if(options.className === '2'){
//         options.setAttribute('value','blue')
//         options.textContent = 'Blue'
//         //console.log(options.value)
//       }
//     }
//   }
  
//   createColorValue()

function createBoard() { 
    
    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div')
        square.classList.add('hide')
        grid.appendChild(square)
        squares.push(square)

        if (layout[i] === 1) {
            squares[i].classList.remove('hide')
            squares[i].classList.add('background_color')
        } else if (layout[i] === 2){
            //squares[i].style.backgroundColor = colorList.value
            squares[i].classList.add('green')
            console.log(squares[i])
        } else if (layout[i] === 3){
            squares[i].classList.remove('hide')
            squares[i].classList.add('skin')
        } else if (layout[i] === 0){
            squares[i].classList.add('hat')  
        }     
    }
}
createBoard()


function coloring(e){
    //console.log(e.target)
    if(
        e.target.classList.contains('hat') ||
        e.target.classList.contains('skin')||
        e.target.classList.contains('green')
    ){
        e.target.classList.remove('hide')
    }else if (e.target.classList.contains('background_color')){
        //console.log()
        e.target.classList.add('change_background')
        let randomEmoji = Math.floor(Math.random() * xmasEmoji.length);
        e.target.textContent = xmasEmoji[randomEmoji];
    }
}
// function merryxmas(){
//     alert('merry xmas')
// }
document.addEventListener('mouseover', coloring)
//setTimeout(merryxmas, 1000)