import * as React from "react";
import { Button, EmbeddedInput, EmbeddedDropDownList, EmbeddedTextarea } from "../../common/components/form";
export class WorkoutPlanDirectionStepForm extends React.Component {
    constructor(props) {
        super(props);
        this.createStepForm = this.createStepForm.bind(this);
    }
    createStepForm(step, index) {
        return (React.createElement("div", { key: index.toString() },
            React.createElement(EmbeddedDropDownList, { name: "durationTypeId", label: "Duration Type", onChange: this.props.onStepChange, selectedValue: this.props.workoutPlanFormEntity.planDirections[index].durationTypeId, options: this.props.dropDownListOptions, embedKey: index, error: this.props.formErrors.directionsErrors[index].durationTypeId }),
            React.createElement(EmbeddedInput, { label: "Step Name", name: "stepName", placeholder: "What Will You Call This Step?", value: this.props.workoutPlanFormEntity.planDirections[index].stepName, onChange: this.props.onStepChange, required: true, className: "an-form-control", error: this.props.formErrors.directionsErrors[index].stepName, onBlur: this.props.onStepBlur, embedKey: index }),
            React.createElement(EmbeddedTextarea, { label: "Requirements", name: "requirements", placeholder: "What Will Some Of The Requirements Be...?", value: this.props.workoutPlanFormEntity.planDirections[index].requirements, onChange: this.props.onStepChange, required: true, className: "an-form-control", error: this.props.formErrors.directionsErrors[index].requirements, onBlur: this.props.onStepBlur, rows: 3, embedKey: index }),
            React.createElement(EmbeddedTextarea, { label: "Directions", name: "directions", placeholder: "Place Directions Here", value: this.props.workoutPlanFormEntity.planDirections[index].directions, onChange: this.props.onStepChange, required: true, className: "an-form-control", error: this.props.formErrors.directionsErrors[index].directions, onBlur: this.props.onStepBlur, rows: 3, embedKey: index })));
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("form", null,
                this.props.workoutPlanFormEntity.planDirections.map((step, index) => this.createStepForm(step, index)),
                React.createElement(Button, { className: "an-btn an-btn-default", label: "Add Step", onClick: this.props.addStep, disabled: false }),
                "\u00A0\u00A0",
                React.createElement(Button, { className: "an-btn an-btn-default", label: "Delete Step", onClick: this.props.deleteStep, disabled: this.props.workoutPlanFormEntity.planDirections.length > 1 ? false : true }))));
    }
}
//# sourceMappingURL=WorkoutPlanDirectionStepForm.js.map