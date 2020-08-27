console.log("버블정렬 start");

//입력받고 분리해서 배열에 집어넣기
const inputElement = document.getElementById("inp");
inputElement.addEventListener("change", function (event) {
  console.log(event.target.value);

  var str = event.target.value;
  var splitArray = str.split(" ");
  console.log(splitArray);

  //배열에 있는 것 도형에 뿌려주기

    //   const arr=splitArray.map(val=>`<div><h1>${val}</h1></div>`);
    //   document.getElementById("display").innerHTML=arr;
    //   console.log(arr);

    for (var i in splitArray) {
        const arr = `<div class="circle"><h1>${splitArray[i]}</h1></div>`;
        document.getElementById("display").innerHTML += arr; 
        
        console.log(arr)
    }
  
});

// function display(){
//     var num = document.createElement("div")
//     num.innerHTML= arr;
//     document.body.appendChild(num)
// }