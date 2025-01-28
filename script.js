let word = ['A','P','P','L','E'];



let pass = 0;

let deleteKey = document.querySelector('.deleteKey');
let enterKey = document.querySelector('.enterKey');

let row = document.getElementsByClassName('row');
let square = document.getElementsByClassName("square");

let squareTrack = 0;
let rowTrack = 0;




enterKey.addEventListener('click', (e)=>{
    if(squareTrack === 5){
        pass = 1;
        for(let v=0; v<5; v++){
            //console.log(row[rowTrack].children[v].textContent)
            if(row[rowTrack].children[v].textContent === word[v]){
                row[rowTrack].children[v].classList.add("green");
                row[rowTrack].children[v].removeAttribute('style');
            }else if(word.includes(row[rowTrack].children[v].textContent)){
                row[rowTrack].children[v].classList.add("yellow")
                row[rowTrack].children[v].removeAttribute('style');
            }else{
                row[rowTrack].children[v].classList.add("grey")
                row[rowTrack].children[v].removeAttribute('style');
            }
        }
    }
})



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