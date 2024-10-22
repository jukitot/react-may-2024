import React from 'react';
import {useForm} from "react-hook-form";

type FormProps = {
    username: string;
    password: string;
    age: number;
}
const FormComponent = () => {
    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid
        }
    } = useForm<FormProps>({mode: 'all'});

    const customHandler = (dataFromForm: FormProps) => {
        console.log(dataFromForm);
        console.log(errors);
        console.log(isValid);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" placeholder={'username'} {...register('username', {
                        required: {
                            value: true,
                            message: 'username is required'
                        }
                    })}/>
                </label>
                {
                    errors.username && <div> {errors.username.message}</div>
                }
                <label>
                    <input type="text" placeholder={'password'} {...register('password', {
                        minLength: {value: 3, message: 'too short'},
                        maxLength: {value: 6, message: 'too long'}
                    })}/>
                </label>
                {
                    errors.password && <div> {errors.password.message} </div>
                }
                <label>
                    <input type="number" placeholder={'age'} {...register('age', {
                        min: {value: 0, message: 'too young'},
                        max: {value: 121, message: 'too old'}
                    })}/>
                </label>
                {
                    errors.age && <div> {errors.age.message} </div>
                }
                <button>Save</button>
            </form>
        </div>
    );
};

export default FormComponent;