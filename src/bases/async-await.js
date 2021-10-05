//Async await
const getImagen = async() =>{

    try {
        
        const apiKey = 'vZNEp8dhcwgQo0breI4CW6VmrSjMZoV7';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await response.json(); //usando desestructuracion de objetos
        const { url } = data.images.original; //usando desestructuracion de objetos
    
        console.log(url);
    
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append(img);

    } catch (error) {
        //manejo del error
    }
    

}

getImagen();