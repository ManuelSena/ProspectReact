import * as React from "react";
import { PlanDirectionPanel } from "../../components/Workouts/workoutPlanDirectionPanel";
export class PlanDirectionList extends React.Component {
    render() {
        return (React.createElement("div", { className: "an-single-component with-shadow" },
            React.createElement("div", { className: "an-component-header" },
                React.createElement("h3", { style: { textAlign: "center", color: "#f57c00" } },
                    React.createElement("strong", null, "Workout Plan Direction"))),
            React.createElement("div", { className: "an-component-body" },
                React.createElement("div", { className: "table-responsive" },
                    React.createElement("table", { className: "table an-table-hover" },
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null),
                                React.createElement("th", null, "Step Name"),
                                React.createElement("th", null, "Directions"),
                                React.createElement("th", null, "Requirement"),
                                React.createElement("th", null, "Duration Type"),
                                React.createElement("th", null, "Created "),
                                React.createElement("th", null, "Modified"))),
                        React.createElement("tbody", { className: "list-user-single an-accordion square " }, this.props.planDirectionList.map((directionstep) => {
                            //let now = moment.utc();
                            //let createdDate = moment.utc(now).diff(issue.createdDate.toString());
                            //let logsHumanizedCreatedDate = Math.round(moment.duration(createdDate).asDays());
                            //let modifiedDate = moment.utc(now).diff(issue.modifiedDate.toString());
                            //let logsHumanizedModifiedDate = Math.round(moment.duration(modifiedDate).asDays());
                            //<th>{logsHumanizedCreatedDate} {logsHumanizedCreatedDate == 1 ? "day" : "days"} ago</th>
                            //<th>{logsHumanizedModifiedDate} {logsHumanizedModifiedDate == 1 ? "day" : "days"} ago</th>
                            return (React.createElement(React.Fragment, null,
                                React.createElement("tr", { key: directionstep.id },
                                    React.createElement("th", null,
                                        React.createElement("button", { className: "btn btn-info", "data-toggle": "collapse", "data-target": '#' + directionstep.id }, "View More")),
                                    React.createElement("th", null,
                                        React.createElement("a", { href: "" }, directionstep.stepName)),
                                    React.createElement("th", null, directionstep.directions),
                                    React.createElement("th", null,
                                        React.createElement("span", { style: { color: "#f57c00" }, className: "msg-tagx {directionstep.durationTypeId}" }, directionstep.requirements))),
                                React.createElement(PlanDirectionPanel, { planDirection: directionstep })));
                        })))))));
    }
}
//# sourceMappingURL=workoutPlanDirectionView.js.map