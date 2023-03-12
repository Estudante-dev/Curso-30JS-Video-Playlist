let videoPrincipal = document.querySelector("video");
let videosPlaylist = document.querySelector(".videosPlaylist");
let videoTitulo = document.querySelector(".titulo");

let videos = [
    {
      'id': 'a1',
      'titulo': 'Dois gatinhos e vários pintinhos',
      'url': 'https://www.youtube.com/watch?v=O58N8Mmv0QU&t=3s'
    },
    {
      'id': 'a2',
      'titulo': 'Filhotinhos Fofos',
      'url': 'https://www.youtube.com/watch?v=jANE8lpoj2c&t=2s'
    },
    {
      'id': 'a3',
      'titulo': 'Um gatinho e um patinho',
      'url': 'https://www.youtube.com/watch?v=4ai8-m9Dp_8'
    },
  
    {
      'id': 'a4',
      'titulo': 'Muitos patinhos e um gatinho',
      'url': 'https://www.youtube.com/watch?v=Vyfx9FwmHMY'
    },
    {
      'id': 'a5',
      'titulo': 'Gatinhos divertidos',
      'url': 'https://www.youtube.com/watch?v=LMD6MqwErzc&t=1s'
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
    videoPrincipal.src = `${videoSelecionadoId.url}`; // Define o src do elemento de vídeo principal com o nome do arquivo de vídeo correspondente
    videoTitulo.innerHTML = videoSelecionadoId.titulo; // Define o título do vídeo principal com o título do vídeo selecionado
  
  }
  
