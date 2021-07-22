//WorkoutPlan Container; Manuel Sena
//import Scroll from 'react-scroll';
import * as React from "react";
import * as moment from "moment";
import axios from "axios";
import { IWorkoutPlanStepBoolean, IWorkoutPlanDirectionEntity, IWorkoutPlanEntity, IWorkoutPlanStepErrors, IWorkoutPlanFormErrors, IWorkoutPlanProgressBoolean, IWorkoutPlanForm } from "../../interfaces/Workouts";
import { WorkoutPlanApi } from "../../api/Workouts/workoutPlansIndex";
import { Tabs, Tab } from "../../common/components/ActivatableTabs";
import { WorkoutPlanPage, WorkoutPlanTable } from "./";
import { browserHistory } from "react-router";
import { workoutsApi } from "../../api/workouts";
import { IKeyValue } from "../../interfaces";
import { apiUpload } from "../../api/apiUpload";

interface IWorkoutPlanState {
    activeTab: number;
    workoutPlans: IWorkoutPlanEntity[];
    updateButtonDisplay: boolean;
    submitButtonDisplay: boolean;
    workoutPlanFormEntity: IWorkoutPlanEntity;
    workoutPlanFormProgressEntity: IWorkoutPlanEntity;
    dropDownListOptions: IKeyValue[];
    formErrors: IWorkoutPlanFormErrors;
    isPlanNameValid: boolean;
    isPlanDetailsValid: boolean;
    isRequiredFoodValid: boolean;
    isWorkoutPlanFormValid: boolean;
    isPlanDirectionsValid: boolean;
    stepBool: IWorkoutPlanStepBoolean[];
    progressBool: IWorkoutPlanProgressBoolean;
    isCurrentTabIndexValid: boolean;
    uploadProgress: number;
    blobFile: File;
}
//----------------------------CONSTRUCTOR--------------------------------
export class WorkoutPlanContainer extends React.Component<{}, IWorkoutPlanState> {
    constructor(props) {
        super(props);

        this.state = {
            workoutPlans: [],
            activeTab: 1,
            updateButtonDisplay: false,
            submitButtonDisplay: true,
            workoutPlanFormEntity: {
                id: 0,
                planName: "",
                planDetails: "",
                durationTypeId: 0,
                requiredFood: "",
                planDirections: [],
                createdById: 0,
                createdDate: new Date(),
                modifiedById: 0,
                modifiedDate: new Date(),
                isActive: false,
                planImageURL: "/assets/img/260x260.png",
            },
            workoutPlanFormProgressEntity: {
                id: 0,
                planName: "",
                planDetails: "",
                durationTypeId: 0,
                requiredFood: "",
                planDirections: [],
                createdById: 0,
                createdDate: new Date(),
                modifiedById: 0,
                modifiedDate: new Date(),
                isActive: false,
                planImageURL: "/assets/img/260x260.png"
            },
            dropDownListOptions: [{ key: 0, value: "-- Select --" }],
            formErrors: {
                planName: "",
                planDetails: "",
                durationTypeId: 0,
                requiredFood: "",
                isActive: true,
                directionsErrors: []
            },
            //Form states
            //These are the 2 tabs
            isPlanNameValid: false,
            isPlanDetailsValid: false,
            isRequiredFoodValid: false,
            //Form validation
            isWorkoutPlanFormValid: false,
            //Mutliple bools for all Plan Directions 
            stepBool: [],
            isPlanDirectionsValid: false,
            progressBool: {
                step1Valid: true,
                step2Valid: true,
                step3Valid: true
            },
            isCurrentTabIndexValid: false,
            uploadProgress: 0,
            blobFile: null
        }

        this.handleWizardButtonEnbabling = this.handleWizardButtonEnbabling.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getWorkoutPlans = this.getWorkoutPlans.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onStepChange = this.onStepChange.bind(this);
        this.onStepBlur = this.onStepBlur.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.validateField = this.validateField.bind(this);
        this.validateEmbedField = this.validateEmbedField.bind(this);
        this.validatePlanDirections = this.validatePlanDirections.bind(this);
        this.validateProgress = this.validateProgress.bind(this);
        this.validateProgressInProcess = this.validateProgressInProcess.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.onGetBlobFile = this.onGetBlobFile.bind(this);
        this.upload = this.upload.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addStep = this.addStep.bind(this);
        this.deleteStep = this.deleteStep.bind(this);
        this.clearStateAndForm = this.clearStateAndForm.bind(this);
        this.getDurationTypeCategories = this.getDurationTypeCategories.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onUpdateClick = this.onUpdateClick.bind(this);
        this.changeTab = this.changeTab.bind(this);
    }
    /*----------------------------CONSTRUCTOR END--------------------------------
   
     --------------------------------EVENTS----------------------------------*/
    public componentDidMount() {
        this.getDurationTypeCategories();
    }

