import * as React from "react";
import * as moment from "moment";
import { WorkoutPlanPanel } from "./workoutPlanPanel";
export class WorkoutPlanTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement("div", { className: "an-single-component with-shadow" },
            React.createElement("div", { className: "an-component-header list-user-single" },
                React.createElement("h3", { style: { textAlign: "center", color: "#FFCC33" } },
                    React.createElement("strong", null, "Your Workout Plans"))),
            React.createElement("div", { className: "an-component-body" },
                React.createElement("div", { className: "table-responsive" },
                    React.createElement("table", { className: "table an-table-hover" },
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null, "Action"),
                                React.createElement("th", null, "Plan Name"),
                                React.createElement("th", null, "Plan Direction"),
                                React.createElement("th", null, "Active"),
                                React.createElement("th", null, "Created "))),
                        React.createElement("tbody", { className: "list-user-single an-accordion square " }, this.props.workoutPlans.slice(0).reverse().map((plan, i) => {
                            //TODO: implement a conditional to display days for days >0, hours for days < 0, minutes for hours < 0
                            let now = moment.utc();
                            let createdDate = moment.utc(now).diff(plan.createdDate.toString());
                            let logsHumanizedCreatedDate = Math.round(moment.duration(createdDate).asDays());
                            let modifiedDate = moment.utc(now).diff(plan.modifiedDate.toString());
                            let logsHumanizedModifiedDate = Math.round(moment.duration(modifiedDate).asDays());
                            return (React.createElement(React.Fragment, { key: i },
                                React.createElement("tr", null,
                                    React.createElement("th", null,
                                        React.createElement("button", { className: "an-btn an-btn-prospect", "data-toggle": "collapse", "data-target": '#' + plan.id }, "View More")),
                                    React.createElement("th", null, plan.planName),
                                    React.createElement("th", null, plan.planDetails),
                                    React.createElement("th", null, plan.isActive.toString() === "true" ? "YES" : "NO"),
                                    React.createElement("th", null,
                                        logsHumanizedCreatedDate,
                                        " ",
                                        logsHumanizedCreatedDate == 1 ? "day" : "days",
                                        " ago")),
                                React.createElement(WorkoutPlanPanel, { workoutPlan: plan, refreshPlans: this.props.refreshPlans, onEditClick: this.props.onEditClick, logsHumanizedModifiedDate: logsHumanizedModifiedDate, onDeleteClick: this.props.onDeleteClick })));
                        })))))));
    }
}
//# sourceMappingURL=WorkoutPlanTable.js.map