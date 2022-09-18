window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";

    cursor2.style.left = e.pageX + "px";
    cursor2.style.top = e.pageY + "px";
})

window.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(2) translate(-25%, -25%)';
    cursor2.style.display='none'
})

window.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1) translate(-50%, -50%)';
    cursor2.style.display = ''
})
