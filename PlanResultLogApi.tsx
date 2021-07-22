//import { IRegisterEntity, ILoginEntity } from "../../interfaces/register";
import { apiExecute } from "../../api/apiExecute";
import { IPlanResultLogEntity } from "../../interfaces/Workouts/IPlanResultLogEntity";


const baseURL = "/";

const getPlanResultLog = (): Promise<any> => {
    const getURL = `${baseURL}api/planresultlog`;
    return apiExecute(getURL, "GET", null)
}

const postPlanResultLog = (data: IPlanResultLogEntity): Promise<any> => {
    const postURL = `${baseURL}api/planresultlog/`;
    return apiExecute(postURL, "POST", data)
}

const updatePlanResultLog = (data: IPlanResultLogEntity): Promise<any> => {
    const putURL = `${baseURL}api/planresultlog/${data.id}`;
    return apiExecute(putURL, "PUT", data)
}

const deletePlanResultLog = (data: number): Promise<any> => {
    const deleteURL = `${baseURL}api/planresultlog/${data}`;
    return apiExecute(deleteURL, "DELETE", data)
}

export const PlanResultLogApi = {
    getPlanResultLog, postPlanResultLog, updatePlanResultLog, deletePlanResultLog
}