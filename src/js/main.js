import './lib/lib';

$('button').on('click', function() {
    $('.findme').fadeOut(1000);
});

// let div3 = $('#tree').addAttr('name', 'div32').getAttr('name');
// console.log(div3);

$('div').click(function() {
    console.log($(this).index());
});

// console.log($('div').eq(3).find('.more'));
// console.log($('.some').closest('.findme').addClass('visible'));
// console.log($('.some').siblings());

// $('button').fadeIn(2000);