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
    event.preventDefault();
    
    database.ref("/employee").push({
        employeeName: $("#employee-name").val(),
        role: $("role").val(),
        startYear: $("#start-year").val(),
    })

    console.log(database.ref("/employee"));
});

database.on("child_added", function(snapshot) {
    console.log("snapshot").val(employeeName);
    console.log("snapshot").val(role);
    console.log("snapshot").val(startYear);
});