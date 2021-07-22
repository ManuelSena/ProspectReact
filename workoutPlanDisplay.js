//import * as React from "react";
//import * as moment from "moment";
//import { IWorkoutPlanEntity, IWorkoutPlanDirectionEntity, IWorkoutPlanProgress } from "../../interfaces/Workouts";
//import ReactCSSTransitionGroup from "react-addons-css-transition-group";
//const styleData = {
//    paddingLeft: "10",
//    wordWrap: "normal",
//    //color: "red"
//}
//export class UserPlanDisplay extends React.Component<IWorkoutPlanProgress, {}>{
//    constructor(props) {
//        super(props);
//        this.addStep = this.addStep.bind(this);
//        //this.formatDirection = this.formatDirection.bind(this);
//    }
//    public render() {
//        return (
//            <div className="an-single-component with-shadow" style={{ border: "none" }} >
//                <div className="an-component-header list-user-single" style={{ backgroundColor: "#f57c00 ", color: "#ffffff" }}>
//                    <h3 style={{ lineHeight: "200%", textAlign: "center" }}>Your Workout Plan</h3>
//                </div>
//                <div className="an-component-body list-user-single">
//                    <div className="an-user-lists customer-support">
//                        <div className="an-lists-body an-customScrollbar">
//                            <p style={{ color: "red", fontStyle: "italic" }}>* indicates a required field</p>
//                            <p><strong><span style={{ color: "red" }}>*</span>Name: </strong>{this.formatDirection(this.props.workoutPlanFormProgressEntity.planName)}</p>
//                            <p><strong><span style={{ color: "red" }}>*</span>Details: </strong>{this.formatDirection(this.props.workoutPlanFormProgressEntity.planDetails)}</p>
//                            <p><strong><span style={{ color: "red" }}>*</span>Required Foods: </strong>{this.formatDirection(this.props.workoutPlanFormProgressEntity.requiredFood)}</p>
//                            <p style={{ color: "#f57c00" }}><strong>{this.props.workoutPlanFormProgressEntity.isActive === true ? "You Are Activating This Plan" : "This Plan Will Be Inactive"}</strong></p>
//                        </div>
//                    </div>
//                </div>
//                <div className="an-user-lists customer-support list-user-single">
//                    <h4 style={{ lineHeight: "200%", backgroundColor: "#f57c00 ", color: "#ffffff", textAlign: "center" }}>Steps For This Plan</h4>
//                    <p style={{ color: "red", fontStyle: "italic" }}>* indicates a required field</p>
//                    <ReactCSSTransitionGroup transitionName="slide" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
//                        {this.props.workoutPlanFormProgressEntity.planDirections.map((step, index) => this.addStep(step, index))}
//                    </ReactCSSTransitionGroup>
//                </div>
//            </div>
//        );
//    }
//    private formatDirection(value: string) {
//        return value === "" ? "---" : value;
//    }
//    private addStep(step: IWorkoutPlanDirectionEntity, index: number) {
//        let stepNumber = index + 1;
//        return (
//            <div key={index}>
//                <h5><strong>Step: {stepNumber}</strong></h5>
//                <p><span style={{ color: "red" }}>*</span>Duration: <span style={styleData}>{this.formatDirection(step.durationTypeName)}</span></p>
//                <p><span style={{ color: "red" }}>*</span>Step Name: <span style={styleData}>{this.formatDirection(step.stepName)}</span></p>
//                <p><span style={{ color: "red" }}>*</span>Requirements: {this.formatDirection(step.requirements)}</p>
//                <p><span style={{ color: "red" }}>*</span>Directions: <span style={styleData}>{this.formatDirection(step.directions)}</span></p>
//                <br />
//            </div>
//        )
//    }
//}
//# sourceMappingURL=workoutPlanDisplay.js.map