document.getElementById("after-submit").hidden = true;
document.getElementById("correct-answer").hidden = true;
function check(){
  // document.write("keep it up !");
  // document.getElementById("after-submit").index_css.visibility = hidden;
  var count = 0;
  var q1 = document.quiz.ques1.value;
  var q2 = document.quiz.ques2.value;
  var q3 = document.quiz.ques3.value;
  var q4 = document.quiz.ques4.value;
  var q5 = document.quiz.ques5.value;

  if(q1 == "_"){
    count++;
  }
  if(q2 == "3"){
    count++;
  }
  if(q3 == "Only same data type"){
    count++;
  }
  if(q4 == "Compile time error"){
    count++;
  }
  if(q5 == "Right to Left"){
    count++;
  }
  // alert(count);
  // document.write(count);
  //document.getElementsByClassName("color").style.color = "#ade498";
document.getElementById("number-correct").innerHTML = "your score = "+count;
  document.getElementById("after-submit").hidden = false;
  document.getElementById("correct-answer").hidden = false;

}


function again(){

}
