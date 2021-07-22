import * as React from "react";
import * as toastr from "toastr";
import { IWorkoutPlanResultEntity, IWorkoutPlanResultListForm, IWorkoutPlanResultForm } from "../../interfaces/workouts/index";
import { WorkoutPlanResultForm } from "../../components/Workouts/workoutPlanResultForm";
import { WorkoutPlanResultApi } from "../../api/Workouts/workoutPlanResultApi";
import { browserHistory } from "react-router";
import { WorkoutPlanResultList } from "../../components/Workouts/workoutPlanResultList";

interface IWorkoutPlanResultErrors {
    startingWeight: string,
    goalWeight: string,
    currentWeight: string,
    isRecommended: string
}

interface IWorkoutPlanResultState {
    workoutPlanResultItems: IWorkoutPlanResultEntity[];
    workoutPlanResultEntity: IWorkoutPlanResultEntity
    formErrors: IWorkoutPlanResultErrors;
    isStartingWeightValid: boolean;
    isGoalWeightValid: boolean;
    isCurrentWeightValid: boolean;
    isRecommendedValid: boolean;
    isFormValid: boolean;
}

const FormErrors: React.StatelessComponent<IWorkoutPlanResultErrors> = (props) => {
    return (

        <div className="formErrors">
            {Object.keys(props).map((fieldName, i) => {
                if (props[fieldName].length > 0)
                    return <p key={i}>{fieldName} {props[fieldName]}</p>
            })}
        </div>

    );

}

export class WorkoutPlanResult extends React.Component<{}, IWorkoutPlanResultState> {
    constructor(props) {
        super(props);
        this.state = {

            workoutPlanResultEntity: {
                id: 0,
                userBaseId: 0,
                startingWeight: 0,
                goalWeight: 0,
                currentWeight: 0,
                isRecommended: false,


            },

            formErrors: {
                startingWeight: "",
                goalWeight: "",
                currentWeight: "",
                isRecommended: ""
            },

            isStartingWeightValid: false,
            isGoalWeightValid: false,
            isCurrentWeightValid: false,
            isRecommendedValid: false,
            isFormValid: false,
            workoutPlanResultItems: []

        }

            this.onBlur = this.onBlur.bind(this),
            this.onFieldChange = this.onFieldChange.bind(this),
            this.validateField = this.validateField.bind(this),
            this.validateForm = this.validateForm.bind(this),
            this.onSubmit = this.onSubmit.bind(this),
            this.listButtonClick = this.listButtonClick.bind(this),
            this.componentDidMount = this.componentDidMount.bind(this),
            this.getWorkoutResults = this.getWorkoutResults.bind(this),
            this.onUpdate = this.onUpdate.bind(this),
            this.onSubmit = this.onSubmit.bind(this)
    }

    //INITIAL MOUNT
    public componentDidMount() {
        this.getWorkoutResults();
    }

    private listButtonClick(id: number, action: string) {
        let ndx = this.state.workoutPlanResultItems.findIndex(x => x.id === id);

        if (action === "edit") {
            if (ndx >= 0) {
                this.setState({ workoutPlanResultEntity: this.state.workoutPlanResultItems[ndx] });
            }
        }

        else if (action === "delete") {
            this.state.workoutPlanResultItems.splice(ndx, 1)
            let itms = [
                ...this.state.workoutPlanResultItems
            ];
            this.getWorkoutResults();
        }
    }

    private onFieldChange(fieldName: any, fieldValue: any) {
        const nextState = {
            ...this.state,
            workoutPlanResultEntity: {
                ...this.state.workoutPlanResultEntity,
                [fieldName]: fieldValue
            }
        }
        this.setState(nextState, () => { this.validateField(fieldName, fieldValue) });
    }


    private onBlur(fieldName: string, fieldValue: any) {
        const nextState = {
            ...this.state,
            workoutPlanResutEntity: {
                ...this.state.workoutPlanResultEntity,
                [fieldName]: fieldValue,
            }
        }
        this.setState(nextState, () => { this.validateField(fieldName, fieldValue) });
    }

