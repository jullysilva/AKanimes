
//INICIALIZAR O FIREBASE
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


//DECLARACAO DE VARIAVEIS
var counter = -1;

//AQUI SERÁ FEITO O GET DAS INFORMAÇÕES DADA PELO USUÁRIO
document.getElementById("form").addEventListener("submit", (e) => {
    var task = document.getElementById("task").value;
    var description = document.getElementById("description").value;
    e.preventDefault();
    console.log(task + description);
    criarComentario(task, description); 
    form.reset();
});

//ASSIM QUE CHAMADA ESTA FUNÇÃO, A MESMA VAI SETAR AS INFORMAÇOES PASSADAS POR PARÂMESTRO NO DATABASE DO FIREBASE
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

  