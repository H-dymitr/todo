export  interface TaskModel {
    date: string;
    title: string;
    description?: string;
    isDone: boolean;
    tags?: string[],
    id: string,
}
