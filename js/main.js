$(document).ready(function () {
    $('.modal__form').validate({
        errorPlacement: function (error, element) {
          if (element.attr("type") == "checkbox") {
              return element.next('label').append(error);
          }
      
           error.insertAfter($(element));
        },
        errorClass: "invalid",
        errorElement: "em",
        rules: {
          // simple rule, converted to {required:true}
          userName: {
            required: true,
            minlength: 4,
            maxlength: 15,
            
          },
          userSurname: {
            required: true,
            minlength: 4,
            maxlength: 15,
            
            
          },
          userMasange: "required",
          // compound rule
          userEmail: {
            required: true,
            email: true
          },
          policycheckbox: "required",
        },
        messages: {
            userName:{
                required: "Имя обязательно ",
                minlength: jQuery.validator.format("Имя не короче {0} букв "),
                maxlength: jQuery.validator.format("Имя не длинее {0} букв ")
            } ,
            userSurname:{
                required: "Фамилия обязательна ",
                minlength: jQuery.validator.format("Фамилия не короче {0} букв "),
                maxlength: jQuery.validator.format("Фамилия не длинее {0} букв ")
            } ,
            userMasange:{
                required: "Сообщение обязательно",
            },
            userEmail: {
                required: "Обязателно укажите Email",
                email: "Введите в формате sdfsd@asdasd.com"
            },
        }
    
      });
});









