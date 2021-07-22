//import * as React from "react";
//import { IWorkoutPlanDirectionForm } from "../../interfaces/Workouts/IWorkoutPlanDirectionForm";
//import { IWorkoutPlanDirectionEntity } from "../../interfaces/Workouts/IWorkoutPlanDirectionEntity";
//import { Input, Button, Textarea, DropDownList } from "../../common/components/form";
////import { WorkoutPlanDirection } from "./workoutPlanDirection";

////THIS COMPONENT IS STARTED FROM AN INTERFACE 
//export const WorkoutPlanDirectionForm: React.StatelessComponent<IWorkoutPlanDirectionForm> = (props: IWorkoutPlanDirectionForm) => {
//    return (

//        <form>
//            <Input
//                label="Step Name"
//                name="stepName"
//                value={props.workoutPlanDirectionEntity.stepName}
//                onBlur={props.onBlur}
//                error={props.stepNameError}
//                placeholder="Enter Step Name"
//                onChange={props.onChange} />

//            <Textarea
//                label="Directions"
//                name="directions"
//                error={props.directionError}
//                onBlur={props.onBlur}
//                value={props.workoutPlanDirectionEntity.directions}
//                placeholder="Enter Directions"
//                onChange={props.onChange}
//                rows={2}/>

//            <Textarea
//                label="Requirements"
//                name="requirements"
//                onBlur={props.onBlur}
//                error={props.requirementError}
//                value={props.workoutPlanDirectionEntity.requirements}
//                placeholder="Enter Requirements"
//                onChange={props.onChange}
//                rows={2} />

//            <DropDownList
//                name="durationTypeId"
//                label="Duration Type"
//                onChange={props.onDropChange}
//                selectedValue={props.selectedValue}
//                options={props.dropDownListOptions}
//            />

//            <Button className="an-btn an-btn-primary"
//                label="Submit Directions"
//                disabled={props.buttonDisabled}
//                onClick={props.onSubmit}/>
                
//        </form>)

//};