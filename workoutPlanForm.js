import * as React from "react";
import { Input, Textarea, Checkbox } from "../../common/components/form";
export const WorkoutPlanForm1 = (props) => {
    return (React.createElement("form", null,
        React.createElement("div", { className: "panel panel-default" },
            React.createElement("div", { className: "panel-body" },
                React.createElement(Input, { label: "Plan Name", name: "planName", value: props.workoutPlanFormEntity.planName, onChange: props.onChange, onBlur: props.onBlur, error: props.formErrors.planName, placeholder: "Enter Plan Name" }),
                React.createElement(Textarea, { label: "Plan Details", name: "planDetails", value: props.workoutPlanFormEntity.planDetails, onChange: props.onChange, onBlur: props.onBlur, error: props.formErrors.planDetails, placeholder: "Enter Plan Details", rows: 2 })))));
};
export const WorkoutPlanForm2 = (props) => {
    return (React.createElement("form", null,
        React.createElement(Textarea, { label: "Required Food", placeholder: "State Required Food/s", name: "requiredFood", onBlur: props.onBlur, required: true, error: props.formErrors.requiredFood, value: props.workoutPlanFormEntity.requiredFood, onChange: props.onChange, rows: 4 }),
        React.createElement("div", { className: "form-check form-check-inline" },
            React.createElement(Checkbox, { name: "isActive", onCheck: props.onCheck, label: "Is Active Type", checked: props.workoutPlanFormEntity.isActive }))));
};
//# sourceMappingURL=workoutPlanForm.js.map