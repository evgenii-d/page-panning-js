const mediaPopup = (() => {
    const _dialog = {}
    const callback = {}
    let _counter = 0
    let timeout = {}

    function _removeChildElements(p) { while (p.firstChild) { p.firstChild.remove() } }

    function close() {
        _removeChildElements(_dialog.content)
        _removeChildElements(_dialog.caption)
        _dialog.caption.classList.remove('show')
        _dialog.element.close()
        clearTimeout(timeout.imageTimer)
        callback.onClose ? callback.onClose() : ''
    }

    function playCounter(e) {
        const video = e.target
        _counter++
        _counter < timeout.video ? video.play() : close()
    }

    function open(media) {
        if (!media) return

        if (media.video) {
            const video = document.createElement('video')
            video.src = media.video

            if (timeout.video && timeout.video > 0) video.addEventListener('ended', playCounter)
            else video.loop = true

            _dialog.content.append(video)
            video.play()
        } else if (media.image) {
            const image = document.createElement('img')
            image.src = media.image
            _dialog.content.append(image)

            if (timeout.image && timeout.image > 0)
                timeout.imageTimer = setTimeout(close, timeout.image)
        }

        if (media.caption) {
            _dialog.caption.insertAdjacentHTML('beforeend', media.caption)
            _dialog.caption.classList.add('show')
        }
        _dialog.element.show()
        callback.onOpen ? callback.onOpen() : ''
    }

    (() => {
        const template = `
            <figure>
                <button></button><div></div>
                <figcaption></figcaption>
            </figure>
        `
        _dialog.element = document.createElement('dialog')
        _dialog.element.id = 'media-popup'
        _dialog.element.insertAdjacentHTML('beforeend', template)

        _dialog.closeButton = _dialog.element.querySelector('button')
        _dialog.closeButton.addEventListener('click', close)
        _dialog.content = _dialog.element.querySelector('figure>div')
        _dialog.caption = _dialog.element.querySelector('figcaption')

        document.body.insertAdjacentElement('afterbegin', _dialog.element)
    })()

    return {
        open: open,
        close: close,
        timeout: values => { timeout = values },
        onOpen: custom => callback.onOpen = custom,
        onClose: custom => callback.onClose = custom
    }
})()