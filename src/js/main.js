import './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(900);
});

$('[data-count=second]').on('click', () => {
    $('div').eq(2).fadeToggle(900);
});

$('.btn').eq(2).on('click', () => {
    $('.w-500').fadeToggle(900);
});