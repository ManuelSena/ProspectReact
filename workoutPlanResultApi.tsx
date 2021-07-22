import { apiExecute } from "../../api/apiExecute";
import { IWorkoutPlanResultEntity } from "../../interfaces/Workouts/IWorkoutPlanResultEntity";


const baseURL = "/"

const postWorkoutPlanResult = (data: IWorkoutPlanResultEntity): Promise<any> => {
    const postWorkoutPlanResultURL = `/api/planresults`;
    return apiExecute(postWorkoutPlanResultURL, "POST", data)
}

const getWorkoutPlanResult = (): Promise<any> => {
    const getWorkoutPlanResultURL = `/api/planresults`; //  /currentAthleteWorkoutResults
    return apiExecute(getWorkoutPlanResultURL, "GET", null)
}

const putWorkoutPlanResult = (data: IWorkoutPlanResultEntity): Promise<any> => {
    const putWorkoutPlanResultURL = `/api/planresults/${data.id}`;
    return apiExecute(putWorkoutPlanResultURL, "PUT", data)
}

const deleteWorkoutPlanResult = (id): Promise<any> => {
    const deleteWorkoutResultURL = `/api/planresults/` + id;
    return apiExecute(deleteWorkoutResultURL, "DELETE", null)
}

export const WorkoutPlanResultApi = {
    postWorkoutPlanResult, getWorkoutPlanResult, deleteWorkoutPlanResult, putWorkoutPlanResult

}