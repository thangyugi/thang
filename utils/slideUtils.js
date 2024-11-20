import imagesLoaded from 'imagesloaded'

const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(
            document.querySelectorAll(selector),
            { background: true },
            resolve
        )
    })
}

export default preloadImages
