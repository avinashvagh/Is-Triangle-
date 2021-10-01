const bases = document.querySelectorAll('.input-base');
const areaOfTriangleBtn = document.querySelector('#areaoftriangle-btn');
const outputEl = document.querySelector('#output');

function calculateMultiplyOfSides(base, height){
    const multiplyOfSides = base*height/2;
    // console.log(multiplyOfSides);
    return multiplyOfSides;
}

function calculateAreaOfTriangles(){
    const multiplyOfSides = calculateMultiplyOfSides(Number(bases[0].value), Number(bases[1].value));
    // const areaOfTriangles = Math.sqrt(multiplyOfSides);
    // console.log(areaOfTriangles);
    outputEl.innerText ="The Area of Triangle is" + multiplyOfSides
}

areaOfTriangleBtn.addEventListener("click", calculateAreaOfTriangles);

