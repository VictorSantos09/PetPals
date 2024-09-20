publicar();

document.getElementById("savePost").addEventListener("click", function () {
  var title = document.getElementById("postTitle").value;
  var text = document.getElementById("postText").value;

  console.log(title);
  if (title && text) {
    $("#postModal").modal("hide");
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});

function publicar() {
  document.getElementById("savePost").addEventListener("click", function () {
    var title = document.getElementById("postTitle").value;
    var text = document.getElementById("postText").value;

    if (title && text) {
      var postDiv = document.createElement("div");
      postDiv.classList.add("card", "mb-3");

      postDiv.innerHTML = `
                <div class="card-body">
                    <p class="mb-3 tx-14">${text}</p>
                    <img class="img-fluid" src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Imagem da postagem"/>
                </div>
                <div class="card-footer">
                    <div class="d-flex post-actions">
                        <a href="javascript:;" class="d-flex align-items-center text-muted mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart icon-md">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                            <p class="d-none d-md-block ml-2">Curtir</p>
                        </a>
                        <a href="javascript:;" class="d-flex align-items-center text-muted mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square icon-md">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <p class="d-none d-md-block ml-2">Comentar</p>
                        </a>
                        <a href="javascript:;" class="d-flex align-items-center text-muted">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share icon-md">
                                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                <polyline points="16 6 12 2 8 6"></polyline>
                                <line x1="12" y1="2" x2="12" y2="15"></line>
                            </svg>
                            <p class="d-none d-md-block ml-2">Compartilhar</p>
                        </a>
                    </div>
                </div>
            `;

      document.getElementById("postsContainer").appendChild(postDiv);

      $("#postModal").modal("hide");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
}
