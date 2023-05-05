import { useRecoilState } from 'recoil';
import CreateToDo from './CreateToDo';
import { toDoState } from '../atoms';
import ToDo from './ToDo';


function ToDoList() {
    const [toDos] = useRecoilState(toDoState);
    console.log(toDos);
    return(
        <div>
            <h1>To Dos</h1>
            <hr />
            <CreateToDo />
            <ul>
                {toDos.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
            </ul>
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