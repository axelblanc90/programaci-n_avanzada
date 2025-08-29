//fetch api 
// proporciona una  interface para recuperar info de recursos a traves de la red

const  API_KEY = "wSJGBJ3y4V4tABJ6e9tr0nf5272O389C";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

peticion.then (resp => resp.json())
    .then (({data}) => {
        const {url} = data.images.original;
        console.log(url);
        const img = document.createElement("img");
        if (img){
            img.src = url ;
            document.body.append(img);
        }

    })
    .catch (console.warn);

// esto se conoce como promesas en cadena