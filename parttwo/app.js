$( function(){

});
const submit = $('#Submit');

submit.on('click', function(e){
    e.preventDefault();
    const title = $('#Title').val();
    if(title === '' || title.length < 2){
        alert('Please input a movie title');
        return;
    }
    const rating = $('#Rating').val();
    const section = $('ol').get(0);
    const tmpLi = $('<li>');
    const newLi = tmpLi.get(0);
    section.append(newLi);
    newLi.append(title + " : " + rating);

   const tmpChk = $('<input>');
   tmpChk.attr('type', 'checkbox');
   tmpChk.addClass('dlt');

   newLi.append(tmpChk[0]);

    const myInputs = $('input').get();
    myInputs[0].value = '';
    myInputs[1].value = 5;
    

})

$('section').on('click', '.dlt', function(e){
   $('.dlt').parent().remove();
})