    private upload() {
        var formData = new FormData();
        formData.append("img", this.state.blobFile);
        var config = {};
        config = {
            onUploadProgress: (progressEvent) => {
                const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                if (totalLength !== null) {
                    this.setState({
                        uploadProgress: (progressEvent.loaded / totalLength * 100)
                    })
                }
            }
        }

        apiUpload("/api/upload", formData, config)
            .then((response) => {
                this.setState({
                    workoutPlanFormEntity: {
                        ...this.state.workoutPlanFormEntity,
                        planImageURL: response
                    }
                }, () => this.submitForm());
            })
    }

    private onSubmit() {
        this.validateProgress();
        if (this.state.isWorkoutPlanFormValid) {
            this.upload();
        }
    }

    private changeTab(givenTab: number) {
        this.setState({
            ...this.state,
            activeTab: givenTab
        });
    }

    private deleteStep() {
        window.scrollTo(0, 200)
        let directions = this.state.workoutPlanFormEntity.planDirections;
        directions.pop();
        let progressDirections = JSON.parse(JSON.stringify(directions));

        let errorMsgs = this.state.formErrors.directionsErrors;
        errorMsgs.pop();

        let stepBoolean = this.state.stepBool;
        stepBoolean.pop();

        let isPlanDirectionsValid = this.validatePlanDirections(stepBoolean);
        let isWorkoutPlanFormValid =
            this.state.isPlanNameValid
            && this.state.isPlanDetailsValid
            && this.state.isRequiredFoodValid
            && isPlanDirectionsValid;

        this.setState({
            workoutPlanFormEntity: {
                ...this.state.workoutPlanFormEntity,
                planDirections: directions
            },

            workoutPlanFormProgressEntity: {
                ...this.state.workoutPlanFormProgressEntity,
                planDirections: progressDirections
            },

            formErrors: {
                ...this.state.formErrors,
                planDirections: errorMsgs
            },
            stepBool: stepBoolean,

            isPlanDirectionsValid: isPlanDirectionsValid,
            isWorkoutPlanFormValid: isWorkoutPlanFormValid
        }, this.validateProgressInProcess)
    }

