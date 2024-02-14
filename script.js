// trilho minha lista
function scrollCarousel(myListCarousel, direction) {
    const carousel = document.getElementById(myListCarousel);
    const scrollAmount = 300; // Ajuste conforme necessário

    if (direction === 'left') {
        carousel.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        carousel.scrollLeft += scrollAmount;
    }
}
// trilho top 10
function scrollCarousel(top10Carousel, direction) {
    const carousel = document.getElementById(top10Carousel);
    const scrollAmount = 300; // Ajuste conforme necessário

    if (direction === 'left') {
        carousel.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        carousel.scrollLeft += scrollAmount;
    }
}
// trilho series estrangeiras
function scrollCarousel(estrangSeriesCarousel, direction) {
    const carousel = document.getElementById(estrangSeriesCarousel);
    const scrollAmount = 300; // Ajuste conforme necessário

    if (direction === 'left') {
        carousel.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        carousel.scrollLeft += scrollAmount;
    }
}
// trilho series de humor
function scrollCarousel(humorCarousel, direction) {
    const carousel = document.getElementById(humorCarousel);
    const scrollAmount = 300;

    if (direction === 'left') {
        carousel.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        carousel.scrollLeft += scrollAmount;
    }
}


