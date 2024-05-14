// Slider 3 - Example Refactor
const wrapper3 = document.querySelector(".slider-3");
const carousel3 = document.querySelector(".carousel-slider2");
const firstCardWidth3 = carousel3.querySelector(".card-2").offsetWidth;
const arrowBtns3 = document.querySelectorAll(".slider-3 i");
const carouselChildrens3 = [...carousel3.children];

let isDragging3 = false;
let isAutoPlay3 = true;
let startX3, startScrollLeft3, timeoutId3;

// Calculate number of cards visible at once
let cardPerView3 = Math.round(carousel3.offsetWidth / firstCardWidth3);

// Insert copies of cards for infinite scrolling
carouselChildrens3.slice(-cardPerView3).reverse().forEach(card => {
    carousel3.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens3.slice(0, cardPerView3).forEach(card => {
    carousel3.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Initialize carousel scroll position to hide duplicates
carousel3.classList.add("no-transition3");
carousel3.scrollLeft = carousel3.offsetWidth;
carousel3.classList.remove("no-transition3");

// Event listeners for arrow buttons
arrowBtns3.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel3.scrollLeft += btn.id === "left2" ? -firstCardWidth3 : firstCardWidth3;
    });
});

// Drag start event
const dragStart3 = (e) => {
    isDragging3 = true;
    carousel3.classList.add("dragging3");
    startX3 = e.pageX;
    startScrollLeft3 = carousel3.scrollLeft;
}

// Dragging event
const dragging3 = (e) => {
    if (!isDragging3) return;
    carousel3.scrollLeft = startScrollLeft3 - (e.pageX - startX3);
}

// Drag stop event
const dragStop3 = () => {
    isDragging3 = false;
    carousel3.classList.remove("dragging3");
}

// Infinite scroll logic
const infiniteScroll3 = () => {
    if (carousel3.scrollLeft === 0) {
        carousel3.classList.add("no-transition3");
        carousel3.scrollLeft = carousel3.scrollWidth - (2 * carousel3.offsetWidth);
        carousel3.classList.remove("no-transition3");
    } else if (Math.ceil(carousel3.scrollLeft) === carousel3.scrollWidth - carousel3.offsetWidth) {
        carousel3.classList.add("no-transition3");
        carousel3.scrollLeft = carousel3.offsetWidth;
        carousel3.classList.remove("no-transition3");
    }
    clearTimeout(timeoutId3);
    if (!wrapper3.matches(":hover")) autoPlay3();
}

// Autoplay logic
const autoPlay3 = () => {
    if (window.innerWidth < 800 || !isAutoPlay3) return;
    timeoutId3 = setTimeout(() => {
        carousel3.scrollLeft += firstCardWidth3;
    }, 2500);
}

// Initial autoplay start
autoPlay3();

// Event listeners for drag and scroll events
carousel3.addEventListener("mousedown", dragStart3);
carousel3.addEventListener("mousemove", dragging3);
document.addEventListener("mouseup", dragStop3);
carousel3.addEventListener("scroll", infiniteScroll3);
wrapper3.addEventListener("mouseenter", () => clearTimeout(timeoutId3));
wrapper3.addEventListener("mouseleave", autoPlay3);