    private addStep() {

        let newDirection: IWorkoutPlanDirectionEntity = {
            id: 0,
            durationTypeId: 0,
            durationTypeName: "",
            stepName: "",
            directions: "",
            requirements: ""
        }

        let newErrorMsgs: IWorkoutPlanStepErrors = {
            stepName: "",
            directions: "",
            requirements: "",
            durationTypeId: ""
        }

        let newStepBoolean: IWorkoutPlanStepBoolean = {
            isStepNameValid: false,
            isDirectionsValid: false,
            isRequirementsValid: false,
            isDurationTypeIdValid: false
        }

        let directions = this.state.workoutPlanFormEntity.planDirections;
        directions.push(newDirection);
        let progressDirections = JSON.parse(JSON.stringify(directions));
        let errorMsgs = this.state.formErrors.directionsErrors;
        errorMsgs.push(newErrorMsgs);
        let stepBoolean = this.state.stepBool;

        stepBoolean.push(newStepBoolean);

        let isPlanDirectionsValid = this.validatePlanDirections(stepBoolean);
        this.validateProgressInProcess();

        this.setState({
            workoutPlanFormEntity: {
                ...this.state.workoutPlanFormEntity,
                planDirections: directions
            },
            workoutPlanFormProgressEntity: {
                ...this.state.workoutPlanFormProgressEntity,
                planDirections: progressDirections
            },
            formErrors: {
                ...this.state.formErrors,
                planDirections: errorMsgs
            },
            stepBool: stepBoolean,
            isPlanDirectionsValid: isPlanDirectionsValid,
            isWorkoutPlanFormValid: false
        }, this.validateProgressInProcess)
    }

    private onStepBlur(fieldName: string, fieldValue: string, key: number) {

        let planDirections = this.state.workoutPlanFormEntity.planDirections;
        planDirections[key] = {
            ...planDirections[key],
            [fieldName]: fieldValue
        }

        const nextState = {
            workoutPlanFormEntity: {
                ...this.state.workoutPlanFormEntity,
                planDirections: planDirections
            }
        }
        this.setState(nextState, () => { this.validateEmbedField(fieldName, fieldValue, key) });
    }

    private onBlur(fieldName: string, fieldValue: string) {
        const nextState = {
            workoutPlanFormEntity: {
                ...this.state.workoutPlanFormEntity,
                [fieldName]: fieldValue
            }
        }
        this.setState(nextState, () => { this.validateField(fieldName, fieldValue) });
    };

    private onGetBlobFile(blobFile: File) {
        this.setState({
            blobFile: blobFile
        })
    }

    private onCheck(name: string, checked: boolean) {
        const nextState = {
            ...this.state,
            workoutPlanFormProgressEntity: {
                ...this.state.workoutPlanFormProgressEntity,
                [name]: checked
            },
            workoutPlanFormEntity: {
                ...this.state.workoutPlanFormEntity,
                [name]: checked
            }
        }
        this.setState(nextState);
    }

    private onStepChange(fieldName: string, fieldValue: string, key: number) {
        let planDirections = this.state.workoutPlanFormEntity.planDirections;
        planDirections[key] = {
            ...planDirections[key],
            [fieldName]: fieldValue,

        }
        const nextState = {
            workoutPlanFormEntity: {
                ...this.state.workoutPlanFormEntity,
                planDirections: planDirections
            }
        }
      
        this.setState(nextState, () => {
            if (fieldName === "durationTypeId") {
                let optionsArray = this.state.dropDownListOptions;
                let typeName = "";
                let parsedDurationTypeId = Number(this.state.workoutPlanFormEntity.planDirections[key].durationTypeId);
                for (let i = 0; i < optionsArray.length; i++) {
                    if (optionsArray[i].key === parsedDurationTypeId) {
                        typeName = optionsArray[i].value;
                    }
                };

                let planDirections2 = this.state.workoutPlanFormEntity.planDirections;

                planDirections2[key] = {
                    ...planDirections[key],
                    durationTypeName: typeName,
                }

                const veryNextState = {
                    workoutPlanFormProgressEntity: {
                        ...this.state.workoutPlanFormProgressEntity,
                        planDirections: planDirections
                    },
                    workoutPlanFormEntity: {
                        ...this.state.workoutPlanFormEntity,
                        planDirections: planDirections
                    }
                }
                this.setState(veryNextState, () => { this.validateEmbedField(fieldName, fieldValue, key) });
            }
        });

    }

    private onChange(fieldName: string, fieldValue: string) {
        const nextState = {
            ...this.state,
            workoutPlanFormEntity: {
                ...this.state.workoutPlanFormEntity,
                [fieldName]: fieldValue
            }
        }
        this.setState(nextState, () => { this.validateField(fieldName, fieldValue) });
    }

