import './lib/lib';

$('button').on('click', function() {
    $(this).toggleAttr('name', 'btn-first');
});

let div3 = $('#tree').addAttr('name', 'div32').getAttr('name');
console.log(div3);