var team = {
    creator_id: 7,
    name:"Surf e Jiu",
    nickname: "sj"
}

var form = "<form><label>Faixa:</label><input type='text' name='faixaRosa' /><input id='enviar' type='submit' /></form>";

(function($){

    $.fn.extend({
        createForm: function(){
            $("section").prepend(form);
        },
        geraJson: function(){
          
          console.log( $(this).serialize() );

          return function(){
            $(this).each()

          }
        }

        
    });
    
     $(document).createForm();
     $("#enviar").click(function(){
        event.preventDefault();
        $(this).parent().geraJson();
     })    

})(jQuery);



//ao clicar no botão gerar um form - done
//mapear o submit do form
//enviar o json para o servidor
//exibir mensagem de volta