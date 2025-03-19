export const BASE_URL = import.meta.env.VITE_BASE_URL;

//Endpoints
//Boards
export const BOARDS = '/boards';
export const BOARDBYID = (id: number) => `/boards/${id}`;

//Tasks
export const TASK = "/tasks";
export const TASKBYID = (id: number) => `/tasks/${id}`;
