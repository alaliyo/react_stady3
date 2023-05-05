import { useSetRecoilState } from 'recoil';
import { IToDO, toDoState } from '../atoms';

function ToDo({ id, text, category }: IToDO) {
    const setToDos = useSetRecoilState(toDoState);

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = e;
        setToDos(oldToDos => {
            const tartgetIndex = oldToDos.findIndex(toDo => toDo.id === id)
            const newToDo = {text, id, category: name as any};
            return [
                ...oldToDos.slice(0, tartgetIndex),
                newToDo,
                ...oldToDos.slice(tartgetIndex+1),
            ];
        });
        console.log(toDoState);
    };

    return(
        <li>
            <span>{text}</span>
            {category !== 'DOING' && (
                <button name='DOING' onClick={onClick}>Doing</button>
            )}
            {category !== 'TO_DO' && (
                <button name='TO_DO' onClick={onClick}>To Do</button>
            )}
            {category !== 'DONE' && (
                <button name='DONE' onClick={onClick}>Done</button>
            )}
        </li>
    );
}

export default ToDo;