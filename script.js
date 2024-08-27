const gridContainer= document.querySelector('.container');
for(let i=1;i<=16;i++){
    const outer=document.createElement('div');
    gridContainer.append(outer);
    outer.className='outer';
    for(let j=1;j<=16;j++){
    const inner=document.createElement('div');
    inner.className='inner';
    outer.append(inner);
    
}

}
mouseOverEvent('black');
function mouseOverEvent(color){
    const inner=document.querySelectorAll('.inner');
    inner.forEach(grid=>{grid.addEventListener('mouseover',()=>{
        grid.style.backgroundColor=color;
    })
    
    });
    
};

const rgb=document.querySelector('.rgb');
const red =document.createElement('button');
const green =document.createElement('button');
const blue =document.createElement('button');
rgb.append(red);
rgb.append(blue);
rgb.append(green);
red.textContent="RED";
blue.textContent="BLUE";
green.textContent="GREEN";
const color='';

red.addEventListener('click',()=>{
    mouseOverEvent('red');
})
blue.addEventListener('click',()=>{
    mouseOverEvent('blue');

})
green.addEventListener('click',()=>{
    mouseOverEvent('green');

})



const button= document.querySelector('button');
let defaultNumber=16;
button.addEventListener('click',()=>{
    let answer=prompt("How many grids you need? ");
    if(answer>100|| answer===''||!isNaN(answer)){
        answer=prompt("Entry is Invalid. Enter below or equal 100");
    }
    defaultNumber=answer;
    gridContainer.innerHTML='';
    createGrid(defaultNumber);
    
});

function createGrid(num){
    for(let i=1;i<=num;i++){
        const outer=document.createElement('div');
        gridContainer.append(outer);
        outer.className='outer';
        
        for(let j=1;j<=num;j++){
        const inner=document.createElement('div');
        inner.className='inner';
        outer.append(inner);
        
    }
    mouseOverEvent();
    
    }

}


