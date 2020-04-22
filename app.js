$(function() {
    console.log('let\'s get ready to party with JQUERY!');
});

$('article img').addClass('image-center');
let $articleP = $('article p');
$articleP.get(5).remove();

$('#title').css('font-size', Math.floor(Math.random() * 100 + 1));
$('ol').append('<li>It can say whatever you want!</li>');

$('ol').animate(
    {opacity: 0},
     2000, 
     function(){
    $(this).replaceWith('<p>I apologize for this lists existence. It was silly, unnecessary, and I regret ever having let it live in the first place.</p>')
     } );

const inputs = $('input');
const body = $('body');

inputs.on('focusout', function(evt){
if(evt.target === inputs.get(0) || evt.target === inputs.get(1) || evt.target === inputs.get(2)){
    body.css('background-color', `rgb(${inputs.get(0).value},${inputs.get(2).value},${inputs.get(1).value} )`)
}

})

$('article img').on('click', function(){
    $(this).animate(
        {opacity: 0},
        1000,
        function(){
            $(this).remove();
        }
    )
});
