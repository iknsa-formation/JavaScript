$('.content .more').on('click', function(e){
    $(this).parent().siblings('article').toggle(400);
});