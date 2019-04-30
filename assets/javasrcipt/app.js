var employeeInfo = [];

var config = {
    apiKey: "AIzaSyCiofi6n_Cz7LalBpaa87aEV_PTQWKtNHo",
    authDomain: "tester-camper.firebaseapp.com",
    databaseURL: "https://tester-camper.firebaseio.com",
    projectId: "tester-camper",
    storageBucket: "tester-camper.appspot.com",
    messagingSenderId: "1079949016767"
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