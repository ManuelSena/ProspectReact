import { IWorkoutPlanDirectionEntity } from "../../interfaces/Workouts/IWorkoutPlanDirectionEntity";
import { apiExecute } from "../../api/apiExecute";

const baseURL = "/";

export const getWorkoutPlanDirection = (data): Promise<any> => {
    const getWorkoutPlanDirectionURL = `${baseURL}api/plandirections`
    return apiExecute(getWorkoutPlanDirectionURL, "GET", data)
}

export const getUserWorkoutPlanDirection = (data): Promise<any> => {
    const directionURL = `/api/plandirection/user/`;
    return apiExecute(directionURL, "GET", data)
}

export const getPlanDirectionById = (id: number): Promise<any> => {
    const directionURL = `/api/plandirectionresponses/` + id;
    return apiExecute(directionURL, "GET", null)
}

export const postWorkoutPlanDirection = (data: IWorkoutPlanDirectionEntity): Promise<any> => {
    const postWorkoutPlanDirectionURL = `${baseURL}api/plandirections`;
    return apiExecute(postWorkoutPlanDirectionURL,"POST",data)
}

export const putWorkoutPlanDirection = (data: IWorkoutPlanDirectionEntity): Promise<any> => {
    const putWorkoutPlanDirectionURL = `${baseURL}api/plandirections/${data.id}`;
    return apiExecute(putWorkoutPlanDirectionURL, "PUT", data)
}

export const deleteWorkoutPlanDirection = (data: IWorkoutPlanDirectionEntity): Promise<any> => {
    const deleteWorkoutPlanDirection = `${baseURL}api/plandirections/`;
    return apiExecute(deleteWorkoutPlanDirection, "DELETE", data)
}

export const WorkoutPlanDirectionApi = {
    postWorkoutPlanDirection, getWorkoutPlanDirection, getPlanDirectionById, deleteWorkoutPlanDirection, putWorkoutPlanDirection, getUserWorkoutPlanDirection
}