import * as React from "react";
export class PlanDirectionPanel extends React.Component {
    render() {
        return (React.createElement("tr", { id: this.props.planDirection.id.toString(), className: "collapse" },
            React.createElement("td", { colSpan: 7, style: { backgroundColor: "#f9f9f9" } },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("div", { style: { backgroundColor: "#f9f9f9", fontSize: "250%", textAlign: "center", color: "#23527c" } },
                                React.createElement("strong", null, "Workout Direction Plan Panel"),
                                " "),
                            React.createElement("div", { className: "col-md-6" },
                                React.createElement("div", { className: "container-fluid" },
                                    React.createElement("div", { className: "col-md-6" },
                                        React.createElement("h5", { style: {} },
                                            React.createElement("strong", null, "Step Name: "),
                                            this.props.planDirection.stepName),
                                        React.createElement("p", { style: { wordWrap: "normal", maxWidth: "50%" } },
                                            React.createElement("strong", null, "Plan Directions: "),
                                            this.props.planDirection.directions),
                                        React.createElement("p", null,
                                            React.createElement("strong", null, "Requirements: "),
                                            this.props.planDirection.requirements))))))))));
    }
}
//# sourceMappingURL=workoutPlanDirectionPanel.js.map