    private handleWizardButtonEnbabling(data) {

    }

    private clearStateAndForm() {
        this.setState({
            workoutPlans: [],
            updateButtonDisplay: false,
            submitButtonDisplay: true,
            workoutPlanFormEntity: {
                id: 0,
                planName: "",
                planDetails: "",
                durationTypeId: 0,
                requiredFood: "",
                planDirections: [],
                createdById: 0,
                createdDate: new Date(),
                modifiedById: 0,
                modifiedDate: new Date(),
                isActive: false,
                planImageURL: "/assets/img/260x260.png"
            },
            workoutPlanFormProgressEntity: {
                id: 0,
                planName: "",
                planDetails: "",
                durationTypeId: 0,
                requiredFood: "",
                planDirections: [],
                createdById: 0,
                createdDate: new Date(),
                modifiedById: 0,
                modifiedDate: new Date(),
                isActive: false,
                planImageURL: "/assets/img/260x260.png"
            },
            dropDownListOptions: [{ key: 0, value: "-- Select --" }],
            formErrors: {
                planName: "",
                planDetails: "",
                requiredFood: "",
                isActive: true,
                durationTypeId: 0,
                directionsErrors: []
            },
            isPlanNameValid: false,
            isPlanDetailsValid: false,
            isRequiredFoodValid: false,
            isWorkoutPlanFormValid: false,
            stepBool: [],
            isPlanDirectionsValid: false,
            progressBool: {
                step1Valid: true,
                step2Valid: true,
                step3Valid: true
            },
            isCurrentTabIndexValid: false,
            uploadProgress: 0,
            blobFile: null
        });
        this.getDurationTypeCategories();
    }
    /*----------------------------END EVENTS--------------------------------

   --------------------------------VALIDATE----------------------------------*/

    private validatePlanDirections(stepBool: IWorkoutPlanStepBoolean[]) {
        let isPlanDirectionsValid = true;
        stepBool.map((step, i) => {
            if (!step.isStepNameValid || !step.isDirectionsValid || !step.isRequirementsValid) {
                isPlanDirectionsValid = false;
            }
        });
        return isPlanDirectionsValid;
    }

    private validateEmbedField(fieldName: string, fieldValue: string, key: number) {
        let errorMessages = this.state.formErrors.directionsErrors;
        let stepBoolean = this.state.stepBool;
        let isStepNameValid = stepBoolean[key].isStepNameValid;
        let isDirectionsValid = stepBoolean[key].isDirectionsValid;
        let isRequirementsValid = stepBoolean[key].isRequirementsValid;
        let isDurationTypeIdValid = stepBoolean[key].isDurationTypeIdValid;

        switch (fieldName) {
            case "durationTypeId":
                stepBoolean[key].isDurationTypeIdValid = Number(fieldValue) !== 0;
                errorMessages[key].durationTypeId = stepBoolean[key].isDurationTypeIdValid ? "" : "Select A Duration Type";
                break;
            case "stepName":
                stepBoolean[key].isStepNameValid = fieldValue.length <= 25 && fieldValue.length > 0;
                errorMessages[key].stepName = stepBoolean[key].isStepNameValid ? "" : "Step Name is required and no more than 25 characters";
                break;
            case "directions":
                stepBoolean[key].isDirectionsValid = fieldValue.length <= 4000 && fieldValue.length > 0;
                errorMessages[key].directions = stepBoolean[key].isDirectionsValid ? "" : "Directions are required and no more than 4000 characters";
                break;
            case "requirements":
                stepBoolean[key].isRequirementsValid = fieldValue.length <= 1000 && fieldValue.length > 0;
                errorMessages[key].requirements = stepBoolean[key].isRequirementsValid ? "" : "Requirements are required and no more than 1000 characters";
                break;
        }
        let isPlanDirectionsValid = this.validatePlanDirections(stepBoolean);
        let entity = JSON.parse(JSON.stringify(this.state.workoutPlanFormEntity));
        this.setState({
            formErrors: {
                ...this.state.formErrors,
                directionsErrors: errorMessages
            },
            stepBool: stepBoolean,
            isPlanDirectionsValid: isPlanDirectionsValid,
            workoutPlanFormProgressEntity: entity
        }, this.validateForm)
    }

