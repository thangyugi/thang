class ContentItem {
    constructor(el) {
        this.DOM = {
            el: el,
            title: el.querySelector('.content__item-title'),
            description: el.querySelector('.content__item-description'),
            texts: [...el.querySelectorAll('.oh > .oh__inner')],
        }
    }
}

export default ContentItem
