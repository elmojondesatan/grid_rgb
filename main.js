let DOM = document.querySelector(".tablero");
for(let i= 0; i<100;i++){
    let div = document.createElement('div');
    div.classList.add(`c${i+1}`)

DOM.appendChild(div);
}