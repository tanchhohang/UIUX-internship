
const floatUpElements = document.querySelectorAll('.float-up');


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (

        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function floatUpHandler() {
    floatUpElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('float-up-active');
        } else {
            element.classList.remove('float-up-active');
        }
    });
}


window.addEventListener('scroll', floatUpHandler);


floatUpHandler();