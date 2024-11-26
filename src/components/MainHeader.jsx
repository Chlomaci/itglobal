import './MainHeader.scss'
import {useDispatch} from "react-redux";
import {changeModal, changeScroll} from "../app/reducers/mainSlice";
import {useEffect} from "react";
import { useSelector } from 'react-redux'


const MainHeader = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            dispatch(changeScroll(window.scrollY))
        })
    });

    const scroll = useSelector(state => state.main.scroll)

    window.addEventListener('scroll', () => {
        console.log(window.scrollY); // Следим за уровнем прокрутки
    });
    return (
        <div className={scroll ? 'main__header shadow' : 'main__header'}>
            <div className="main__header_subtask">
                <div className="subtask__title">Подзадача</div>
                <button className="subtask__btn" onClick={(e) => {
                    e.preventDefault()
                    dispatch(changeModal())
                }}>Создать</button>
            </div>
            <div className="main__header_buttons">
                <button className="save" type='submit' >Сохранить</button>
                <button className="saveAndDeleteExit" type='submit'>Сохранить и выйти</button>
            </div>
        </div>
    )
}

export default MainHeader