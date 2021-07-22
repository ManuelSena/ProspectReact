import * as React from "react";
import { apiExecute } from "../../api/apiExecute";
import { IWorkoutPlanEntity } from "../../interfaces/Workouts/IWorkoutPlanEntity";
const baseURL = "/";
//get all
export const getAllWorkoutPlans = (): Promise<any> => {
    const registerURL = `/api/workoutplans/`;
    return apiExecute(registerURL, "GET", null)
}
//get current
const getWorkoutPlans = (): Promise<any> => {
    const workoutURL = `/api/workoutplans/currentAthleteWorkoutPlans`;
    return apiExecute(workoutURL, "GET", null)
}

//get solo athelete by id
const getAthleteWorkoutPlans = (id: number): Promise<any> => {
    const registerURL = `/api/workoutplans/${id}`;
    return apiExecute(registerURL, "GET", null)
}
//post
const postWorkoutPlans = (data: IWorkoutPlanEntity): Promise<any> => {
    const URL = `/api/workoutplans`;
    return apiExecute(URL, "POST", data)
}
//update
const updateWorkoutPlans = (data: IWorkoutPlanEntity): Promise<any> => {
    const putURL = `/api/workoutplans/${data.id}` ;
    return apiExecute(putURL, "PUT", data)
}
//delete
const deleteWorkoutPlans = (id): Promise<any> => {
    const deleteURL = `/api/workoutplans/` + id;
    return apiExecute(deleteURL, "DELETE", null)
}
//current login user
export const getCurrentLoginUser = (): Promise<any> => {
    const registerURL = `/api/workoutplans/currentUser/`;
    return apiExecute(registerURL, "GET", null)
}
//ADDED FOR CINDY FOR GET CALL FOR SINGLE PLAN
export const getByWorkoutPlanId = (WorkoutPlanId: number): Promise<any> => {
    const URL = `${baseURL}api/workoutplans/prospectWorkoutPlan/${WorkoutPlanId}`;
    return apiExecute(URL, "GET", null)
}

export const WorkoutPlanApi = {
    getByWorkoutPlanId, getCurrentLoginUser, postWorkoutPlans, getWorkoutPlans, updateWorkoutPlans, deleteWorkoutPlans, getAthleteWorkoutPlans }