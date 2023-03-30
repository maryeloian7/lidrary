import './lid/lid.js';

$('button').on('click', function() {
    $(this).hide().show().toggleClass('active');
});
