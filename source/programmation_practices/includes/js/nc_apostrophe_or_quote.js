$(function(){
    if(this.attr('type') == 'radio'){
        [...]
    }

    $('input[name="'+this.attr('name')+'"]').val('Hello \'World\'');

    var url_img_check = '../img/radiobox_check_1.png';

    console.warn('There is no input "radio" or \'checkbox\' in the jquery object passed');
});
