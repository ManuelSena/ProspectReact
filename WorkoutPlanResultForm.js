import * as React from "react";
import { Input, Button, Checkbox } from "../../common/components/form";
export const WorkoutPlanResultForm = (props) => {
    return (React.createElement("form", null,
        React.createElement("div", { className: "panel panel-default" },
            React.createElement("div", { className: "panel-header" }, "Workout Result"),
            React.createElement("div", { className: "panel-body" },
                React.createElement(Input, { type: "number", name: "startingWeight", label: "Starting Weight", onChange: props.onChange, value: props.workoutPlanResultEntity.startingWeight, placeholder: "Enter Starting Weight" }),
                React.createElement(Input, { type: "number", name: "currentWeight", label: "Current Weight", onChange: props.onChange, value: props.workoutPlanResultEntity.currentWeight, placeholder: "Enter Current Weight" }),
                React.createElement(Input, { type: "number", name: "goalWeight", label: "Goal Weight", onChange: props.onChange, value: props.workoutPlanResultEntity.goalWeight, placeholder: "Enter Starting Weight" }),
                React.createElement(Checkbox, { name: "isRecommended", onCheck: props.onChange, label: "Recommended", checked: props.workoutPlanResultEntity.isRecommended }),
                React.createElement(Button, { className: "an-btn an-btn-primary", disabled: props.buttonDisabled, label: "Workout Plan Submit", onClick: props.onSubmit })))));
};
//# sourceMappingURL=WorkoutPlanResultForm.js.map