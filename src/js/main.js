import './lib/lib';

$('button').on('click', function() {
    $(this).toggleAttr('name', 'btn-first');
});

// let div3 = $('#tree').addAttr('name', 'div32').getAttr('name');
// console.log(div3);

$('div').click(function() {
    console.log($(this).index());
});

console.log($('div').eq(3).find('.more'));
// console.log($('.some').closest('.findme'));
// console.log($('.some').siblings());

// console.log($('button').html('Hello'));