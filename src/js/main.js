import './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeOut(900);
});

$('[data-count=second]').on('click', () => {
    $('div').eq(2).fadeOut(900);
});

$('.btn').eq(2).on('click', () => {
    $('.w-500').fadeOut(900);
});