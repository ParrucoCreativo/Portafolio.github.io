function validarDatos(){
    window.event.preventDefault()
     
    if (document.form.nombre.value=="form" ) {
        alert("Campo nombre es obligatorio")  
        document.form.nombre.focus()
    
    }else if (document.form.email.value=="input_email") {
        alert("Campo e-mail es obligatorio")
        document.form.email.focus() 

    }else if (document.form.asunto.value=="input_asunto" ) {
        alert("Campo Asunto es obligatorio")
        document.form.asunto.focus() 

    }else if (document.form.mensaje.value=="mensagem" || document.form.mensaje.value.length <= 50 ){
        alert("Campo Mensaje es obligatorio y debe contener máximo 50 carateres") 
        document.form.mensaje.focus()
      
    } else if (document.form.email.value.indexOf('@')==-1 ||
    document.form.email.value.indexOf('.')==-1 ) {
        alert("e-mail inválido")
    }
   
}
    document.querySelector('form').addEventListener('submit',validarDatos)