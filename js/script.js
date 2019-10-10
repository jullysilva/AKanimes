var firebaseConfig = {
    apiKey: "AIzaSyDISVs3Gb5Vfk4sV7AVAhkxXhd_XHZk4p0",
    authDomain: "akanimes-c1cba.firebaseapp.com",
    databaseURL: "https://akanimes-c1cba.firebaseio.com",
    projectId: "akanimes-c1cba",
    storageBucket: "",
    messagingSenderId: "1020188618360"   
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



var d = new Date();
var t = d.getTime();
var counter = 0;

document.getElementById("form").addEventListener("submit", (e) => {
    var task = document.getElementById("task").value;
    var description = document.getElementById("description").value;
    e.preventDefault();
    console.log(task + description);
    criarComentario(task, description); 
    form.reset();
});

function criarComentario(taskName, Description) {
    counter+=1;
    firebase.database().ref('Comentarios/' + counter).set({
      task: taskName,
      description: Description,
      id: counter
    },
    function(error) {
        if (error) {
            console.log("Não foi salvo no Firebase!");
        } else {
          console.log("Foi salvo com sucesso!");
        }
      });
  }