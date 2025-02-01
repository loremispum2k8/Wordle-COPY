let showWordContainer = document.querySelector('.showWordContainer');
let showWordCard = document.querySelector('.showWordCard');
let exit = document.querySelector('.exit-icon');
let actualWord = document.querySelector('.actualWord')

let deleteKey = document.querySelector('.deleteKey');
let enterKey = document.querySelector('.enterKey');

let row = document.getElementsByClassName('row');
let square = document.getElementsByClassName("square");

console.log(square)

let squareTrack = 0;
let rowTrack = 0;

let result = document.querySelector('.result');
let keyboard = document.querySelector('.keyboard');


function resetFunction(){
    squareTrack = 0;
    rowTrack = 0;
    result.textContent = '';
    result.style.backgroundColor='transparent';
    result.style.border = '1px solid transparent'
    for(let r=0; r<square.length;r++){
        square[r].textContent = '';
        square[r].className = 'square'
    }
    for(let i = 0; i < keyboardKey.length; i++){
        keyboardKey[i].className='keyboard-key';
        keyboardKey[i].removeAttribute('style')
    }
    keyboard.children[1].children[0].classList.add('longer-key');
    keyboard.children[1].children[8].classList.add('longer-key')
    random = Math.round(Math.random()*words.length);
    normalWords = words[random].split('');
    word = normalWords.map(letter => letter.toUpperCase());
    console.log(word);

    showWordContainer.removeAttribute('style');
    showWordContainer.classList.add('animationContainer');
    showWordCard.classList.add('animationCard');
    exit.classList.add('animationExit');
}

const words = [
    "apple", "baker", "chime", "dingo", "entry", "fence", "grape", "honey", "index", "jolly",
    "kiosk", "lemon", "mocha", "noble", "opera", "plaza", "quilt", "roast", "sunny", "trapd", "vapor", "waltz", "xenon", "zebra", "bison", "viper", "tiger", "gains",
    "click", "valve", "wafer", "hatch", "lotus", "lunar", "serum", "flame", "haste", "chase", "risky", "scout", "flint", "fever", "piano", "sharp", "haste", "craft", "brisk", "blaze",
    "adore", "beach", "candy", "doubt", "flint", "grind", "hatch", "imply", "jumpy", "latch", "moose", "needy", "ogled", "plume", "quash", "roast", "sweep", "tramp",
    "usher", "vivid", "waste", "youth", "zesty", "vexed", "wiper", "cater", "dance", "elite", "fiery", "gloat", "haloe", "irate", "jiffy", "knack", "loopa", "mirth", "nasty", "opted",
    "puree", "quizy", "resty", "scorn", "tweak", "unite", "vigor", "wafer", "xooms", "vasea"
  ];
  
random = Math.round(Math.random()*words.length);
let normalWords = words[random].split('');
let word = normalWords.map(letter => letter.toUpperCase());

actualWord.textContent = word.join('')

//let pass = 0;

console.log(word)

enterKey.addEventListener('click', (e)=>{
    if(squareTrack === 5){
        //pass = 1;
        //pass = 0
        for(let v=0; v<5; v++){
            //console.log(row[rowTrack].children[v].textContent)
            if(row[rowTrack].children[v].textContent === word[v]){
                row[rowTrack].children[v].classList.add("green");
                row[rowTrack].children[v].removeAttribute('style');
                for(let i = 0; i < keyboardKey.length; i++){
                    if (keyboardKey[i].textContent === word[v]){
                        keyboardKey[i].style.backgroundColor = '#6FD61B';
                        keyboardKey[i].style.border = '2px solid rgb(111, 214, 27)';
                        keyboardKey[i].style.color = 'white';
                    }
                }

            }else if(word.includes(row[rowTrack].children[v].textContent)){
                row[rowTrack].children[v].classList.add("yellow")
                row[rowTrack].children[v].removeAttribute('style');
                for(let i = 0; i < keyboardKey.length; i++){
                    if (keyboardKey[i].textContent === row[rowTrack].children[v].textContent){
                        let bg = window.getComputedStyle(keyboardKey[i]);
                        console.log(bg.backgroundColor )
                        if(bg.backgroundColor !== 'rgb(111, 214, 27)'){
                            keyboardKey[i].style.backgroundColor = '#ECD81E';
                            keyboardKey[i].style.border = '2px solid #ECD81E';
                            keyboardKey[i].style.color = 'white';
                        }
                    }
                }
            }else{
                row[rowTrack].children[v].classList.add("grey")
                row[rowTrack].children[v].removeAttribute('style');
                for(let i = 0; i < keyboardKey.length; i++){
                    if ((keyboardKey[i].textContent === row[rowTrack].children[v].textContent) && (keyboardKey[i].textContent !== word[v])){
                        keyboardKey[i].style.backgroundColor = '#747C81';
                        keyboardKey[i].style.border = '2px solid #747C81';
                        keyboardKey[i].style.color = 'white';
                    }
                }
            }
        }

        let newArr = [];
        for(let j=0; j<5;j++){
            if(row[rowTrack].children[j].classList.contains('green')){
                newArr.push(word[j])
            }
        }

        squareTrack = 0;
        rowTrack++;
        if((rowTrack === 6) && (newArr.join('') !== word.join(''))){
            result.textContent = 'You Lost'
            result.style.backgroundColor = ' #d61b1b';
            result.style.border = '1px solid #d61b1b';
            result.style.display = 'flex';
            let timeout = setTimeout(resetFunction,4000);
        }

        if(newArr.join('') === word.join('')){
            result.textContent='You Won';
            result.style.backgroundColor = '#6FD61B';
            result.style.border = '1px solid #6FD61B';
            result.style.display = 'flex';
            let timeout = setTimeout(resetFunction,4000);
        }
    }
})



let keyboardKey = document.getElementsByClassName("keyboard-key");

for(let i = 0; i < keyboardKey.length; i++){
    keyboardKey[i].addEventListener('click', (e)=>{
            if(rowTrack <= 5 && rowTrack !== 6){
                row[rowTrack].children[squareTrack].style.border = '3px solid grey';
                row[rowTrack].children[squareTrack].classList.add('bubbly')
                row[rowTrack].children[squareTrack].textContent = e.target.textContent
                squareTrack++;
                console.log(squareTrack)
            }
    })
}

deleteKey.addEventListener('click',(e)=>{
    if(rowTrack >= 0){
        if(rowTrack === 0 && squareTrack === 0){
            console.log("Can't remove");
            console.log(rowTrack);
            console.log(squareTrack)
        } else {
            if(squareTrack===0){
                console.log("Can't remove")
            } else {
                row[rowTrack].children[squareTrack-1].innerHTML = '';
                squareTrack--;
                row[rowTrack].children[squareTrack].style.border = '2px solid #CAD3D8';
                row[rowTrack].children[squareTrack].classList.remove('bubbly');
            }
        }
    }
})

exit.addEventListener('click',()=>{
    showWordContainer.style.display = 'none'
    actualWord.textContent = word.join('');
    showWordContainer.classList.remove('animationContainer');
    showWordCard.classList.remove('animationCard');
    exit.classList.remove('animationExit');
})