    private validateProgress() {
        let isPlanDirectionsValid = this.validatePlanDirections(this.state.stepBool);
        this.setState({
            progressBool: {
                step1Valid: (this.state.isPlanNameValid && this.state.isPlanDetailsValid),
                step2Valid: this.state.isRequiredFoodValid,
                step3Valid: this.state.isPlanDirectionsValid
            },
            isPlanDirectionsValid: isPlanDirectionsValid
        })
    }

    private validateProgressInProcess() {
        let progressBool = this.state.progressBool;
        if (this.state.isPlanNameValid && this.state.isPlanDetailsValid) {
            progressBool.step1Valid = true;
        }
        if (this.state.isRequiredFoodValid) {
            progressBool.step2Valid = true;
        }
        if (this.state.isPlanDirectionsValid) {
            progressBool.step3Valid = true;
        }
        this.setState({
            progressBool: progressBool
        })
    }

    private validateField(fieldName: string, fieldValue: string) {
        let errorMessages = this.state.formErrors;
        let isPlanNameValid = this.state.isPlanNameValid;
        let isPlanDetailsValid = this.state.isPlanDetailsValid;
        let isRequiredFoodValid = this.state.isRequiredFoodValid;
        switch (fieldName) {
            case "planName":
                isPlanNameValid = fieldValue.length > 0 && fieldValue.length < 150;
                errorMessages.planName = isPlanNameValid ? "" : "You must add a Plan Name, or it is too long (150 characters)"
                break;
            case "planDetails":
                isPlanDetailsValid = fieldValue.length > 0 && fieldValue.length < 2000;
                errorMessages.planDetails = isPlanDetailsValid ? "" : "You must add a Plan Details, or it is too long (2000 characters)"
                break;
            case "requiredFood":
                isRequiredFoodValid = fieldValue.length > 0 && fieldValue.length < 2000;
                errorMessages.requiredFood = isRequiredFoodValid ? "" : "Required Food it must be no more than 2000 characters";
                break;
            default:
                break;
        }
        let entity = JSON.parse(JSON.stringify(this.state.workoutPlanFormEntity));
        this.setState(
            {
                formErrors: errorMessages,
                isPlanNameValid: isPlanNameValid,
                isPlanDetailsValid: isPlanDetailsValid,
                isRequiredFoodValid: isRequiredFoodValid,
                workoutPlanFormProgressEntity: entity
            }, this.validateForm);
    }

    private validateForm() {
        this.setState({
            isWorkoutPlanFormValid:
                this.state.isPlanNameValid
                && this.state.isPlanDetailsValid
                && this.state.isRequiredFoodValid
                && this.state.isPlanDirectionsValid
        });
    }
    /*----------------------------END VALIDATE--------------------------------

    --------------------------------API CALLS-------------------------------*/

    private getDurationTypeCategories() {
        workoutsApi.getDurationTypesList()
            .then((response) => {
                let options = this.state.dropDownListOptions;
                response.items.map((item) => {
                    options.push({ key: item.id, value: item.typeName });
                });
                this.setState({ dropDownListOptions: options }, () => {
                    let entity = JSON.parse(JSON.stringify(this.state.workoutPlanFormEntity));
                    this.setState({ workoutPlanFormProgressEntity: entity });
                });
                this.addStep();
                this.getWorkoutPlans();
            })
    }

    private getWorkoutPlans() {
        WorkoutPlanApi.getWorkoutPlans()
            .then((response) => {
                this.setState({ workoutPlans: response.items });
            }, (err) => { }).catch((err) => { });
    }

