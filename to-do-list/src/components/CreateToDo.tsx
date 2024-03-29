import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
    toDo: string;
}

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ toDo }: IForm) => {
        setToDos(oldToDos => [{ text: toDo, id: Date.now(), category: "TO_DO" }, ...oldToDos]);
        setValue("toDo", "");
        
    }
    return(
        <form onSubmit={handleSubmit(handleValid)}>
            <input {...register('toDo', { required: 'true' })} type="text" placeholder="아이디를 입력해주세요" />
            <button>완료</button>
        </form>
    );
}

export default CreateToDo;