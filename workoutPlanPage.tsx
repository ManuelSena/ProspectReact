import * as React from "react";
import { Tab, Tabs, ITab, ITabs } from "../../common/components/Wizard";
import { WorkoutPlanForm1, PlanDirectionSidePanelDisplay, WorkoutPlanDirection, WorkoutPlanForm2 } from "./index";
import { WorkoutPlanFileSelectFinal } from "./workoutPlanFileSelectFinal";
import { IKeyValue } from "../../interfaces";
import { IWorkoutPlanFormErrors, IWorkoutPlanProgressBoolean, IWorkoutPlanEntity, IWorkoutPlanStepErrors, IWorkoutPlanDirectionEntity, IWorkoutPlanForm} from "../../interfaces/workouts/index";

interface IWorkoutPlanPageProps {
    handleWizardButtonEnbabling: (data) => void;
    workoutPlanFormEntity: IWorkoutPlanEntity;
    workoutPlanFormProgressEntity: IWorkoutPlanEntity;
    onChange: (fieldName: string, fieldValue: string) => void;
    onBlur: (fieldName: string, fieldValue: string) => void;
    onCheck: (name: string, checked: boolean) => void;
    formErrors: IWorkoutPlanFormErrors;
    dropDownListOptions: IKeyValue[];
    onStepChange: (fieldName: string, fieldValue: string, key: number) => void;
    addStep: () => void;
    deleteStep: () => void;
    onStepBlur: (fieldName: string, fieldValue: string, key: number) => void;
    onSubmit: () => void;
    uploadProgress: number;
    onGetBlobFile: (blobFile: File) => void;
    progressBool: IWorkoutPlanProgressBoolean;
    onUpdateClick: () => void;
    submitButtonDisplay: boolean;
    updateButtonDisplay: boolean;
    image: string;
}

export class WorkoutPlanPage extends React.Component<IWorkoutPlanPageProps, {}>{
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div className="an-content-body no-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Tabs isCurrentTabIndexValid={true} onIndexChange={this.props.handleWizardButtonEnbabling}>
                                <Tab setDisplayToNone={true} tabIndex={0}>
                                    <WorkoutPlanForm1
                                        workoutPlanFormEntity={this.props.workoutPlanFormEntity}
                                        onChange={this.props.onChange}
                                        formErrors={this.props.formErrors}
                                        onBlur={this.props.onBlur}
                                    />
                                </Tab>
                                <Tab setDisplayToNone={true} tabIndex={1}>
                                    <WorkoutPlanForm2
                                        workoutPlanFormEntity={this.props.workoutPlanFormEntity}
                                        onChange={this.props.onChange}
                                        formErrors={this.props.formErrors}
                                        onBlur={this.props.onBlur}
                                        onCheck={this.props.onCheck}
                                    />
                                </Tab>
                                <Tab setDisplayToNone={true} tabIndex={2}>

                                    <WorkoutPlanDirection
                                        workoutPlanFormEntity={this.props.workoutPlanFormEntity}
                                        dropDownListOptions={this.props.dropDownListOptions}
                                        onStepChange={this.props.onStepChange}
                                        formErrors={this.props.formErrors}
                                        onStepBlur={this.props.onStepBlur}
                                        addStep={this.props.addStep}
                                        deleteStep={this.props.deleteStep}
                                    />
                                </Tab>
                                <Tab setDisplayToNone={true} tabIndex={3}>
                                    <h3>If you would like choose a photo for your plan. On the right you can review your plan before you submit</h3>
                                    <WorkoutPlanFileSelectFinal
                                        onSubmit={this.props.onSubmit}
                                        progress={this.props.uploadProgress}
                                        campaignImageURL={this.props.workoutPlanFormEntity.planImageURL}
                                        onGetBlobFile={this.props.onGetBlobFile}
                                        submitButtonDisplay={this.props.submitButtonDisplay}
                                        updateButtonDisplay={this.props.updateButtonDisplay}
                                        onUpdateClick={this.props.onUpdateClick}
                                        image={this.props.image}
                                    />

                                </Tab>
                              </Tabs> 
                        </div>
                        <div className="col-md-6">
                            <PlanDirectionSidePanelDisplay
                                workoutPlanFormProgressEntity={this.props.workoutPlanFormProgressEntity}
                                progressBool={this.props.progressBool}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