    private submitForm() {
        WorkoutPlanApi.postWorkoutPlans(this.state.workoutPlanFormEntity)
            .then((response) => {
                this.changeTab(1);
                this.clearStateAndForm();
                this.getWorkoutPlans();
            }, (err) => { }).catch((err) => { });
    }

    private onUpdateClick() {
        WorkoutPlanApi.updateWorkoutPlans(this.state.workoutPlanFormEntity)
            .then((response) => {
                this.clearStateAndForm();
            }, (err) => { })
            .catch((err) => { });
    }

    private onEditClick(plan: IWorkoutPlanEntity) {
        for (var i = 0; i < plan.planDirections.length; i++) {
            this.addStep();
        }
        const nextState = {
            ...this.state,
            workoutPlanFormEntity: plan,
            workoutPlanFormProgressEntity: plan,
            updateButtonDisplay: true,
            submitButtonDisplay: false,
            isPlanNameValid: true,
            isPlanDetailsValid: true,
            isRequiredFoodValid: true,
            isWorkoutPlanFormValid: true,
            isPlanDirectionsValid: true,
            progressBool: {
                step1Valid: true,
                step2Valid: true,
                step3Valid: true
            },
        }
        this.setState(nextState, () => { this.changeTab(0); })
    }

    private onDeleteClick(id) {
        WorkoutPlanApi.deleteWorkoutPlans(id)
            .then((response) => {
                this.getWorkoutPlans();
            }, (err) => { }).catch((err) => { });
    }
    //----------------------------END API CALLS-------------------------------
    public render() {
        return (
            <div>
                <div className="an-profile-banner" style={{
                    background: "URL('https://sabio-training.s3-us-west-2.amazonaws.com/9c3d18bf-b71d-4d26-a0b8-29b633dc1f07_sub-buzz-13236-1495485747-11.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    width: "100%"
                }}>
                    <div className="an-profile-overlay"></div>
                    <div className="an-inner-page-title">
                        <div className="container">
                            <h1>Workout Plans</h1>
                        </div>
                    </div>
                </div>
                <Tabs handleTabClick={this.changeTab} activeTabIndex={this.state.activeTab}>
                    <Tab tabHeader="Workout Plan Form" tabIndex={0}>
                        <WorkoutPlanPage
                            workoutPlanFormEntity={this.state.workoutPlanFormEntity}
                            workoutPlanFormProgressEntity={this.state.workoutPlanFormProgressEntity}
                            handleWizardButtonEnbabling={this.handleWizardButtonEnbabling}
                            onChange={this.onChange}
                            onBlur={this.onBlur}
                            onCheck={this.onCheck}
                            formErrors={this.state.formErrors}
                            dropDownListOptions={this.state.dropDownListOptions}
                            onStepChange={this.onStepChange}
                            addStep={this.addStep}
                            deleteStep={this.deleteStep}
                            onStepBlur={this.onStepBlur}
                            onSubmit={this.onSubmit}
                            uploadProgress={this.state.uploadProgress}
                            onGetBlobFile={this.onGetBlobFile}
                            progressBool={this.state.progressBool}
                            onUpdateClick={this.onUpdateClick}
                            submitButtonDisplay={this.state.submitButtonDisplay}
                            updateButtonDisplay={this.state.updateButtonDisplay}
                            image={this.state.workoutPlanFormEntity.planImageURL}
                        />
                    </Tab>
                    <Tab tabHeader="Workut Plans" tabIndex={1} >
                        <WorkoutPlanTable
                            workoutPlans={this.state.workoutPlans}
                            refreshPlans={this.getWorkoutPlans}
                            onEditClick={this.onEditClick}
                            onDeleteClick={this.onDeleteClick}
                        />
                    </Tab>
                </Tabs >
            </div>
        );
    }
}
