import * as React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
const colorChange = {
    color: "red",
};
const styleData = {
    paddingLeft: "10",
    wordWrap: "normal",
};
export class PlanDirectionSidePanelDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.addStep = this.addStep.bind(this);
    }
    render() {
        return (React.createElement("div", { className: "an-single-component with-shadow", style: { border: "none" } },
            React.createElement("div", { className: "an-component-header list-user-single", style: { backgroundColor: "#333333", color: "#FFCC33" } },
                React.createElement("h3", { style: { lineHeight: "200%", textAlign: "center" } }, "Your Workout Plan")),
            React.createElement("div", { className: "an-component-body list-user-single" },
                React.createElement("div", { className: "an-user-lists customer-support" },
                    React.createElement("div", { className: "an-lists-body an-customScrollbar" },
                        React.createElement("p", null,
                            React.createElement("strong", null,
                                React.createElement("span", { style: { color: "red" } }, "*"),
                                "Name: "),
                            this.formatDirection(this.props.workoutPlanFormProgressEntity.planName)),
                        React.createElement("p", null,
                            React.createElement("strong", null,
                                React.createElement("span", { style: { color: "red" } }, "*"),
                                "Details: "),
                            this.formatDirection(this.props.workoutPlanFormProgressEntity.planDetails)),
                        React.createElement("p", null,
                            React.createElement("strong", null,
                                React.createElement("span", { style: { color: "red" } }, "*"),
                                "Required Foods: "),
                            this.formatDirection(this.props.workoutPlanFormProgressEntity.requiredFood)),
                        React.createElement("p", null,
                            React.createElement("strong", null, this.props.workoutPlanFormProgressEntity.isActive === true ? "*This is ACTIVE!*" : "This Plan Will Be INACTIVE"))))),
            React.createElement("p", { style: { color: "red", fontStyle: "italic" } }, "* indicates a required field"),
            React.createElement("div", { className: "an-user-lists customer-support list-user-single" },
                React.createElement("h4", { style: { lineHeight: "200%", backgroundColor: "#333333", color: "#FFCC33", textAlign: "center" } }, "Steps For This Plan"),
                React.createElement(ReactCSSTransitionGroup, { transitionName: "slide", transitionEnterTimeout: 500, transitionLeaveTimeout: 500 }, this.props.workoutPlanFormProgressEntity.planDirections.map((step, index) => this.addStep(step, index))))));
    }
    formatDirection(value) {
        return value === "" ? "---" : value;
    }
    addStep(step, index) {
        let stepNumber = index + 1;
        return (React.createElement("div", { className: "outset", key: index },
            React.createElement("h5", null,
                React.createElement("strong", null,
                    "Step: ",
                    stepNumber)),
            React.createElement("p", null,
                React.createElement("span", { style: { color: "red" } }, "*"),
                "Duration: ",
                React.createElement("span", { style: styleData }, this.formatDirection(step.durationTypeName))),
            React.createElement("p", null,
                React.createElement("span", { style: { color: "red" } }, "*"),
                "Step Name: ",
                React.createElement("span", { style: styleData }, this.formatDirection(step.stepName))),
            React.createElement("p", null,
                React.createElement("span", { style: { color: "red" } }, "*"),
                "Requirements: ",
                this.formatDirection(step.requirements)),
            React.createElement("p", null,
                React.createElement("span", { style: { color: "red" } }, "*"),
                "Directions: ",
                React.createElement("span", { style: styleData }, this.formatDirection(step.directions))),
            React.createElement("br", null)));
    }
}
//# sourceMappingURL=WorkoutPlanDirectionSidePanel.js.map