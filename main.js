function clean(){
  document.form.textview.value = "";
}

function insert(num){
  document.form.textview.value = document.form.textview.value + num;
}

function equal(){
  var exp = document.form.textview.value;
  if(exp){
    document.form.textview.value = eval(exp);
  }
}

function back(){
  var exp = document.form.textview.value
  document.form.textview.value = exp.substring(0,exp.length - 1)
}

function right(){
  var exp = document.form.textview.value;
  if(exp){
    document.form.textview.value = -eval(exp);
  }
}