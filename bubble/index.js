console.log("버블정렬 start");

//입력받고 분리해서 배열에 집어넣기
const inputElement = document.getElementById("inp");
inputElement.addEventListener("change", function (event) {
  console.log(event.target.value);

  var str = event.target.value;
  var splitArray = str.split(" ");
  console.log(splitArray);

  //배열에 있는 것 도형에 뿌려주기

  //   for (var i in splitArray) {
  //     document.getElementById("display").innerHTML = splitArray[i];
  //   }
  document.getElementById("display0").innerHTML = splitArray[0];
  document.getElementById("display1").innerHTML = splitArray[1];
  document.getElementById("display2").innerHTML = splitArray[2];
});
