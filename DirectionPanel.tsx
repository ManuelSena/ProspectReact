import * as React from "react";
import * as moment from "moment";
import * as toastr from "toastr";
import { IWorkoutPlanDirectionEntity } from "../../interfaces/workouts/IWorkoutPlanDirectionEntity";
import { IDetailedIssueLogResponseEntity, IIssueLogResponseEntity } from "../../interfaces/Logs/IIssueLogResponseEntity";
import { Button, Input, Textarea } from "../../common/components/form";
import { LogsApi } from "../../api/Logs";


interface IPlanDirectionPanel {
    planDirection: IWorkoutPlanDirectionEntity;
    //refreshPlans: () => void;
    //onEditClick: (currentPlan: INutritionPlanEntity) => void;
    //changeTab: (tab: number) => void;
    //logsHumanizedModifiedDate: number;
    //onDeleteClick: (id: number) => void;
}

interface IPlanDirectionState {
    userPlanDirection: IWorkoutPlanDirectionEntity
}


export class PlanDirectionPanel extends React.Component<IPlanDirectionPanel, IPlanDirectionState>{

    public render() {

        return (

            <tr id={this.props.planDirection.id.toString()} className="collapse" >

                <td colSpan={7} style={{ backgroundColor: "#f9f9f9" }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div style={{ backgroundColor: "#f9f9f9", fontSize: "250%", textAlign: "center", color: "#23527c" }}><strong>Workout Direction Plan Panel</strong> </div>

                                <div className="col-md-6">

                                    {/* First Column for general plan info */}
                                    <div className="container-fluid">
                                        {/*    <div className="col-md-6">
                                            <img className="img-fluid" style={{ height: "auto", maxWidth: "100%", width: "260px", }} src={this.props.planDirection.planImageURL} />
                                        </div> */}

                                        <div className="col-md-6"  >

                                            <h5 style={{}}><strong>Step Name: </strong>{this.props.planDirection.stepName}</h5>
                                            <p style={{ wordWrap: "normal", maxWidth: "50%" }}><strong>Plan Directions: </strong>{this.props.planDirection.directions}</p>
                                            {/*<p><strong>Allergens: </strong>{this.props.planDirection.allergens === null ? "---" : this.props.planDirection.allergens}</p>*/}
                                            <p><strong>Requirements: </strong>{this.props.planDirection.requirements}</p>
                                            {/*<p><strong>Last Modified: </strong>{this.props.logsHumanizedModifiedDate} {this.props.logsHumanizedModifiedDate == 1 ? "day" : "days"} ago</p>}*/}
                                            {/*     <p><Button
                                                    className="btn btn-warning"
                                                    onClick={() => { this.props.onEditClick(this.props.planDirection); }}
                                                    label="EDIT"
                                                    disabled={false} />
                                                    <Button
                                                        className="btn btn-danger"
                                                        onClick={() => { this.props.onDeleteClick(this.props.planDirection.id); }}
                                                        label="DELETE"
                                                        disabled={false} />
                                                </p> */}
                                        </div>


                                    </div>
                                </div>
                                {/*   <div className="col-md-6" style={{ height: "250px", overflowY: "scroll", padding: "15" }}>


                                    {this.props.nutritionPlan.planDirections.map((step, i) => {
                                        let stepNumber = i + 1;
                                        return (
                                            <div key={i} style={{ padding: "15" }}>
                                                <h4><strong>Step {stepNumber}</strong></h4>
                                                <h5><strong>Step Name: </strong>{step.stepName}</h5>
                                                <p><strong>Requirements: </strong>{step.requirements}</p>
                                                <p><strong>Duration: </strong>{step.durationTypeName}</p>
                                                <p><strong>Directions: </strong>{step.directions}</p>
                                            </div>


                                        );




                                    })}


                                </div>
                                */}
                            </div>
                        </div>
                    </div>

                </td>
            </tr>

        );
    }
}

