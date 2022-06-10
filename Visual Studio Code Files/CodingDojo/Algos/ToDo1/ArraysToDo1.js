newArr= [];

function addTo(){
    newArr.push(document.getElementById("userInput").value);
    document.getElementById("userArr").innerText=newArr;
}

function pushToFront(){
    newArr.unshift(document.getElementById("userInput").value);
    document.getElementById("userArr").innerText=newArr;
}

function popFront(){
    let firstValue = newArr[0]
    for(let i=0; i<newArr.length; i++){
        newArr[i] = newArr[i+1];
    }
    newArr.length = newArr.length-1;

    document.getElementById("userArr").innerText=newArr
}

function choose(){
    newArr.splice(document.getElementById("userInputIndex").value, 0, document.getElementById("userInput").value)
    document.getElementById("userArr").innerText=newArr;
}