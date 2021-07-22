import * as React from "react";
import * as moment from "moment";
import { Button, EmbeddedInput, EmbeddedDropDownList, EmbeddedTextarea, Checkbox } from "../../common/components/form";
import { IKeyValue } from "../../interfaces";
import { IWorkoutPlanFormErrors } from "../../interfaces/Workouts";
import { IWorkoutPlanEntity, IWorkoutPlanDirectionEntity } from "../../interfaces/workouts/index";

interface IWorkoutPlanDirectionStepForm {
    workoutPlanFormEntity: IWorkoutPlanEntity;
    dropDownListOptions: IKeyValue[];
    onStepChange: (fieldName: string, value: string, key: number) => void;
    formErrors: IWorkoutPlanFormErrors;
    onStepBlur: (fieldName: string, fieldValue: string, key: number) => void;
    addStep: () => void;
    deleteStep: () => void;
}

export class WorkoutPlanDirectionStepForm extends React.Component<IWorkoutPlanDirectionStepForm, {}>{
    constructor(props) {
        super(props);
        this.createStepForm = this.createStepForm.bind(this)
    }

    private createStepForm(step: IWorkoutPlanDirectionEntity, index: number) {
        return (
            <div key={index.toString()}>
                <EmbeddedDropDownList
                    name="durationTypeId"
                    label="Duration Type"
                    onChange={this.props.onStepChange}
                    selectedValue={this.props.workoutPlanFormEntity.planDirections[index].durationTypeId}
                    options={this.props.dropDownListOptions}
                    embedKey={index}
                    error={this.props.formErrors.directionsErrors[index].durationTypeId}  
                />
                <EmbeddedInput
                    label="Step Name"
                    name="stepName"
                    placeholder="What Will You Call This Step?" 
                    value={this.props.workoutPlanFormEntity.planDirections[index].stepName}
                    onChange={this.props.onStepChange}
                    required={true}
                    className="an-form-control"
                    error={this.props.formErrors.directionsErrors[index].stepName}
                    onBlur={this.props.onStepBlur}
                    embedKey={index}
                />
                <EmbeddedTextarea
                    label="Requirements"
                    name="requirements"
                    placeholder="What Will Some Of The Requirements Be...?"
                    value={this.props.workoutPlanFormEntity.planDirections[index].requirements}
                    onChange={this.props.onStepChange}
                    required={true}
                    className="an-form-control"
                    error={this.props.formErrors.directionsErrors[index].requirements}  
                    onBlur={this.props.onStepBlur}
                    rows={3}
                    embedKey={index} />
                <EmbeddedTextarea
                    label="Directions"
                    name="directions"
                    placeholder="Place Directions Here"
                    value={this.props.workoutPlanFormEntity.planDirections[index].directions}
                    onChange={this.props.onStepChange}
                    required={true}
                    className="an-form-control"
                    error={this.props.formErrors.directionsErrors[index].directions} 
                    onBlur={this.props.onStepBlur}
                    rows={3}
                    embedKey={index}
                />
            </div>
        );
    }

    public render() {
        return (
            <div>
                <form>
                    {this.props.workoutPlanFormEntity.planDirections.map((step, index) => this.createStepForm(step, index))}
                    <Button className="an-btn an-btn-default"
                        label="Add Step"
                        onClick={this.props.addStep}
                        disabled={false} />
                    &nbsp;&nbsp;
			        <Button className="an-btn an-btn-default"
                        label="Delete Step"
                        onClick={this.props.deleteStep}
                        disabled={this.props.workoutPlanFormEntity.planDirections.length > 1 ? false : true} />
                </form>
            </div>
        );

    }

}