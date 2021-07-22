import * as React from "react";
import * as moment from "moment";
import * as toastr from "toastr";
import { IWorkoutPlanStepErrors, IWorkoutPlanFormErrors, IWorkoutPlanDirectionEntity, IWorkoutPlanEntity, IWorkoutPlanForm, IWorkoutPlanProgressBoolean } from "../../interfaces/Workouts";
import { Button, Input, Textarea } from "../../common/components/form";


interface IWorkoutPlanPanel {
    workoutPlan: IWorkoutPlanEntity;
    refreshPlans: () => void;
    onEditClick: (currentPlan: IWorkoutPlanEntity) => void;
    logsHumanizedModifiedDate: number;
    onDeleteClick: (id: number) => void;
}

export class WorkoutPlanPanel extends React.Component<IWorkoutPlanPanel, {}>{

    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <tr id={this.props.workoutPlan.id.toString()} className="collapse" >
                <td colSpan={7} style={{ backgroundColor: "#FFFFFF" }} >
                    <div className="container-fluid">
                        <div className="row">
                            <div style={{ backgroundColor: "#333", fontSize: "250%", textAlign: "center", color: "#ffcc33" }}><strong>Workout Plan Information</strong> </div>
                            <div className="col-md-6">
                                {/* First Column for general plan info */}
                                <div className="container-fluid">
                                    <div className="col-md-6">
                                        {/*IMAGE*/}
                                        <img className="img-fluid" style={{ height: "auto", maxWidth: "100%", width: "260px", }} src={this.props.workoutPlan.planImageURL} />
                                    </div>
                                    <div className="col-md-6"  >
                                        {/*WORKOUTPLAN INFO*/}
                                        <h5><strong>Plan Name: </strong>{this.props.workoutPlan.planName}</h5>
                                        <p style={{ wordWrap: "normal", maxWidth: "50%" }}><strong>Plan Details: </strong>{this.props.workoutPlan.planDetails}</p>
                                        <p><strong>Required Food: </strong>{this.props.workoutPlan.requiredFood}</p>
                                        <p>
                                            <Button
                                            className="btn btn-warning"
                                            onClick={() => { this.props.onEditClick(this.props.workoutPlan); }}
                                            label="EDIT"
                                            disabled={false} />
                                            <Button
                                            className="btn btn-danger"
                                            onClick={() => { this.props.onDeleteClick(this.props.workoutPlan.id); }}
                                            label="DELETE"
                                            disabled={false} />

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6" style={{ height: "250px", overflowY: "scroll", padding: "15" }}>
                                {this.props.workoutPlan.planDirections.map((plan, i) => {
                                    let stepNumber = i + 1;
                                    return (
                                        <div key={i} style={{ padding: "15" }}>
                                            <h4><strong>Step {stepNumber}</strong></h4>
                                            <h5><strong>Step Name: </strong>{plan.stepName}</h5>
                                            <p><strong>Requirements: </strong>{plan.requirements}</p>
                                            <p><strong>Duration: </strong>{plan.durationTypeName}</p>
                                            <p><strong>Directions: </strong>{plan.directions}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}