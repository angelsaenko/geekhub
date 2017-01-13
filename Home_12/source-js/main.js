var $items = $('header #navbar-collapsed li a');
$items.on('click', function(){
    $items.removeClass('active');
    $(this).addClass('active');
});
