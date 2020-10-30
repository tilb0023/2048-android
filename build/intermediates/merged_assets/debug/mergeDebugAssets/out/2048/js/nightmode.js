window.onload = function() {
  var a = document.getElementById("night");
  var night = 0;
  a.onclick = function() {
   	switch (night) {
   	case 0:
   		document.getElementsByTagName("html")[0].style.backgroundColor = "#ffffff";
   		document.getElementsByTagName("body")[0].style.backgroundColor = "#ffffff";
   		night++
   		break;

    case 1:
   		document.getElementsByTagName("html")[0].style.backgroundColor = "#333333";
   		document.getElementsByTagName("body")[0].style.backgroundColor = "#333333";
   		night++
   		break;

   	case 2:
       		document.getElementsByTagName("html")[0].style.backgroundColor = "#FFFDB3";
       		document.getElementsByTagName("body")[0].style.backgroundColor = "#FFFDB3";
       	night++
        break;
    case 3:
       		document.getElementsByTagName("html")[0].style.backgroundColor = "#FFDAB3";
       		document.getElementsByTagName("body")[0].style.backgroundColor = "#FFDAB3";
       	night++
        break;

   case 4:
       		document.getElementsByTagName("html")[0].style.backgroundColor = "#E89393";
       		document.getElementsByTagName("body")[0].style.backgroundColor = "#E89393";
       	night++;
        break;
    case 5:
   		document.getElementsByTagName("html")[0].style.backgroundColor = "#776e65";
   		document.getElementsByTagName("body")[0].style.backgroundColor = "#faf8ef";
   		night = 0;
   		break;
    }
  }
}
