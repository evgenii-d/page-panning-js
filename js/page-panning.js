const pagePanning = (() => {
    let delay = 1   // milliseconds
    let step = 1    // px
    let _enabled = false
    let _interval
    let _oldXOffset = 0
    let _flag = true
    let _count = 0

    function _panning() {
        _flag ? _count += step : _count -= step
        _oldXOffset = window.pageXOffset
        scroll(_count, 0)

        if (_oldXOffset === window.pageXOffset) {
            _flag = window.pageXOffset !== 0 ? false : true
        }
    }

    function play() {
        if (!_enabled) {
            _enabled = true
            _interval = setInterval(_panning, delay)
        }
    }

    function pause() {
        _enabled = false
        clearInterval(_interval)
    }

    function reset() {
        _enabled = false
        _oldXOffset = 0
        _flag = true
        _count = 0
        scroll(0, 0)
    }

    return {
        play: play,
        pause: pause,
        delay: n => Number.isInteger(n) ? delay = n : '',
        step: n => Number.isInteger(n) ? step = n : '',
        reset: reset
    }
})()