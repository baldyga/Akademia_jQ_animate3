

$('button').click(function(){
    $('.square').animate ({ marginLeft: '100px', width: '100px', height: '100px'}, 3000, function (){
        $('.square').css({ backgroundColor: 'blue', transition: '5s'}, function(){
        });
    });  
});



