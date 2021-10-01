const baseValue = document.querySelector('.input-base');
const heightValue = document.querySelector('.input-height')
const areaOfTriangleBtn = document.querySelector('#areaoftriangle-btn');
const outputEl =  ('#output');

function calculateAreaOfTriangles(baseValue, heightValue){
    const areaOfTriangles = ( baseValue*heightValue) /2 ;

    return areaOfTriangles;
}

function calculateAreaTriangles(){
    const areaOfTriangles = calculateAreaOfTriangles(Number(baseValue.value), Number(heightValue.value));
    const areaValueTriangles = Math.sqrt(areaOfTriangles);
    console.log(areaValueTriangles);
    outputEl.innerText = "Area Of triangle is " + areaValueTriangles
}

areaOfTriangleBtn.addEventListener("click", calculateAreaTriangles)