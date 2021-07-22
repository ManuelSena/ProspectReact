import * as React from "react";
import { Input, Button, Textarea } from "../../common/components/form";
export const PlanResultLogForm = (props) => {
    return (React.createElement("div", { className: "an-single-component" },
        React.createElement("div", { className: "an-formarea" },
            React.createElement("div", { className: "an-component-header grey-bg" },
                React.createElement("h6", null, "Plan Result Log")),
            React.createElement("div", { className: "an-component-body" },
                React.createElement("div", { className: "an-helper-block" },
                    React.createElement("form", { className: "tg-planresultlog", method: "post" },
                        React.createElement("fieldset", null,
                            React.createElement("div", { className: "form-group" },
                                React.createElement(Input, { type: "number", label: "Weight In", name: "weighIn", value: props.planResultLogEntity.weighIn, placeholder: "Enter Weight", onChange: props.onChange })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement(Textarea, { label: "Nutrition", name: "nutrition", value: props.planResultLogEntity.nutrition, placeholder: "Enter Nutrition", onChange: props.onChange })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement(Button, { className: "an-btn an-btn-primary", label: "Submit", onClick: props.onSubmit })))))))));
};
//# sourceMappingURL=PlanResultLogForm.js.map