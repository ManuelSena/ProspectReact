import * as React from "react";
import * as moment from "moment";
import { Button, Input, Textarea } from "../../common/components/form";
import { IWorkoutPlanStepErrors, IWorkoutPlanFormErrors, IWorkoutPlanDirectionEntity, IWorkoutPlanEntity, IWorkoutPlanForm, IWorkoutPlanProgressBoolean } from "../../interfaces/Workouts";
import { WorkoutPlanPanel } from "./workoutPlanPanel";


interface IWorkoutPlanTable {
    workoutPlans: IWorkoutPlanEntity[];
    refreshPlans: () => void;
    onEditClick: (currentPlan: IWorkoutPlanEntity) => void;
    onDeleteClick: (id: number) => void;
}




export class WorkoutPlanTable extends React.Component<IWorkoutPlanTable, {}>{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    public render() {
        return (
           
            <div className="an-single-component with-shadow">
                <div className="an-component-header list-user-single">
                    <h3 style={{ textAlign: "center", color: "#FFCC33" }}><strong>Your Workout Plans</strong></h3>
                </div>

                <div className="an-component-body">

                    <div className="table-responsive">
                        <table className="table an-table-hover">
                            <thead>
                                <tr>

                                    <th>Action</th>
                                    <th>Plan Name</th>
                                    <th>Plan Direction</th>
                                    <th>Active</th>
                                    <th>Created </th>

                                </tr>
                            </thead>

                            <tbody  className="list-user-single an-accordion square ">
                                {/* You must use ES6 functions here in order to allow the scope of this to work */}
                                {this.props.workoutPlans.slice(0).reverse().map((plan, i) => {

                                    //TODO: implement a conditional to display days for days >0, hours for days < 0, minutes for hours < 0
                                    let now = moment.utc();
                                    let createdDate = moment.utc(now).diff(plan.createdDate.toString());
                                    let logsHumanizedCreatedDate = Math.round(moment.duration(createdDate).asDays());

                                    let modifiedDate = moment.utc(now).diff(plan.modifiedDate.toString());
                                    let logsHumanizedModifiedDate = Math.round(moment.duration(modifiedDate).asDays());

                                    return (
                                        <React.Fragment key={i}>
                                            <tr>
                                                <th><button className="an-btn an-btn-prospect" data-toggle="collapse" data-target={'#' + plan.id}>View More</button></th>
                                                <th>{plan.planName}</th>
                                                <th>{plan.planDetails}</th>
                                                <th>{plan.isActive.toString() === "true" ? "YES" : "NO"}</th>
                                                <th>{logsHumanizedCreatedDate} {logsHumanizedCreatedDate == 1 ? "day" : "days"} ago</th>
                                            </tr>

                                            <WorkoutPlanPanel
                                                workoutPlan={plan}
                                                refreshPlans={this.props.refreshPlans}
                                                onEditClick={this.props.onEditClick}
                                                logsHumanizedModifiedDate={logsHumanizedModifiedDate}
                                                onDeleteClick={this.props.onDeleteClick}
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




