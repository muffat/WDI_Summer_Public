function handleStudents(){
  var i = 0;  // scope: local variable, type: number
  var students = ['Jim', 'Bob', 'Tracy', 'Justin', 'Emily'];  // s: local, t: array
  return function(){  // from SO: the inner function has access to the
    // environment it was created within
    // even after the code that created the environment has returned.
    var student =  students[i]; // s: local to handleStudents, t: string
    i+=1;
    return student;// What type is this returning? string
  };
}

// What type of variable is nextStudent?
// t: closure (the inner function of handleStudents)
var nextStudent = handleStudents();
var nextStudent1 = handleStudents();

// onload
window.onload = function(){
  // Adding an event handler to our addStudent button
  document.getElementById("addStudent").onclick = function(){
    document.getElementById('students').innerHTML += nextStudent() + '<br/>\n';
  };

  document.getElementById("clearStudents").onclick = function(){
    document.getElementById('students').innerHTML = '';
  };

  document.getElementById("resetClosure").onclick = function(){
    nextStudent = handleStudents();
  };

  document.getElementById("newButton").onclick = function(){
    document.getElementById('students').innerHTML += nextStudent1() + " (from newStudent1)" + '<br/>\n';
  };
};
