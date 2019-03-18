function getData() {
  const endpoint = 'http://localhost:8080/matches';
  fetch(endpoint)
  .then(function(response) {
  return response.text();
  })
  .then(function(text) {
    response(text);
    console.log('Request successful');
  })
  .catch(function(error) {
    console.log('Request failed', error)
  });
}


function response(text){
  const footer = {
    year: "2019",
    legal: "Sitio de Carácter Informativo",
  }

  const fmf = {
    owner: "FMF",
    name: "Vamos México!",
    avatar : "./public/images/mex-flag",
    description: "#siSePuede",
    tags: {
      owner: "FMF",
      name: "Selección Mexicana",
      calendario: "Calendario",
      proximosPartidos: "Próximos Partidos",
      elTri: "El Tri",
      ponteLaVerde: "Ponte La Verde",
      laSelección: "La Selección",
      proximosPartidos: "Próximos Partidos",
      mexico: "México"
    }
  };

  const media = {
    jumbotron: "./public/gifs/goool"
  };

  const data = {
    footer: footer,
    fmf: fmf,
    media: media
  };

  fetchDataFromEndpoint(JSON.parse(text), data);
}
