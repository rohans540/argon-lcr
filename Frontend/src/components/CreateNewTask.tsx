import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import Popform from './Popform'
import CustomInput from './CustomInput'
import { createTask, setOpenTaskForm } from '../redux/app.slice';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button'
import { RootState } from '../redux/store';


const CreateNewTask = () => {
    const { openTaskForm } = useSelector((state: RootState) => state.app);
    const dispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm<{ title: string; description: string }>();
    const { id } = useParams();

    const onSubmit = (data: { title: string, description: string }) => {
        const requestObj = {
            title: data.title,
            description: data.description,
            boardId: Number(id),
            status: "TODO"
        }
        dispatch(createTask(requestObj));
        dispatch(setOpenTaskForm(false))
        toast.success("Task created successfully")
        reset();
      };

    if (!open) return null;
    return (
        <>
            <Popform open={openTaskForm} onClose={() => dispatch(setOpenTaskForm(false))} title='Create New Task' onSubmit={handleSubmit(onSubmit)}>
                <CustomInput
                    id="title"
                    placeHolder="Title"
                    inputType="text"
                    register={register("title", { required: true })}
                />

                <CustomInput
                    id="description"
                    placeHolder="Description"
                    inputType="text"
                    register={register("description", { required: true })}
                />
                <Button 
                    btnType="submit"
                    title="Create new"
                    handleClick={() => { }}
                    className="flex items-center justify-center rounded-[30px] font-semibold h-[40px] w-[180px] p-4 bg-[#645fc5] text-white hover:bg-[#2c2c37] hover:border-[1px] border-[#645fc5] hover:text-[#645fc5]"
                />
            </Popform>
        </>
    )
}

export default CreateNewTask