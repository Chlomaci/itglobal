import { useController } from "react-hook-form"
import Select, { components, IndicatorsContainerProps } from 'react-select';
import './Select.scss'

export default function SelectComponent({ control, name, options, multi, decision }) {
    const {
        field,
        fieldState: {invalid, isTouched, isDirty},
        formState: {touchedFields, dirtyFields},
    } = useController({
        name,
        control,
    })

    const deleteBtn = <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.47336 12.4749C6.21336 12.7349 5.78671 12.7349 5.52671 12.4749C5.26671 12.2149 5.26671 11.7883 5.52671 11.5283L7.05336 10.0016L5.52671 8.47495C5.26671 8.21495 5.26671 7.78833 5.52671 7.52833C5.78671 7.26833 6.21336 7.26833 6.47336 7.52833L8.00003 9.05503L9.52671 7.52833C9.78671 7.26833 10.2134 7.26833 10.4734 7.52833C10.7334 7.78833 10.7334 8.21495 10.4734 8.47495L8.94671 10.0016L10.4734 11.5283C10.7334 11.7883 10.7334 12.2149 10.4734 12.4749C10.2134 12.7349 9.78671 12.7349 9.52671 12.4749L8.00003 10.9483L6.47336 12.4749Z"
                                        fill="#ABB1BA"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M15.3333 10.0016C15.3333 14.055 12.0533 17.335 8 17.335C3.94667 17.335 0.666667 14.055 0.666667 10.0016C0.666667 5.94829 3.94667 2.66829 8 2.66829C12.0533 2.66829 15.3333 5.94829 15.3333 10.0016ZM14 10.0016C14 6.68829 11.3133 4.00163 8 4.00163C4.68667 4.00163 2 6.68829 2 10.0016C2 13.315 4.68667 16.0016 8 16.0016C11.3133 16.0016 14 13.315 14 10.0016Z"
                                          fill="#ABB1BA"/>
                                </svg>



    const IndicatorsContainer = (
        props
    ) => {
        return (
            <div className='input__delete'>
                <components.IndicatorsContainer {...props} children={deleteBtn}/>
            </div>
        );
    };

    return (
        <Select
            options={options}
            {...(multi ? {'isMulti': true} : {})}
            components={{IndicatorsContainer}}
            onChange={field.onChange} // send value to hook form
            onBlur={field.onBlur} // notify when input is touched/blur
            value={field.value} // input value
            name={field.name} // send down the input name
            inputRef={field.ref} // send input ref, so we can focus on input when error appear
            placeholder={null}
            styles={{
                multiValueRemove: (styles, {data}) => ({
                    ...styles,
                    color: 'rgba(46, 50, 56, 1)',
                    ':hover': {
                        backgroundColor: 'rgba(153, 213, 255, 0.3)',
                        color: 'rgba(46, 50, 56, 1)',
                        border: 'none',
                    },
                }),
                multiValueLabel: (styles, {data}) => ({
                    ...styles,
                    fontSize: '14px',
                    padding: '0',
                    margin: '0',
                    marginRight: '5px'
                }),
                multiValue: (styles, {data}) => {
                    return {
                        ...styles,
                        backgroundColor: 'rgba(153, 213, 255, 0.3)',
                        height: '25px',
                        borderRadius: '4px',
                        border: 'rgba(153, 213, 255, 1) solid 1px',
                    };
                },
                singleValue: (styles, {data}) => {
                    return {
                        ...styles,
                        backgroundColor: 'rgba(153, 213, 255, 0.3)',
                        height: '25px',
                        borderRadius: '4px',
                        border: 'rgba(153, 213, 255, 1) solid 1px',
                        display: 'inline-block',
                        paddingLeft: '6px',
                        paddingRight: '6px',
                        gridColumnEnd: 1,
                        gridTemplateColumns: '10px'
                    };
                },
                control: (styles) => ({
                    ...styles,
                    borderRadius: '4px',
                    border: 'rgb(46,50,56, 0.2) solid 1px',
                    backgroundColor: 'rgb(213,216,221, 0.2)',
                    outline: 'none',
                    color: 'rgba(46, 50, 56, 1)',
                    ':hover': {
                        backgroundColor: 'rgb(213,216,221, 0.2)',
                        borderColor: 'rgb(46,50,56, 0.2)'
                    },
                }),
                dropdownIndicator: (styles) => ({
                    ...styles,
                    display: 'none',
                }),
                indicatorSeparator: (styles) => ({
                    ...styles,
                    display: 'none',
                }),
                container: (styles) => ({
                    ...styles,
                    width: decision ? '95%' : '90%',
                }),
            }}
        />
    )
}