import MainHeader from "./MainHeader";
import './Main.scss'
import { useForm } from "react-hook-form"
import SelectComponent from "./Select";
import Plus from '../images/plus.svg'
import Search from '../images/search.svg'
import Calendar from '../images/calendar.svg'

const Main = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => console.log(data)

    const users = [
        { value: 'Константин Константинопольский', label: 'Константин Константинопольский' },
        { value: 'Андрей Пивоваров', label: 'Андрей Пивоваров' },
        { value: 'Максим Галактионов', label: 'Максим Галактионов' },
        { value: 'Алла Лин', label: 'Алла Лин' },
        { value: 'Константин Константинопольский Константинович', label: 'Константин Константинопольский Константинович' },
        { value: 'Игорь Иванченко', label: 'Игорь Иванченко' },
        { value: 'Юлия Эйчаровна', label: 'Юлия Эйчаровна' },
        { value: 'Артём Подпрыгайко-Саппортов', label: 'Артём Подпрыгайко-Саппортов' },
        { value: 'Илья Вазнец', label: 'Илья Вазнец'},
        { value: 'Михаил Вортенов', label: 'Михаил Вортенов' },
        { value: 'Наталья Нашевна', label: 'Наталья Нашевна' },
        { value: 'Евгения Итамовна', label: 'Евгения Итамовна' },
        { value: 'Алиса Киральчук', label: 'Алиса Киральчук' },
    ]

    const groups = [{value: 'Support Group', label: 'Support Group'}]


    return (
        <section className='main'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <MainHeader/>
                <div className="main__content">
                    <h1 className='main__title'>STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые
                        поля остаются редактируемыми для агента если он Caller</h1>
                    <section className="form">
                        <div className="form__field">
                            <label><span className='required'>*</span> Тема</label>
                            <input {...register("Subject", {required: true})} />
                            {errors.Subject && <span className='error'>Это обязательное поле</span>}
                        </div>
                        <div className="form__field">
                            <label>Статус</label>
                            <input {...register("Status")} />
                        </div>
                        <div className="form__field">
                            <label>Описание</label>
                            <input {...register("Description")} />
                        </div>
                        <div className="form__field">
                            <label>Продукт</label>
                            <input {...register("Product")} />
                        </div>
                        <div className="form__field">
                            <label><span className='required'>*</span> Рабочие заметки</label>
                            <input {...register("Notes", {required: true})} />
                            {errors.Notes && <span className='error'>Это обязательное поле</span>}
                        </div>
                        <div className="form__field">
                            <label>Приоритет</label>
                            <input {...register("Priority")} />
                        </div>
                        <div className="form__field">
                            <label>Ответственный</label>
                            <div className="form__options">
                                <SelectComponent
                                    control={control}
                                    name='Responsible'
                                    decision={false}
                                    multi={false}
                                    options={users}/>
                                <button className="square" style={{height: '45px', width: '45px'}}>
                                    <img src={Plus} alt="Plus"/>
                                </button>
                                <button className="square" style={{height: '45px', width: '45px'}}>
                                    <img src={Search} alt="Search"/>
                                </button>
                            </div>
                        </div>
                        <div className="form__field">
                            <label>Группа</label>
                            <div className="form__options">
                                <SelectComponent
                                    control={control}
                                    name='Group'
                                    decision={false}
                                    multi={false}
                                    options={groups}/>
                                <button className="square" style={{height: '45px', width: '45px'}}>
                                    <img src={Plus} alt="Plus"/>
                                </button>
                                <button className="square" style={{height: '45px', width: '45px'}}>
                                    <img src={Search} alt="Search"/>
                                </button>
                            </div>
                        </div>
                        <div className="form__field comments">
                            <label>Комментарии</label>
                            <input {...register("Comments")} />
                        </div>
                        <div className="form__field decision">
                            <label>Согласующие</label>
                            <div className="form__options">
                                <SelectComponent
                                    control={control}
                                    name='decision'
                                    decision={true}
                                    multi={true}
                                    options={users}/>
                                <button className="square" style={{height: '45px', width: '45px'}}>
                                    <img src={Plus} alt="Plus"/>
                                </button>
                                <button className="square" style={{height: '45px', width: '45px'}}>
                                    <img src={Search} alt="Search"/>
                                </button>
                            </div>
                        </div>
                        <div className="form__field">
                            <label>Когда открыто</label>
                            <div className="form__options">
                                <input type='date' className='time' {...register("Opened")} />
                                <button className="square" style={{height: '45px', width: '45px'}}>
                                    <img src={Calendar} alt="Calendar"/>
                                </button>
                            </div>
                        </div>
                        <div className="form__field">
                            <label>Когда создано</label>
                            <div className="form__options">
                                <input type='date' className='time' {...register("Created")} />
                                <button className="square time"  style={{height: '45px', width: '45px'}}>
                                    <img src={Calendar} alt="Calendar"/>
                                </button>
                            </div>
                        </div>
                        <div className="form__field">
                            <label>Кем открыто</label>
                            <div className="form__options">
                            <SelectComponent
                                    control={control}
                                    name='Opener'
                                    decision={false}
                                    multi='isMulti'
                                    options={users}/>
                                <button className="square" style={{height: '45px', width: '45px'}}>
                                    <img src={Plus} alt="Plus"/>
                                </button>
                                <button className="square" style={{height: '45px', width: '45px'}}>
                                    <img src={Search} alt="Search"/>
                                </button>
                            </div>
                        </div>
                        <div className="form__field">
                            <label>Кем создано</label>
                            <div className="form__options">
                                <SelectComponent
                                    control={control}
                                    name='Creator'
                                    decision={false}
                                    multi='isMulti'
                                    options={users}/>
                                <button className="square" style={{height: '45px', width: '45px'}}>
                                    <img src={Plus} alt="Plus"/>
                                </button>
                                <button className="square" style={{height: '45px', width: '45px'}}>
                                    <img src={Search} alt="Search"/>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </form>
        </section>
    )
}

export default Main;