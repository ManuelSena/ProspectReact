import * as React from "react";
import { Tab, Tabs } from "../../common/components/Wizard";
import { WorkoutPlanForm1, PlanDirectionSidePanelDisplay, WorkoutPlanDirection, WorkoutPlanForm2 } from "./index";
import { WorkoutPlanFileSelectFinal } from "./workoutPlanFileSelectFinal";
export class WorkoutPlanPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "an-content-body no-padding" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-6" },
                        React.createElement(Tabs, { isCurrentTabIndexValid: true, onIndexChange: this.props.handleWizardButtonEnbabling },
                            React.createElement(Tab, { setDisplayToNone: true, tabIndex: 0 },
                                React.createElement(WorkoutPlanForm1, { workoutPlanFormEntity: this.props.workoutPlanFormEntity, onChange: this.props.onChange, formErrors: this.props.formErrors, onBlur: this.props.onBlur })),
                            React.createElement(Tab, { setDisplayToNone: true, tabIndex: 1 },
                                React.createElement(WorkoutPlanForm2, { workoutPlanFormEntity: this.props.workoutPlanFormEntity, onChange: this.props.onChange, formErrors: this.props.formErrors, onBlur: this.props.onBlur, onCheck: this.props.onCheck })),
                            React.createElement(Tab, { setDisplayToNone: true, tabIndex: 2 },
                                React.createElement(WorkoutPlanDirection, { workoutPlanFormEntity: this.props.workoutPlanFormEntity, dropDownListOptions: this.props.dropDownListOptions, onStepChange: this.props.onStepChange, formErrors: this.props.formErrors, onStepBlur: this.props.onStepBlur, addStep: this.props.addStep, deleteStep: this.props.deleteStep })),
                            React.createElement(Tab, { setDisplayToNone: true, tabIndex: 3 },
                                React.createElement("h3", null, "If you would like choose a photo for your plan. On the right you can review your plan before you submit"),
                                React.createElement(WorkoutPlanFileSelectFinal, { onSubmit: this.props.onSubmit, progress: this.props.uploadProgress, campaignImageURL: this.props.workoutPlanFormEntity.planImageURL, onGetBlobFile: this.props.onGetBlobFile, submitButtonDisplay: this.props.submitButtonDisplay, updateButtonDisplay: this.props.updateButtonDisplay, onUpdateClick: this.props.onUpdateClick, image: this.props.image })))),
                    React.createElement("div", { className: "col-md-6" },
                        React.createElement(PlanDirectionSidePanelDisplay, { workoutPlanFormProgressEntity: this.props.workoutPlanFormProgressEntity, progressBool: this.props.progressBool }))))));
    }
}
//# sourceMappingURL=WorkoutPlanPage.js.map