let pass = 0;

let deleteKey = document.querySelector('.deleteKey');
let enterKey = document.querySelector('.enterKey');

enterKey.addEventListener('click', (e)=>{
    pass = 1;
})

let row = document.getElementsByClassName('row');
let square = document.getElementsByClassName("square");

let squareTrack = 0;
let rowTrack = 0;


let keyboardKey = document.getElementsByClassName("keyboard-key");

for(let i = 0; i < keyboardKey.length; i++){
    keyboardKey[i].addEventListener('click', (e)=>{
            if(rowTrack <= 5 && rowTrack !== 6){
                if(pass === 1){
                    if(squareTrack === 5){
                    squareTrack = 0;
                    rowTrack++;
                    pass = 0
                    }
                }
                row[rowTrack].children[squareTrack].style.border = '3px solid grey';
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
            row[rowTrack].children[squareTrack-1].innerHTML = '';
            squareTrack--;
            row[rowTrack].children[squareTrack].style.border = '2px solid #CAD3D8';
            if(squareTrack === 0 && rowTrack > 0){
                rowTrack--;
                squareTrack = 5;
            }
        }
    }
})