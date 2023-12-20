function scrollToTop() {
    window.scrollTo(0, 0);
}

$(document).ready(function () {
    $('#name').on('change', function () {
        $(".data").hide();
        $("#" + $(this).val()).fadeIn(700);
    }).change();
});