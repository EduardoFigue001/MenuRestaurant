$(function(){//ejecutar cuando el documento este listo
    $("#consumir").click(function(){//evento clic en el elemento con ID"consumir"
        $.get("https://www.themealdb.com/api/json/v1/1/categories.php", //peticion get a la api
        function(data){
            if(data.categories){//verificar si la repuesta contiene datos de categorias
                console.log("datos de la categoria:"); //mostrar mensaje en la consola "datos de categoria"
                console.log(data.categories);//mostrar datos de categoria en formato de tabla por consola

                $.each(data.categories,function (i, item){//recorrer cada categoria 
                    const tableRow =$('<tr>'); // creamos una constante para fila de tabla
                    
                    tableRow.append('<td>' + item.idCategory + '</td>');//añadir id de categoria a la celda
                    tableRow.append('<td>' + item.strCategory + '</td>');// añadir nombre de categoria a la celda

                    // crear y configurar elementos de la imagen 

                    const image =$('<img>');
                    image.attr('src', item.strCategoryThumb); //establecer url de imagen 
                    tableRow.append('<td>' + image[0].outerHTML + '</td>'); //añadir Html de imagen a la celda

                    tableRow.append('<td>' + item.strCategoryDescription + '</td>'); //añadir descripcion de categoria al a cenlda
                    tableRow.appendTo ("#categorias");//añadir nueva fila al elemento id "categoria"
                    $("#menu").append(tableRow);
                });
            }else{
                console.error("Error: no se encontraron datos de categoria en la respuesta");//registrar error si no hay datos de categorias 
                //manejar el error y proporcionar comentarios al usuario

            }     


       }

            
    );    

});

});