import './Header.scss'
import Logo from '../images/logo.svg';
import Avatar from '../images/avatar.png';
import Settings from '../images/settings.svg'
import Sidebar from "../images/sidebar-dark.svg";

export default function Header() {
    return (
        <div className='header'>
            <header className="header-desktop">
                <div className='header__logo'>
                    <img src={Logo} alt="Simple One"/>
                </div>
                <div className='header__info'>
                    <div className="header__search">
                        <input type="search" name="search" id="1" placeholder='Поиск...'/>
                    </div>
                    <div className="profile">
                        <div className="profile__avatar">
                            <img src={Avatar} alt="Avatar"/>
                        </div>
                        <div className="profile__name">Максим Галактионов</div>
                    </div>
                    <button className="settings square">
                        <img src={Settings} alt="Settings"/>
                    </button>
                </div>
            </header>
            <header className='header-mobile'>
                <button className='favorite'>
                    <img src={Sidebar} alt="Favorites"/>
                </button>
                <div className="profile">
                    <div className="profile__avatar">
                        <img src={Avatar} alt="Avatar"/>
                    </div>
                    <button className="settings square">
                        <img src={Settings} alt="Settings"/>
                    </button>
                </div>
            </header>
        </div>

    );
}