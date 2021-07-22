import * as React from "react";
import { Button, EmbeddedInput, EmbeddedDropDownList, EmbeddedTextarea } from "../../common/components/form";
//Put this in the PlanDirection to map out forms on the fly based upon how many states we have made
//
export class WorkoutPlanDirection extends React.Component {
    constructor(props) {
        super(props);
        this.createStepForm = this.createStepForm.bind(this);
    }
    createStepForm(step, index) {
        return (React.createElement("div", { key: index.toString() },
            React.createElement(EmbeddedDropDownList, { name: "durationTypeId", label: "Duration (Required)", selectedValue: this.props.workoutPlanFormEntity.planDirections[index].durationTypeId, options: this.props.dropDownListOptions, onChange: this.props.onStepChange, embedKey: index, error: this.props.formErrors.directionsErrors[index].durationTypeId }),
            React.createElement(EmbeddedInput, { label: "Step Name", name: "stepName", placeholder: "(Required) Write the Step Name here", value: this.props.workoutPlanFormEntity.planDirections[index].stepName, onChange: this.props.onStepChange, required: true, className: "an-form-control", error: this.props.formErrors.directionsErrors[index].stepName, onBlur: this.props.onStepBlur, embedKey: index }),
            React.createElement(EmbeddedTextarea, { label: "Requirements", name: "requirements", placeholder: "(Required) Please write down the requirements for this step", value: this.props.workoutPlanFormEntity.planDirections[index].requirements, onChange: this.props.onStepChange, required: true, className: "an-form-control", error: this.props.formErrors.directionsErrors[index].requirements, onBlur: this.props.onStepBlur, rows: 2, embedKey: index }),
            React.createElement(EmbeddedTextarea, { label: "Directions", name: "directions", placeholder: "(Required) Please write down the directions for this step", value: this.props.workoutPlanFormEntity.planDirections[index].directions, onChange: this.props.onStepChange, required: true, className: "an-form-control", error: this.props.formErrors.directionsErrors[index].directions, onBlur: this.props.onStepBlur, rows: 2, embedKey: index })));
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("form", null,
                this.props.workoutPlanFormEntity.planDirections.map((step, index) => this.createStepForm(step, index)),
                React.createElement(Button, { className: "an-btn an-btn-primary", label: "Add Step", onClick: this.props.addStep, disabled: false }),
                "\u00A0\u00A0",
                React.createElement(Button, { className: "an-btn an-btn-primary-transparent", label: "Delete Step", onClick: this.props.deleteStep, disabled: this.props.workoutPlanFormEntity.planDirections.length > 1 ? false : true }))));
    }
}
//# sourceMappingURL=WorkoutPlanDirection.js.map