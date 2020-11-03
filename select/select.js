const getTemplate = () => {
    return `
    <div class="select__input">
        <span>Text</span>
        <i class="fa fa-chevron-down"></i>
    </div>
    <div class="select__dropdown">
        <ul class="select__list">
            <li class="select__item">Vue</li>
            <li class="select__item">Angular</li>
            <li class="select__item">React</li>
            <li class="select__item">Webpack</li>
            <li class="select__item">NodeJS</li>
            <li class="select__item">PHP</li>
        </ul>
    </div>
    `
}


export class Select {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.#render()
    }

    #render() {
        this.$el.classList.add('select')
        this.$el.innerHTML = getTemplate()
    }

    open() {
        this.$el.classList.add('open')
    }

    close() {
        this.$el.classList.remove('open')
    }
}