import { apiExecute } from "../../api/apiExecute";
const baseURL = "/";
const postWorkoutPlanResult = (data) => {
    const postWorkoutPlanResultURL = `/api/planresults`;
    return apiExecute(postWorkoutPlanResultURL, "POST", data);
};
const getWorkoutPlanResult = () => {
    const getWorkoutPlanResultURL = `/api/planresults`; //  /currentAthleteWorkoutResults
    return apiExecute(getWorkoutPlanResultURL, "GET", null);
};
const putWorkoutPlanResult = (data) => {
    const putWorkoutPlanResultURL = `/api/planresults/${data.id}`;
    return apiExecute(putWorkoutPlanResultURL, "PUT", data);
};
const deleteWorkoutPlanResult = (id) => {
    const deleteWorkoutResultURL = `/api/planresults/` + id;
    return apiExecute(deleteWorkoutResultURL, "DELETE", null);
};
export const WorkoutPlanResultApi = {
    postWorkoutPlanResult, getWorkoutPlanResult, deleteWorkoutPlanResult, putWorkoutPlanResult
};
//# sourceMappingURL=workoutPlanResultApi.js.map