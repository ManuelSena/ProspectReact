import * as React from "react";
import * as moment from "moment";
import { Button, EmbeddedInput, EmbeddedDropDownList, EmbeddedTextarea, Checkbox } from "../../common/components/form";
import { IKeyValue } from "../../interfaces";
import { IWorkoutPlanDirectionEntity, IWorkoutPlanEntity } from "../../interfaces/Workouts";
import { IWorkoutPlanFormErrors } from "../../interfaces/Workouts/IWorkoutPlanFormErrors";

interface IWorkoutPlanDirectionForm {
    workoutPlanFormEntity: IWorkoutPlanEntity;
    dropDownListOptions: IKeyValue[];
    onStepChange: (fieldName: string, value: string, key: number) => void;
    formErrors: IWorkoutPlanFormErrors;
    onStepBlur: (fieldName: string, fieldValue: string, key: number) => void;
    addStep: () => void;
    deleteStep: () => void;
}
//Put this in the PlanDirection to map out forms on the fly based upon how many states we have made
//

export class WorkoutPlanDirection extends React.Component<IWorkoutPlanDirectionForm, {}>{
    constructor(props) {
        super(props);
        this.createStepForm = this.createStepForm.bind(this)
    }
    private createStepForm(step: IWorkoutPlanDirectionEntity, index: number) {

        return (

            <div key={index.toString()}>
                <EmbeddedDropDownList
                    name="durationTypeId"
                    label="Duration (Required)"
                    selectedValue={this.props.workoutPlanFormEntity.planDirections[index].durationTypeId}
                    options={this.props.dropDownListOptions}
                    onChange={this.props.onStepChange}
                    embedKey={index}
                    error={this.props.formErrors.directionsErrors[index].durationTypeId}

                />
                <EmbeddedInput
                    label="Step Name"
                    name="stepName"
                    placeholder="(Required) Write the Step Name here"
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
                    placeholder="(Required) Please write down the requirements for this step"
                    value={this.props.workoutPlanFormEntity.planDirections[index].requirements}
                    onChange={this.props.onStepChange}
                    required={true}
                    className="an-form-control"
                    error={this.props.formErrors.directionsErrors[index].requirements}
                    onBlur={this.props.onStepBlur}
                    rows={2}
                    embedKey={index} />

                <EmbeddedTextarea
                    label="Directions"
                    name="directions"
                    placeholder="(Required) Please write down the directions for this step"
                    value={this.props.workoutPlanFormEntity.planDirections[index].directions}
                    onChange={this.props.onStepChange}
                    required={true}
                    className="an-form-control"
                    error={this.props.formErrors.directionsErrors[index].directions}
                    onBlur={this.props.onStepBlur}
                    rows={2}
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
                    <Button className="an-btn an-btn-primary"
                        label="Add Step"
                        onClick={this.props.addStep}
                        disabled={false} />
                    &nbsp;&nbsp;
			        <Button className="an-btn an-btn-primary-transparent"
                        label="Delete Step"
                        onClick={this.props.deleteStep}
                        disabled={this.props.workoutPlanFormEntity.planDirections.length > 1 ? false : true} />
                </form>
            </div>

        );

    }

}







