name_student_array=[];
var display_student_array=[];
function getpara1(){
  for(var j=1;j<=4;j++) {
     name_student_array.push(document.getElementById("name_of_student_"+j).value);
  }
 name_student_array.join(". ");
document.getElementById("display_name_with_commas").innerHTML=name_student_array;
}

function getpara2(){
  for(var j=1;j<=4;j++) {
     name_student_array.push(document.getElementById("name_of_student_1_"+j).value);
  }
 name_student_array.join(". ");
document.getElementById("display_name_without_commas").innerHTML=name_student_array;
}