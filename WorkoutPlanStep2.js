import * as React from "react";
import { Textarea, Checkbox } from "../../common/components/form";
export const WorkoutPlanStep2 = (props) => {
    return (React.createElement("form", null,
        React.createElement(Textarea, { label: "Required Food", placeholder: "State Required Food/s", name: "requiredFood", onBlur: props.onBlur, required: true, className: "an-form-control", error: props.formErrors.requiredFood, value: props.workoutPlanFormEntity.requiredFood, onChange: props.onChange, rows: 4 }),
        React.createElement("div", { className: "form-check form-check-inline" },
            React.createElement(Checkbox, { name: "isActive", onCheck: props.onCheck, label: "Is Active Type", checked: props.workoutPlanFormEntity.isActive }))));
};
//# sourceMappingURL=WorkoutPlanStep2.js.map