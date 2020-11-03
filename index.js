import {Select} from "./select/select";
import './select/styles.scss'

/*
** Params
1 param - корневой элемент, куда рендерим контент
2 param - объект, настройка плагина (передаются настройки)
**
 */

const select = new Select('#select', {
    placeholder: 'Select your framework',
    //selectedId: '2',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Angular'},
        {id: '3', value: 'Vue'},
        {id: '4', value: 'React Native'},
        {id: '5', value: 'Next'},
        {id: '6', value: 'Nest'}
    ],
    onSelect(item) {
        console.log('Selected Item', item)
    }
})

window.s = select