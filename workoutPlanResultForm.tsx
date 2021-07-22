import * as React from "react";
import { IWorkoutPlanResultForm, IWorkoutPlanResultEntity } from "../../interfaces/Workouts/index";
import { Input, Button, Checkbox } from "../../common/components/form";

export const WorkoutPlanResultForm: React.StatelessComponent<IWorkoutPlanResultForm> = (props: IWorkoutPlanResultForm) => {
    return (

        <form>
            <div className="panel panel-default">
                <div className="panel-header">Workout Result</div>
                <div className="panel-body">

                    <Input
                        type="number"
                        name="startingWeight"
                        label="Starting Weight"
                        onChange={props.onChange}
                        value={props.workoutPlanResultEntity.startingWeight} //.ToString()
                        placeholder="Enter Starting Weight"
                    />
                    <Input
                        type="number"
                        name="currentWeight"
                        label="Current Weight"
                        onChange={props.onChange}
                        value={props.workoutPlanResultEntity.currentWeight} //
                        placeholder="Enter Current Weight"
                    />
                    <Input
                        type="number"
                        name="goalWeight"
                        label="Goal Weight"
                        onChange={props.onChange}
                        value={props.workoutPlanResultEntity.goalWeight} //
                        placeholder="Enter Starting Weight"
                    />
                    <Checkbox
                        name="isRecommended"
                        onCheck={props.onChange}
                        label="Recommended"
                        checked={props.workoutPlanResultEntity.isRecommended}
                    />
                    <Button className="an-btn an-btn-primary"
                        disabled={props.buttonDisabled}
                        label="Workout Plan Submit"
                        onClick={props.onSubmit}
                    />
                </div>
            </div>

        </form>


    )
}