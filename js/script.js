const mainContainer = document.querySelector('main')
let activeElements

function clickHandler(e) { const id = e.target.dataset.id; mediaPopup.open(DATA[id]) }
function touchHandler(e) { e.touches.length > 1 ? e.preventDefault() : '' }

window.addEventListener('contextmenu', e => e.preventDefault())
window.addEventListener('touchstart', touchHandler, { passive: false })

// append svg mask to container
mainContainer.insertAdjacentHTML('beforeend', SVG_MASK)

// get all clickable areas from svg mask
activeElements = mainContainer.querySelectorAll('svg [data-id]')

// add desirable behaviour for clickable areas
activeElements.forEach(e => { e.addEventListener('click', clickHandler) })

// config popup
'timeout' in DATA ? mediaPopup.timeout(DATA.timeout) : ''
mediaPopup.onOpen(() => { pagePanning.pause() })
mediaPopup.onClose(() => { pagePanning.play() })

// config page panning
if ('pagePanning' in DATA) {
    DATA.pagePanning.delay ? pagePanning.delay(DATA.pagePanning.delay) : ''
    DATA.pagePanning.step ? pagePanning.step(DATA.pagePanning.step) : ''
}
pagePanning.play()