import * as React from "react";
import { Input, Checkbox, Button } from "../../common/components/form";
export const DurationTypeForm = (props) => {
    return (React.createElement("div", { className: "an-single-component" },
        React.createElement("div", { className: "an-formarea" },
            React.createElement("div", { className: "an-component-header grey-bg" },
                React.createElement("h6", null, "Workout Duration Type")),
            React.createElement("div", { className: "an-component-body" },
                React.createElement("div", { className: "an-helper-block" },
                    React.createElement("form", null,
                        React.createElement("fieldset", null,
                            React.createElement("div", { className: "form-group" },
                                React.createElement(Input, { label: "Type Name", name: "typeName", value: props.durationTypeEntity.typeName, onChange: props.onChange, placeholder: "Type Name" })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement(Input, { label: "Description", name: "typeDescription", value: props.durationTypeEntity.typeDescription, onChange: props.onChange, placeholder: "Type Description" })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement(Checkbox, { label: "Is Active", name: "isActive", checked: props.durationTypeEntity.isActive, onCheck: props.onChange })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement(Button, { className: "an-btn an-btn-prospect-transparent", label: "Save Workout Duration Type", onClick: props.onSubmit })))))))));
};
//# sourceMappingURL=DurationTypeForm.js.map