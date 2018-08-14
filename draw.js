var container = document.querySelector('.container');
/*container.style.width = "960px";
container.style.height = "960px";
container.style.float = "left";
container.style.backgroundColor = "yellow";

function makeDiv(num){
    var wid = 960/num;
    for(i=0;i<num*num;i++){
        const gridDiv = document.createElement('div');
        gridDiv.style.width = wid;
        gridDiv.style.height = wid;
        gridDiv.style.backgroundColor = 'red';
        gridDiv.style.zIndex ="10";
        gridDiv.classList.add('grid');
        container.appendChild(gridDiv);
    }
}
*/

let gridSize = 20;
function buildGrid(){
    for(i=0;i<gridSize;i++){
        const row = document.createElement('div');
        row.setAttribute('style','height: '+300/gridSize+'px; width: 300px');
        row.classList.add('row');
        container.appendChild(row);
        for(n=0;n<gridSize;n++){
            const cell = document.createElement('div');
            cell.setAttribute('style','display: table-cell; height: '+300/gridSize+'px; width: '+300/gridSize+'px;');
            cell.classList.add('cell');
            cell.addEventListener("mouseover", function(){this.style.backgroundColor='red';});
            row.appendChild(cell);
        }
    }
}
buildGrid();