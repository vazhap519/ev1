$('#clock').countdown('2021/12/25', function(event) {
    $(this).html(event.strftime
    (
        '<div class="cd">' +

        '<div class="cdTd"><span>%D</span><span> days</span></div>' +
        '<div class="cdTd"><span>%H</span><span> hours</span></div>' +
        '<div class="cdTd"><span>%M</span><span> Min</span></div>' +
        '<div class="cdTd"><span>%S</span><span> Sec</span></div>' +

        '</div>'


    ));
});
