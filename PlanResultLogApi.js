//import { IRegisterEntity, ILoginEntity } from "../../interfaces/register";
import { apiExecute } from "../../api/apiExecute";
const baseURL = "/";
const getPlanResultLog = () => {
    const getURL = `${baseURL}api/planresultlog`;
    return apiExecute(getURL, "GET", null);
};
const postPlanResultLog = (data) => {
    const postURL = `${baseURL}api/planresultlog/`;
    return apiExecute(postURL, "POST", data);
};
const updatePlanResultLog = (data) => {
    const putURL = `${baseURL}api/planresultlog/${data.id}`;
    return apiExecute(putURL, "PUT", data);
};
const deletePlanResultLog = (data) => {
    const deleteURL = `${baseURL}api/planresultlog/${data}`;
    return apiExecute(deleteURL, "DELETE", data);
};
export const PlanResultLogApi = {
    getPlanResultLog, postPlanResultLog, updatePlanResultLog, deletePlanResultLog
};
//# sourceMappingURL=PlanResultLogApi.js.map