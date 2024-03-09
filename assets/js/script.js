//Programar una función IIFE para ser invocada al cargar nuestra página.
const datosAPI = (() => {
    return {
        peticionAPI: async () => {
            const url = 'https://randomuser.me/api/?results=10';
            // bloque Try
            try {
                const response = await fetch(url); //método fetch mediante la instrucción await
                const data = await response.json();

                //funcion que muestra la informacion de 10 usuarios en html utilizando etiquetas del tipo párrafo 
                //una bajo la otra
                mostrarResultado(data);

            } catch (error) { // bloque Catch
                console.error('Error al obtener datos:', error);
                throw error; // Manejamos el error y lo propagamos
            }
        }
    }
})();

datosAPI.peticionAPI()

const mostrarResultado = (data) => {
    for (var i = 0; i < data.results.length; i++) {

        const name = (data.results[i].name.first + ' ' + data.results[i].name.last);
        const email = data.results[i].email;
        const cell = data.results[i].cell;

        const miDiv = document.getElementById("user-data");
        //Carga la imagen del usuario
        const img = document.createElement('img');
        img.src = data.results[i].picture.large;
        miDiv.appendChild(img);
        //Carga el nombre del usuario
        const parrafo1 = document.createElement("p");
        parrafo1.textContent = `${name}`;
        //Carga el email del usuario
        const parrafo2 = document.createElement("p");
        parrafo2.textContent = `${email}`;
        //Carga el celular del usuario
        const parrafo3 = document.createElement("p");
        parrafo3.textContent = `${cell}`;

        miDiv.appendChild(parrafo1);
        miDiv.appendChild(parrafo2);
        miDiv.appendChild(parrafo3);

    }
}