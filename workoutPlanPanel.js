import * as React from "react";
import { Button } from "../../common/components/form";
export class WorkoutPlanPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("tr", { id: this.props.workoutPlan.id.toString(), className: "collapse" },
            React.createElement("td", { colSpan: 7, style: { backgroundColor: "#FFFFFF" } },
                React.createElement("div", { className: "container-fluid" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { style: { backgroundColor: "#333", fontSize: "250%", textAlign: "center", color: "#ffcc33" } },
                            React.createElement("strong", null, "Workout Plan Information"),
                            " "),
                        React.createElement("div", { className: "col-md-6" },
                            React.createElement("div", { className: "container-fluid" },
                                React.createElement("div", { className: "col-md-6" },
                                    React.createElement("img", { className: "img-fluid", style: { height: "auto", maxWidth: "100%", width: "260px", }, src: this.props.workoutPlan.planImageURL })),
                                React.createElement("div", { className: "col-md-6" },
                                    React.createElement("h5", null,
                                        React.createElement("strong", null, "Plan Name: "),
                                        this.props.workoutPlan.planName),
                                    React.createElement("p", { style: { wordWrap: "normal", maxWidth: "50%" } },
                                        React.createElement("strong", null, "Plan Details: "),
                                        this.props.workoutPlan.planDetails),
                                    React.createElement("p", null,
                                        React.createElement("strong", null, "Required Food: "),
                                        this.props.workoutPlan.requiredFood),
                                    React.createElement("p", null,
                                        React.createElement(Button, { className: "btn btn-warning", onClick: () => { this.props.onEditClick(this.props.workoutPlan); }, label: "EDIT", disabled: false }),
                                        React.createElement(Button, { className: "btn btn-danger", onClick: () => { this.props.onDeleteClick(this.props.workoutPlan.id); }, label: "DELETE", disabled: false }))))),
                        React.createElement("div", { className: "col-md-6", style: { height: "250px", overflowY: "scroll", padding: "15" } }, this.props.workoutPlan.planDirections.map((plan, i) => {
                            let stepNumber = i + 1;
                            return (React.createElement("div", { key: i, style: { padding: "15" } },
                                React.createElement("h4", null,
                                    React.createElement("strong", null,
                                        "Step ",
                                        stepNumber)),
                                React.createElement("h5", null,
                                    React.createElement("strong", null, "Step Name: "),
                                    plan.stepName),
                                React.createElement("p", null,
                                    React.createElement("strong", null, "Requirements: "),
                                    plan.requirements),
                                React.createElement("p", null,
                                    React.createElement("strong", null, "Duration: "),
                                    plan.durationTypeName),
                                React.createElement("p", null,
                                    React.createElement("strong", null, "Directions: "),
                                    plan.directions)));
                        })))))));
    }
}
//# sourceMappingURL=workoutPlanPanel.js.map