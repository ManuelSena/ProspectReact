import * as React from "react";
import * as moment from "moment";
import { Button, Input, DropDownList, Textarea, Checkbox } from "../../common/components/form";
import { IWorkoutPlanEntity } from "../../interfaces/Workouts/IWorkoutPlanEntity";


interface IWorkoutPlanForm1 {
    workoutPlanFormEntity: IWorkoutPlanEntity;
    onChange: (fieldName: string, value: string) => void;
    onBlur: (fieldName: string, fieldValue: string) => void;
    formErrors: IWorkoutPlanFormErrors;
}

interface IWorkoutPlanForm2 {
    workoutPlanFormEntity: IWorkoutPlanEntity;
    onChange: (fieldName: string, value: string) => void;
    onBlur: (fieldName: string, fieldValue: string) => void;
    formErrors: IWorkoutPlanFormErrors;
    onCheck: (name: string, checked: boolean) => void;
}

interface IWorkoutPlanFormErrors {
    planName: string;
    planDetails: string;
    requiredFood: string;
    isActive: boolean;
    //durationTypeId: number;

}
export const WorkoutPlanForm1: React.StatelessComponent<IWorkoutPlanForm1> = (props: IWorkoutPlanForm1) => {
    return (
        <form>
            <div className="panel panel-default">
                <div className="panel-body">
                    <Input
                        label="Plan Name"
                        name="planName"
                        value={props.workoutPlanFormEntity.planName}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        error={props.formErrors.planName}
                        placeholder="Enter Plan Name" />
                    <Textarea
                        label="Plan Details"
                        name="planDetails"
                        value={props.workoutPlanFormEntity.planDetails}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        error={props.formErrors.planDetails}
                        placeholder="Enter Plan Details"
                        rows={2} />
                </div>
            </div>
        </form>)
};

export const WorkoutPlanForm2: React.StatelessComponent<IWorkoutPlanForm2> = (props: IWorkoutPlanForm2) => {
    return (
        <form>
            <Textarea
                label="Required Food"
                placeholder="State Required Food/s"
                name="requiredFood"
                onBlur={props.onBlur}
                required={true}
                error={props.formErrors.requiredFood}
                value={props.workoutPlanFormEntity.requiredFood}
                onChange={props.onChange}
                rows={4}
            />
            <div className="form-check form-check-inline">
                <Checkbox
                    name="isActive"
                    onCheck={props.onCheck}
                    label="Is Active Type"
                    checked={props.workoutPlanFormEntity.isActive}
                />
            </div>
        </form>
    );
}