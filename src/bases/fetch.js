//FetchAPI
const apiKey = 'vZNEp8dhcwgQo0breI4CW6VmrSjMZoV7';

//peticion con promesas en cadena
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then( res => res.json() )
    .then( ({data}) =>{ //desestructurando la informacion de la data
        //console.log(data.images.original.url);

        //usar desestructuracion
        const { url } = data.images.original;
        
        //mostrando imgan en el navegador

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
        
    } )
    .catch( error =>{
        console.log('error al obtener datos', error);
    })
