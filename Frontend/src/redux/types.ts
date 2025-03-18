export interface CreateTaskRequestProps {
    title: string;
    description: string;
    status: string;
    id: number;
}

export type TaskProps = {
    boardId: number;
    createdAt: Date;
    description: string;
    id: number;
    status: string;
    title: string
}

export type BoardProps = {
    createdAt: Date;
    id: number;
    tasks: TaskProps[];
    title: string;
}

export interface BoardFormProps {
    title: string;
  }