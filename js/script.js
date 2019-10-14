
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
  counter += 1;
  if (taskName != "" || Description != "") {
    firebase.database().ref('Comentarios/' + counter).set({
      task: taskName,
      description: Description,
      id: counter
    },
      function (error) {
        if (error) {
          console.log("Não foi salvo no Firebase!");
        } else {
          console.log("Foi salvo com sucesso!");
        }
      });
    document.getElementById('posts').innerHTML = ' ';
    readComent();
  }
}

function readComent() {
  var task = firebase.database().ref("Comentarios/");
  task.on("child_added", function (data) {
    var taskValue = data.val();
    console.log(taskValue);
    document.getElementById('posts').innerHTML += `
        <div class="card-body">
          <div class="media">
              <img class="align-self-start mr-3 img-p" src="img/user.png" alt="Generic placeholder image">
              <div class="media-body">
                  <h5 class="mt-0" style="color: black;" id="name">${taskValue.task}</h5>
                  <p id="texto" style="color: black">${taskValue.description}</p>
              </div>
          </div>
        </div> `
  });

  loadNews();
}

function loadNews() {
  var news = firebase.database().ref("Posts/");
  news.on("child_added", function (data) {
    var newsValue = data.val();
    console.log(newsValue);
    document.getElementById('conteudo').innerHTML += `
      <div class="card-rows">
      <div class="card">
          <img src="${newsValue.imagem}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${newsValue.title}</h5>
              <p class="card-text">${newsValue.breve}</p>
              <button class="btn btn-primary">Veja Mais</button> 
          </div>
      </div>
  </div>
  <br><br> `
  });
}


