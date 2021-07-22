import * as React from "react";
import * as moment from "moment";
import { IIssueLogEntity } from "../../interfaces/Logs/IIssueLogEntity";
import { IDetailedIssueLogResponseEntity, IIssueLogResponseEntity } from "../../interfaces/Logs/IIssueLogResponseEntity";
import { Button, Input, Textarea } from "../../common/components/form";
import { IWorkoutPlanDirectionEntity } from "../../interfaces/workouts/index";
import { PlanDirectionPanel } from "../../components/Workouts/workoutPlanDirectionPanel"

interface IPlanDirectionList {
    planDirectionList: IWorkoutPlanDirectionEntity[];

}
interface IUserIssueLogState {
    userPlanDirection: IWorkoutPlanDirectionEntity;

}

export class PlanDirectionList extends React.Component<IPlanDirectionList, IUserIssueLogState>{
    public render() {
        return (

            <div className="an-single-component with-shadow">
                <div className="an-component-header">
                    <h3 style={{ textAlign: "center", color: "#f57c00" }}><strong>Workout Plan Direction</strong></h3>
                </div>

                <div className="an-component-body">

                    <div className="table-responsive">
                        <table className="table an-table-hover">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Step Name</th>
                                    <th>Directions</th>
                                    <th>Requirement</th>
                                    <th>Duration Type</th>                                   
                                    <th>Created </th>
                                    <th>Modified</th>
                                </tr>
                            </thead>

                            <tbody className="list-user-single an-accordion square ">
                                {this.props.planDirectionList.map((directionstep) => {
                                    //let now = moment.utc();
                                    //let createdDate = moment.utc(now).diff(issue.createdDate.toString());
                                    //let logsHumanizedCreatedDate = Math.round(moment.duration(createdDate).asDays());

                                    //let modifiedDate = moment.utc(now).diff(issue.modifiedDate.toString());
                                    //let logsHumanizedModifiedDate = Math.round(moment.duration(modifiedDate).asDays());

                                    //<th>{logsHumanizedCreatedDate} {logsHumanizedCreatedDate == 1 ? "day" : "days"} ago</th>
                                    //<th>{logsHumanizedModifiedDate} {logsHumanizedModifiedDate == 1 ? "day" : "days"} ago</th>

                                    return (
                                        <React.Fragment>
                                            <tr key={directionstep.id}>

                                                <th><button className="btn btn-info" data-toggle="collapse" data-target={'#' + directionstep.id}>View More</button></th>
                                               
                                                <th><a href="">{directionstep.stepName}</a></th>

                                                <th>{directionstep.directions}</th>

                                                <th><span style={{ color: "#f57c00" }} className="msg-tagx {directionstep.durationTypeId}">{directionstep.requirements}</span></th>
                                            </tr>

                                            <PlanDirectionPanel
                                                planDirection={directionstep}
                                            />

                                        </React.Fragment>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

