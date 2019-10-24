$('.carousel').carousel({
    interval: 200
  })

  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
  });


  $(document).ready(function(){
    $window = $(window);
    //Captura cada elemento section com o data-type "background"
    $('section[data-type="background"]').each(function(){
        var $scroll = $(this);   
            //Captura o evento scroll do navegador e modifica o backgroundPosition de acordo com seu deslocamento.            
            $(window).scroll(function() {
                var yPos = -($window.scrollTop() / $scroll.data('speed')); 
                var coords = '50% '+ yPos + 'px';
                $scroll.css({ backgroundPosition: coords });    
            });
   });  
}); 



const token = "3a3dedb8-f4ae-47ab-a13e-18e36b9742b0";
const $formContact = document.querySelector("#contats");

const sendForm = event => {
  event.preventDefault();
  const message = {
    name: document.querySelector("#name").value,
    subject: document.querySelector("#email").value,
    text: document.querySelector("#message").value
  };
  smtpJS(message);
};
const smtpJS = message => {
  try {
    Email.send(      
      "Viper.systems.python@gmail.com",
      `${message.name} - ${message.subject}`,
      message.text,
      { token }
    );
  } catch (e) {
    alert("Error");
  }
};

$formContact.addEventListener("submit", sendForm);
