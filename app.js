onst $ = function (id) {
    return document.getElementById(id);
}

/**
 * Change the colour of a provided element
 * @param {HTMLElement} element the element to change the colour
 * @param {string} colour string, #hex, rgb 
 */
function colourChange(element, colour) {
    element.style.color = colour;
}

window.onload = function () {
    document.body.style.background = '#fff';

    const faqs = $('faqs');
    const h2Elements = faqs.getElementsByTagName('h2');
    const paragraphs = faqs.getElementsByTagName('p');

    for (const p of paragraphs) {
        p.addEventListener('mouseenter', () => {
            colourChange(p, '#2489CA');
        });

        p.addEventListener('mouseout', () => {
            colourChange(p, 'grey');
        });
    }

    for (const h2 of h2Elements) {
        h2.addEventListener('click', () => {
            toggleHeader(h2);
        })
    }
}

function toggleHeader(h2) {
    const toggleFA = h2.getElementsByTagName('i')[0];
    const divContent = h2.nextElementSibling;

    divContent.classList.toggle('close');

    toggleFA.classList.toggle('red');
    toggleFA.classList.toggle('green');

    toggleFA.classList.toggle('fa-minus-circle');
    toggleFA.classList.toggle('fa-plus-circle');
}