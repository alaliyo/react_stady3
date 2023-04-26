import { useState } from "react";
import { useForm } from 'react-hook-form';

function ToDoList() {
    const { register, watch } = useForm();
    console.log(watch());
    return(
        <div>
            <form>
                <input {...register('Email')} type="email" placeholder="아이디를 입력해주세요" />
                <input {...register('Password')} type="password" placeholder="비밀번호를 입력해주세요" />
                <input {...register('Password2')} type="password" placeholder="다시 비밀번호를 입력해주세요" />
                <button>완료</button>
            </form>
        </div>
    );
}

export default ToDoList;


/*    const [toDoValue, setToDoValue] = useState('');
    const [toDoError, setToDoError] = useState('');

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = e;
        setToDoValue(value);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (toDoValue.length < 10) {
            return setToDoError('10 글자 이상 작성 가능합니다.');
        }
        setToDoError('');
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input value={toDoValue} onChange={onChange} type="text" placeholder="to-do 내용" />
                <button>완료</button>
                <br />
                {toDoError !== '' ? toDoError : null}
            </form>
        </div>
    ); */