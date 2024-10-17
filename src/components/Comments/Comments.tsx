import React, {useEffect, useState} from 'react';
import {IComment} from "../../models/IComment";
import {getComments} from "../../services/api.services";
import comment from "../Comment/Comment";
import Comment from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([])
    useEffect(() => {
        getComments().then(value => setComments(value))
    }, []);
    return (
        <div>
            {
                comments.map((comment: IComment) => (<Comment comment={comment} key={comment.id}/>))
            }
        </div>
    );
};

export default Comments;