    private validateField(fieldName: any, fieldValue: any) {
        let errorMessage = this.state.formErrors;
        let isStartingWeightValid = this.state.isStartingWeightValid;
        let isGoalWeightValid = this.state.isGoalWeightValid;
        let isCurrentWeightValid = this.state.isCurrentWeightValid;
        let isRecommendedValid = this.state.isRecommendedValid;

        switch (fieldName) {

            case "startingWeight":
                isStartingWeightValid = fieldValue.length <= 7;
                errorMessage.startingWeight = isStartingWeightValid ? "" : "Weight is weigh too long"
                break;
            case "goalWeight":
                isGoalWeightValid = fieldValue.length <= 7;
                errorMessage.goalWeight = isGoalWeightValid ? "" : "Goal Weight is too long"
                break;
            case "currentWeight":
                isCurrentWeightValid = fieldValue.length <= 7;
                errorMessage.currentWeight = isCurrentWeightValid ? "" : "Current Weight is too long"
            default: break;
        }
        this.setState(
            {
                formErrors: errorMessage,
                isStartingWeightValid: isStartingWeightValid,
                isGoalWeightValid: isGoalWeightValid,
                isCurrentWeightValid: isCurrentWeightValid,
            }, this.validateForm);
    }

    private validateForm() {
        this.setState({

            isFormValid:
                this.state.isStartingWeightValid &&
                this.state.isCurrentWeightValid &&
                this.state.isGoalWeightValid
        });
    }

    private getWorkoutResults() {
        WorkoutPlanResultApi.getWorkoutPlanResult()
            .then((response) => {
                console.log("GET")
                toastr.success("WORKOUTPLANRESULT GET success")
                this.setState({ workoutPlanResultEntity: response.items })
            }, (err) => {
                toastr.error("Failed GET");
            })
            .catch((err) => {
                toastr.error("Failed GET")
            });
    }

    private onUpdate() {
        WorkoutPlanResultApi.putWorkoutPlanResult(this.state.workoutPlanResultEntity)
            .then((response) => {
                console.log("PUT")
                toastr.success("WORKOUTPLANRESULT PUT success")
                this.getWorkoutResults();
            }, (err) => {
                toastr.error("Failed update WORKOUTPLANRESULT");
            })
            .catch((err) => {
                toastr.error("Failed update WORKOUTPLANRESULT")
            });
    }

    private onSubmit() {
        WorkoutPlanResultApi.postWorkoutPlanResult(this.state.workoutPlanResultEntity)
            .then((response) => {
                console.log(response)
                toastr.success("WORKOUTPLANRESULT Success");
                this.getWorkoutResults();
            }, (err) => {
                toastr.error("Failed to created WORKOUTPLANRESULT");
            })
            .catch((err) => {
                toastr.error("WORKOUTPLANRESULT fail, view console");
                console.log("saveError", err);
            });
    }

    public render() {
        return (
            <div className="col-md-12">
                <div className="col-md-6">
                    <WorkoutPlanResultForm
                        onBlur={this.onBlur}
                        buttonDisabled={!this.state.isFormValid}
                        onSubmit={this.onSubmit}
                        workoutPlanResultEntity={this.state.workoutPlanResultEntity}
                        onChange={this.onFieldChange}
                        currentWeightError={this.state.formErrors.currentWeight}
                        startingWeightError={this.state.formErrors.startingWeight}
                        goalWeightError={this.state.formErrors.goalWeight}
                        recommendedError={this.state.formErrors.isRecommended}
                    />
                </div>

                <div className="col-md-12">
                    <WorkoutPlanResultList
                        dataItems={this.state.workoutPlanResultItems}
                        onButtonClick={this.listButtonClick}
                        showDeleteButton={true}
                        showEditButton={true}
                        headerColumns={[
                            { columnName: "Starting Weight", columnStyle: "basis-20" },
                            { columnName: "Current Weight", columnStyle: "basis-20" },
                            { columnName: "Goal Weight", columnStyle: "basis-20" },
                            { columnName: "Recommended / Not Recommended", columnStyle: "basis-40" }]}
                    />
                </div>
            </div>

        )
    }
}