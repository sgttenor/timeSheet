var employeeInfo = [];

var config = {
    apiKey: "AIzaSyAra_wEx8KyrA_585qRQQyszXEBUlq9XKU",
    authDomain: "tenorwolf-bee4e.firebaseapp.com",
    databaseURL: "https://tenorwolf-bee4e.firebaseio.com",
    projectId: "tenorwolf-bee4e",
    storageBucket: "tenorwolf-bee4e.appspot.com",
    messagingSenderId: "379852997836"
  };
  firebase.initializeApp(config);

  

var database = firebase.database();

$("#submit").on("click", function(event) {
    var startYear = $("#start-year").val();
    var employeeName = $("#employee-name".val());
    var role = $("role").val();
    
    database.ref("/employee").push(startYear);
    database.ref("/employee").push(employeeName);
    database.ref("/employee").push(role);

    console.log(database.ref("/employee"));
});

// database.on("child_added", function(snapshot) {
//     if ()

// });