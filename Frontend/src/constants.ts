export const BASE_URL = "http://localhost:5001/api"

//Endpoints
//Boards
export const BOARDS = '/boards';
export const BOARDBYID = (id: number) => `/boards/${id}`;

//Tasks
export const TASK = "/task";
export const TASKBYID = (id: number) => `/task/${id}`;
