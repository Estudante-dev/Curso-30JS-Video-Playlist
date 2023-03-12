let videoPrincipal = document.querySelector("video");
let videosPlaylist = document.querySelector(".videosPlaylist");
let videoTitulo = document.querySelector(".titulo");

let videos = [
    {
      'id': 'a1',
      'titulo': 'Dois gatinhos e vários pintinhos',
      'url': 'video-01.mp4'
    },
    {
      'id': 'a2',
      'titulo': 'Filhotinhos Fofos',
      'url': 'video-02.mp4'
    },
    {
      'id': 'a3',
      'titulo': 'Um gatinho e um patinho',
      'url': 'video-03.mp4'
    },
  
    {
      'id': 'a4',
      'titulo': 'Muitos patinhos e um gatinho',
      'url': 'video-04.mp4'
    },
    {
      'id': 'a5',
      'titulo': 'Gatinhos divertidos',
      'url': 'video-05.mp4'
    }
  
  ];

  videos.map((video) => {
    let videoElemento = `
                  <div class="videoListado" onClick="videoSelecionado('${video.id}')">
                    <h2 class="button">${video.titulo}</h2>
                  </div>
      `;
      videosPlaylist.innerHTML += videoElemento;
  })

  function videoSelecionado(id) {
    let videoSelecionadoId = videos.find(video => video.id === id); // Procura o objeto de vídeo correspondente ao ID selecionado
    videoPrincipal.src = `videos/${videoSelecionadoId.url}`; // Define o src do elemento de vídeo principal com o nome do arquivo de vídeo correspondente
    videoTitulo.innerHTML = videoSelecionadoId.titulo; // Define o título do vídeo principal com o título do vídeo selecionado
  
  }
  
