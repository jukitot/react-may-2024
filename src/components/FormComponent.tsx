import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IPost} from "../models/IPost";
import {createPost} from "../services/api.service";
import styles from './FormComponent.module.css'
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../validators/user.validator";

const FormComponent = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = useForm<IPost>({mode: 'all', resolver: joiResolver(userValidator)});
    const [response, setResponse] = useState<IPost | null>(null);

    const onSubmit = async (data: IPost) => {
        const createdPost = await createPost(data);
        setResponse(createdPost);
    };

    return (
        <div className={styles.formBlock}>
            <h1>Create a new Post</h1>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        {...register('title')}
                    />
                    {errors && <div className={styles.errorMessage}>* {errors.title?.message}</div>}
                </div>
                <div>
                    <label>UserId</label>
                    <input
                        type="number"
                        {...register('userId')}
                    />
                    {errors && <div className={styles.errorMessage}>* {errors.userId?.message}</div>}
                </div>

                <div>
                    <label>Body</label>
                    <textarea
                        {...register('body')}
                    />
                    {errors && <div className={styles.errorMessage}>* {errors.body?.message}</div>}
                </div>

                <button type="submit" disabled={!isValid}>Create Post</button>
            </form>

            {response && (
                <div>
                    <h2>Post Created</h2>
                    <p>Title: {response.title}</p>
                    <p>User ID: {response.userId}</p>
                    <p>Body: {response.body}</p>
                    <p>ID: {response.id}</p>
                </div>
            )}
        </div>
    );
};

export default FormComponent;