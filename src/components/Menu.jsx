import './Menu.scss'
import Sidebar from '../images/sidebar.svg'
import Star from '../images/star.svg'
import MenuVariant from '../images/menu__variant.svg'
import Unpin from '../images/unpin.svg'

export default function Menu() {

    const menuVariants = [ {value: 'Моя работа', id: 1}, {value: 'Структура портала', id: 2}, {value: 'Личное расписание', id: 3}, {value: 'Отсутствие на рабочем месте', id: 4},
        {value: 'Портфель услуг', id: 5}, {value: 'Дашборды', id: 6}, {value: 'Доски задач', id: 7}, {value: 'Обращения', id: 8},  {value: 'События', id: 9}, {value: 'Инциденты', id: 10},
        {value: 'Проблемы', id: 11}, {value: 'Настройка каталогов', id: 12}, {value: 'Запросы на обслуживание', id: 13}, {value: 'Запросы на изменение', id: 14},
        {value: 'Управление конфигурациями', id: 15}, {value: 'Управление уровнем услуг', id: 16}, {value: 'Настройка соответствий', id: 17}]

    return (
        <section className="menu">
            <div className="menu__sidebar">
                <button>
                    <img src={Sidebar} alt="Favorites"/>
                </button>
                <button>
                    <img src={Star} alt="Favorites"/>
                </button>
            </div>
            <div className="menu__main">
                <div className="menu__searchAndFilter">
                    <div className="menu__search">
                        <input type="search" name="search" id="2" placeholder='Поиск по меню'/>
                    </div>
                    <button className='menu__filter square'>
                        <img src={Unpin} alt="Filter"/>
                    </button>
                </div>
                <div className="menu__content">
                    <ul className="menu__list">
                        {menuVariants.map(e => (
                            <li className='menu__item' key={e.id}>
                                <img src={MenuVariant} alt="menu variant"/>
                                <a href="/">{e.value}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}