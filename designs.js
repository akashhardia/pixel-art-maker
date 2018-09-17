let canvas          = document.getElementById('pixelCanvas'),
    submitButton    = document.getElementById('input_submit');

submitButton.addEventListener('click',function(evt) {
    evt.preventDefault();

    eraseCanvas();
    createCanvas();
});

function eraseCanvas(){
    while(canvas.firstChild){
        canvas.removeChild(canvas.firstElementChild);
    }
}

function createCanvas(){
    let row = document.getElementById('inputHeight').value,
        col = document.getElementById('inputWidth').value;

    for (let i = 0; i < row; i++) {
        let tr = canvas.insertRow(i);                   // inserts row

        for (let j = 0; j < col; j++) {
            let tc = tr.insertCell(j);                  // inserts cells
        }
    }
}

canvas.addEventListener('click',function(evt){                          // adding listener on parent for better performance
    if(evt.target.nodeName == 'TD'){
        let color = document.getElementById('colorPicker').value;
        evt.target.style.backgroundColor = color;
    }
});