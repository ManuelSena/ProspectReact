import { apiExecute } from "../../api/apiExecute";
const baseURL = "/";
//get all
export const getAllWorkoutPlans = () => {
    const registerURL = `/api/workoutplans/`;
    return apiExecute(registerURL, "GET", null);
};
//get current
const getWorkoutPlans = () => {
    const workoutURL = `/api/workoutplans/currentAthleteWorkoutPlans`;
    return apiExecute(workoutURL, "GET", null);
};
//get solo athelete by id
const getAthleteWorkoutPlans = (id) => {
    const registerURL = `/api/workoutplans/${id}`;
    return apiExecute(registerURL, "GET", null);
};
//post
const postWorkoutPlans = (data) => {
    const URL = `/api/workoutplans`;
    return apiExecute(URL, "POST", data);
};
//update
const updateWorkoutPlans = (data) => {
    const putURL = `/api/workoutplans/${data.id}`;
    return apiExecute(putURL, "PUT", data);
};
//delete
const deleteWorkoutPlans = (id) => {
    const deleteURL = `/api/workoutplans/` + id;
    return apiExecute(deleteURL, "DELETE", null);
};
//current login user
export const getCurrentLoginUser = () => {
    const registerURL = `/api/workoutplans/currentUser/`;
    return apiExecute(registerURL, "GET", null);
};
//ADDED FOR CINDY FOR GET CALL FOR SINGLE PLAN
export const getByWorkoutPlanId = (WorkoutPlanId) => {
    const URL = `${baseURL}api/workoutplans/prospectWorkoutPlan/${WorkoutPlanId}`;
    return apiExecute(URL, "GET", null);
};
export const WorkoutPlanApi = {
    getByWorkoutPlanId, getCurrentLoginUser, postWorkoutPlans, getWorkoutPlans, updateWorkoutPlans, deleteWorkoutPlans, getAthleteWorkoutPlans
};
//# sourceMappingURL=workoutPlansIndex.js.map