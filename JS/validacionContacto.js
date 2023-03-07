            //Validación de un formulario con Javascript
            function valida_no_nula(texto){
                if(texto.length == 0){
                    return false;
                } else{
                    return true;
                }
            }

            function valida_long(texto, max){
                if(texto.length > max){
                    return false;
                } else{
                    return true;
                }
            }

            function valida_envia() {
                //valido el nombre
                if (!valida_no_nula(document.fvalida.nombre.value)) {
                    alert("Tiene que escribir su nombre")
                    document.fvalida.nombre.focus()//foco en el campo del error
                    return 0;
                }

                //valido el apellido
                if (!valida_no_nula(document.fvalida.apellido.value)) {
                    alert("Tiene que escribir su apellido")
                    document.fvalida.apellido.focus()//foco en el campo del error
                    return 0;
                }

                //valido el mail
                if (!valida_no_nula(document.fvalida.mail.value)) {
                    alert("Tiene que escribir su email")
                    document.fvalida.mail.focus()//foco en el campo del error
                    return 0;
                }
                //Validación basada en expresiones regulares robadas de internet
                //Es lo mas simple que encontré que valida al menos que sea algo@algomas.otracosamas y no deja que pongas dos @
                var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!(document.fvalida.mail.value.toLowerCase().match(re))){
                    alert("Ingrese un email válido")
                    document.fvalida.mail.focus()//foco en el campo del error
                    return 0;
                }
    
                //valido el asunto
                if (!valida_no_nula(document.fvalida.asunto.value)){
                    alert("Tiene que escribir un asunto")
                    document.fvalida.asunto.focus()//foco en el campo del error
                    return 0;
                }
                //Menos de 50 caracteres
                if (!valida_long(document.fvalida.asunto.value,50)){
                    alert("El asunto no puede exceder los 50 caracteres")
                    document.fvalida.asunto.focus()//foco en el campo del error
                    return 0;
                }

                //Valido código de país
                //El mas largo que conozco es +882-16 de Thuraya, limito a 7 caracteres
                if (!valida_long(document.fvalida.cod_pais.value,7)){
                    alert("El código de país no puede exceder los 7 caracteres")
                    document.fvalida.cod_pais.focus()//foco en el campo del error
                    return 0;
                }
                if(document.fvalida.cod_pais.value.charAt(0) != "+"){
                    alert("El código de país debe empezar por un +")
                    document.fvalida.cod_pais.focus()//foco en el campo del error
                    return 0;
                }
                
                //Valido código de area
                //El mas largo que conozco es de 4 digitos
                if (!valida_long(document.fvalida.cod_area.value,4)){
                    alert("El código de area no puede exceder los 4 caracteres")
                    document.fvalida.cod_area.focus()//foco en el campo del error
                    return 0;
                }
                if (validarEntero(document.fvalida.cod_area.value) == "") {
                    alert("El código de area debe ser un número entero")
                    document.fvalida.cod_area.focus()//foco en el campo del error
                    return 0;
                }
               
                //Valido telefono
                if (validarEntero(document.fvalida.num_tel.value) == "") {
                    alert("El número de telefono debe ser un número entero")
                    document.fvalida.phone_number.focus()//foco en el campo del error
                    return 0;
                }

                //valido el mensaje
                if (!valida_no_nula(document.fvalida.mensaje.value)) {
                    alert("Tiene que escribir un mensaje")
                    document.fvalida.mensaje.focus()//foco en el campo del error
                    return 0;
                }
                //Menos de 1000 caracteres
                if (!valida_long(document.fvalida.mensaje.value, 1000)) {
                    alert("El mensaje no puede exceder los 1000 caracteres")
                    document.fvalida.message.focus()//foco en el campo del error
                    return 0;
                }

                //el formulario se envia
                alert("Muchas gracias por enviar el formulario");
                document.fvalida.submit();
            }
    
            function validarEntero(valor) {
                //intento convertir a entero.
                //si era un entero no le afecta, si no lo era lo intenta convertir
                valor = parseInt(valor)
    
                //Compruebo si es un valor numérico
                if (isNaN(valor)) {
                    //entonces (no es numero) devuelvo el valor cadena vacia
                    return ""
                } else {
                    //En caso contrario (Si era un número) devuelvo el valor
                    return valor
                }
            }