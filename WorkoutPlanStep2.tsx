import * as React from "react";
import { Input, Button, DropDownList, Textarea, Checkbox } from "../../common/components/form";
import { IWorkoutPlanEntity, IWorkoutPlanForm2 } from "../../interfaces/Workouts";

export const WorkoutPlanStep2: React.StatelessComponent<IWorkoutPlanForm2> = (props: IWorkoutPlanForm2) => {
    return (
        <form>
            <Textarea
                label="Required Food"
                placeholder="State Required Food/s"
                name="requiredFood"
                onBlur={props.onBlur}
                required={true}
                className="an-form-control"
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