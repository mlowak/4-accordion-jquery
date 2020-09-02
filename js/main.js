$(document).ready(function () {

    // obowiązuje do wszystkich elementów z tej klasy
    $('.accordion-item').click(function () {

        // dodanie możliwości zamknięcia i otwarcia poprzez pętlę if else
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).find('.accordion-content').slideUp();

        } else {
            // po naciśnięciu dodaje klasę open
            $(this).addClass('open');

            // w tym klikniętym elemencie znajdź coś
            $(this).find('.accordion-content').slideDown();


            // działa tylko, że otwiera wszystkie trzy elementy
            // $('.accordion-content').slideDown();
        }
    });
});

