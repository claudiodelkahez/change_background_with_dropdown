
function changeColor(getColor) {
    let bg = document.querySelector('.bg')
    let text = getColor.options[getColor.selectedIndex].text

    let selectColor = getColor.value
    bg.style.background = selectColor
    bg.innerHTML = text

}