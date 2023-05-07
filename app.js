//Seleccionamos todos los elementos con la clase grid-item
const gridItems = document.querySelectorAll('.grid-item');

//Seleccionamos los input radio de letra
const radioButtons = document.querySelectorAll('input[name="letter"]');

//Seleccionamos los input radio de color
const radioButtonsColor = document.querySelectorAll('input[name="color"]');

//Variable para guardar el color seleccionado (Color por defecto: transparent)
let color = 'transparent';


//Evento para cambiar el color de fondo de los elementos activos
radioButtonsColor.forEach((radioButtonColor) => {
    radioButtonColor.addEventListener('click', (event) => {
        color = event.target.value;
        // Actualizamos el color de fondo de los elementos activos
        gridItems.forEach((gridItem) => {
            if (gridItem.classList.contains('active')) {
                gridItem.style.backgroundColor = color;
            }
        });
    });
});


//arreglo con la letra correspondiente a dibujar en el display del input radio seleccionado
const t = [0, 1, 2, 3, 4, 7, 12, 17, 22];
const f = [1, 2, 3, 6, 11, 12, 16, 21];
const l = [1, 6, 11, 16, 21, 22, 23];


//Dibuajos la letra correspondiente en el display del input radio seleccionado
radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('click', (event) => {

        //Removemos la clase active de todos los grid-items
        gridItems.forEach((gridItem) => {
            gridItem.classList.remove('active');
            gridItem.style.backgroundColor = 'transparent';
        });


        if (event.target.value == 'T') {
            dibujarLetra(t, color);
        }

        if (event.target.value == 'F') {
            dibujarLetra(f);
        }

        if (event.target.value == 'L') {
            dibujarLetra(l);
        }

    });

});


//Funcion para dibujar la letra en el display del input radio seleccionado
const dibujarLetra = (letter) => {
    letter.forEach((item) => {
        gridItems[item].classList.add('active');
        gridItems[item].style.backgroundColor = color;
    });
}

//boton para limpiar el display
const btnClear = document.querySelector('button');

btnClear.addEventListener('click', () => {
    gridItems.forEach((gridItem) => {
        gridItem.classList.remove('active');
        gridItem.style.backgroundColor = 'transparent';
    });


    //Limpiamos los input radio
    radioButtons.forEach((radioButton) => {
        radioButton.checked = false;
    });

    radioButtonsColor.forEach((radioButtonColor) => {
        radioButtonColor.checked = false;
    });

});
