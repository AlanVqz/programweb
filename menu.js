function changeColor(element) {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('selected');
    }
    element.classList.add('selected');
    element.style.color = 'green';
}
