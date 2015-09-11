$('.content .more').on('click', function(e){
    $(this).parent().siblings('article').toggle(400);
});

var alphaRule = /^[a-zA-Z ]*$/;


$('form :input').each(function(index) {

    if($(this).hasClass('alpha')) {
    
        $(this).on('keyup', function(event) {
    
            console.log($(this));
            if(!alphaRule.test($(this).val())) {

                $(this).css('outline', '2px solid #ff5b5b');
            
            } else {
                
                $(this).css('outline', 'none');
            }
    
        });
    }

    if($(this).parent().hasClass('zoneTextarea')) {
        $(this).parent().append('<span class="actualNbOfCaraters"></span>');
        $(this).on('keyup', function(event){


            if($(this).val().length < 10) {
                $(this).siblings('.actualNbOfCaraters').text($(this).val().length + 1 + ' caracters typed');
            } else {
                $(this).val($(this).val().substr(0, 10));
                console.log($(this).val());
            }
        });
    }
});

$('form').on('submit', function(e){
    e.preventDefault();
    $(':input', this).each(function(e) {

        if($(this).attr('type') === 'text') {
            console.log($(this));
        }
        if($(this).is('textarea')) {
            console.log($(this));
        }
        if($(this).is('select')) {
            console.log($(this));
        }
    });

    console.log($('.zoneRadio input'));
    console.log($('.zoneCheckbox input'));
});