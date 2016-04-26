$(document).on('click','#langmenu li',function(){
    $('.langmenu li').removeClass('active');
    $(this).toggleClass('active');
    /*var controller = $(this).attr('id');
    $('#myCV').attr('ng-controller',controller);*/
    
});
