//import * as React from "react";
//import * as toastr from "toastr";
//import * as moment from "moment";
//import axios from "axios";
//import { IWorkoutPlanDirectionEntity, IWorkoutPlanDirectionForm, IWorkoutPlanDirectionListForm } from "../../interfaces/Workouts/index";
//import { WorkoutPlanDirectionForm } from "./workoutPlanDirectionForm";
//import { WorkoutPlanDirectionApi } from "../../api/Workouts/workoutPlanDirectionApi";
//import { PlanDirectionList } from "./workoutPlanDirectionView";
//import { IWorkoutPlanGridViewOptions } from "../../interfaces/Workouts/IWorkoutPlanGridViewOptions";
//import { IError, IKeyValue } from "../../interfaces";
//import { browserHistory } from "react-router";



////SET INTERFACE STATE
//interface IWorkoutPlanDirectionState {
//    planView: IWorkoutPlanDirectionEntity[];
//    workoutPlanDirectionItems: IWorkoutPlanDirectionEntity[];
//    workoutPlanDirectionEntity: IWorkoutPlanDirectionEntity;
//    options: IKeyValue[];
//    dropDownListOptions: IKeyValue[];
//    selectedValue: any;
//    formErrors: IWorkoutPlanDirectionErrors;
//    isFormValid: boolean,
//    isStepNameValid: boolean,
//    isDirectionsValid: boolean,
//    isRequirementsValid: boolean

//}

//interface IWorkoutPlanDirectionErrors {

//    stepName: string,
//    directions: string,
//    requirements: string

//}

//const FormErrors: React.StatelessComponent<IWorkoutPlanDirectionErrors> = (props) => {
//    return (

//        <div className="formErrors">
//            {Object.keys(props).map((fieldName, i) => {
//                if (props[fieldName].length > 0)
//                    return <p key={i}>{fieldName}{props[fieldName]}</p>
//            })}
//        </div>

//    );
//}

////REACT CLASS CONSTRUCTOR COMPONENT NEEDS A STATE
//export class WorkoutPlanDirection2 extends React.Component<{}, IWorkoutPlanDirectionState> {
//    constructor(props) {
//        super(props);
//        //STATE SETTINGS
//        this.state = {

//            workoutPlanDirectionEntity: {
//                id: 0,
//                durationTypeId: 0,
//                stepName: "",
//                directions: "",
//                requirements: ""
//            },


//            formErrors: {
//                stepName: "",
//                directions: "",
//                requirements: ""
//            },
//            planView: [],
//            dropDownListOptions: [],
//            options: [],
//            workoutPlanDirectionItems: [],
//            selectedValue: 1,
//            isFormValid: false,
//            isStepNameValid: false,
//            isDirectionsValid: false,
//            isRequirementsValid: false,
//        }
//        //EVENTS MUST BE SET IN STATE
//        this.onFieldChange = this.onFieldChange.bind(this),
//            this.onSubmit = this.onSubmit.bind(this),
//            this.onBlur = this.onBlur.bind(this),
//            this.listButtonClick = this.listButtonClick.bind(this),
//            this.validateField = this.validateField.bind(this),
//            this.validateForm = this.validateForm.bind(this),
//            this.onDropChange = this.onDropChange.bind(this)
//    }
//    /*----------------------------CONSTRUCTOR END--------------------------------
     


//     -----------------------------------EVENTS----------------------------------*/
//    private onDropChange(fieldName: string, fieldValue: any) {
//        const nextState = {
//            workoutPlanDirectionEntity: {
//                ...this.state.workoutPlanDirectionEntity,
//                [fieldName]: fieldValue
//            }
//        }
//        this.setState(nextState) //, () => { this.validateField(fieldName, fieldValue) });
//    };

//    private getAllIssueCategories() {
//        WorkoutPlanDirectionApi.getWorkoutPlanDirection(null)
//            .then((response) => {
//                console.log("These are the Workout Plan Directions" + response.items);
//                let unmappedCategories = response.items;
//                let categories = unmappedCategories.map((category) => {
//                    return { "key": category.id, "value": category.typeName }

//                })
//                this.setState({ options: categories })
//                this.getCurrentUserPlanDirection();
//            })
//    }

//    private getCurrentUserPlanDirection() {
//        WorkoutPlanDirectionApi.getUserWorkoutPlanDirection(null)
//            .then((response) => {
//                console.log("These are the Workout Plan Direction" + response.items);


//                this.setState({ workoutPlanDirectionItems: response.items })
//                //this.getDetailedIssueLogResponses();  
//            })
//    }

//    private listButtonClick(id: number, action: string) {
//        let ndx = this.state.workoutPlanDirectionItems.findIndex(x => x.id === id);
//        console.log("ndx", ndx);

//        if (action === "edit") {
//            if (ndx >= 0) {
//                this.setState({ workoutPlanDirectionEntity: this.state.workoutPlanDirectionItems[ndx] });
//            }
//        }
//        else if (action === "delete") {
//            this.state.workoutPlanDirectionItems.splice(ndx, 1)
//            let itms = [
//                ...this.state.workoutPlanDirectionItems
//            ];
//            this.loadDataList();

//        }
//    }

//    private onBlur(fieldName: any, fieldValue: any) {
//        const nextState = {
//            ...this.state,
//            workoutPlanDirectionEntity: {
//                ...this.state.workoutPlanDirectionEntity,
//                [fieldName]: fieldValue
//            }
//        }
//        this.setState(nextState, () => { this.validateField(fieldName, fieldValue) });
//    };


//    private onFieldChange(fieldName: any, fieldValue: any) {
//        const nextState = {
//            ...this.state,
//            workoutPlanDirectionEntity: {
//                ...this.state.workoutPlanDirectionEntity,
//                [fieldName]: fieldValue
//            }
//        }
//        if (fieldName == "durationTypeId") {
//            this.setState(nextState) //, () => { this.validateField(fieldName, fieldValue) });
//        } else {
//            this.setState(nextState)
//        }
//    }

//    private validateField(fieldName: any, fieldValue: any) {
//        let errorMessage = this.state.formErrors;
//        let isStepNameValid = this.state.isStepNameValid;
//        let isDirectionsValid = this.state.isDirectionsValid;
//        let isRequirementsValid = this.state.isRequirementsValid;

//        switch (fieldName) {

//            case "stepName":
//                isStepNameValid = fieldValue.length <= 25;
//                errorMessage.stepName = isStepNameValid ? "" : "Step Name is too long"
//                break;
//            case "directions":
//                isDirectionsValid = fieldValue.length <= 4000;
//                errorMessage.directions = isDirectionsValid ? "" : "Directions is too long"
//                break;
//            case "requirements":
//                isRequirementsValid = fieldValue.length <= 4000;
//                errorMessage.requirements = isRequirementsValid ? "" : "Requirement is too long"
//                break;
//            default: false;
//        }
//        this.setState({
//            formErrors: errorMessage,
//            isStepNameValid: isStepNameValid,
//            isDirectionsValid: isDirectionsValid,
//            isRequirementsValid: isRequirementsValid
//        }, this.validateForm);

//    }

//    private validateForm() {

//        this.setState({
//            isFormValid: this.state.isStepNameValid &&
//                this.state.isDirectionsValid &&
//                this.state.isRequirementsValid
//        });
//    }



//    //----------------------------EVENTS END--------------------------------


//    //-------------------------------API CALLS------------------------------
//    private onSubmit() {
//        //Object.keys(this.state.workoutPlanDirectionEntity).forEach((itm) => {
//        //    this.validateField(itm, this.state.workoutPlanDirectionEntity[itm])
//        //})
//        if (this.state.workoutPlanDirectionEntity.id > 0) {
//            WorkoutPlanDirectionApi.putWorkoutPlanDirection(this.state.workoutPlanDirectionEntity)
//                .then((response) => {
//                    console.log("PUT")
//                    toastr.success("WORKOUTPLAN PUT success")
//                    this.loadDataList();
//                }, (err) => {
//                    toastr.error("Failed update WORKOUTPLAN");
//                })
//                .catch((err) => {
//                    toastr.error("Failed update WORKOUTPLAN")
//                });

//        } else {
//            WorkoutPlanDirectionApi.postWorkoutPlanDirection(this.state.workoutPlanDirectionEntity)
//                .then((response) => {
//                    console.log(response)
//                    toastr.success("WORKOUTPLANDIRECTION Success");
//                    //Reset Form
//                    this.setState({
//                        ...this.state,
//                        workoutPlanDirectionEntity: {
//                            id: 0,
//                            durationTypeId: 0,
//                            stepName: "",
//                            directions: "",
//                            requirements: ""
//                        }
//                    });
//                    this.loadDataList();
//                }, (err) => {
//                    toastr.error("Failed to created WORKOUTPLANDIRECTION");
//                })
//                .catch((err) => {
//                    toastr.error("WORKOUTPLANDIRECTION fail, view console");
//                    console.log("saveError", err);
//                });
//        }
//    }

//    private loadDataList() {

//        WorkoutPlanDirectionApi.getWorkoutPlanDirection(null)

//            .then((response) => {
//                console.log("GET DIRECTION Success")
//                console.log(response)
//                this.setState({ workoutPlanDirectionItems: response.items });

//            })

//    }

//    public componentDidMount() {
//        this.loadDataList();
//    }
//    //<WorkoutPlanDirectionList
//    //    dataItems={this.state.workoutPlanDirectionItems}
//    //    onButtonClick={this.listButtonClick}
//    //    showDeleteButton={true}
//    //    showEditButton={true}
//    //    headerColumns={[
//    //        { columnName: "Step Name", columnStyle: "basis-20" },
//    //        { columnName: "Directions", columnStyle: "basis-20" },
//    //        { columnName: "Duration Type", columnStyle: "basis-20" },
//    //        { columnName: "Requirement", columnStyle: "basis-20" },
//    //    ]}
//    ///>
//    //-----------------------------API CALLS END---------------------
//    public render() {
//        return (
//            <div className="col-md-12">
//                <WorkoutPlanDirectionForm
//                    workoutPlanDirectionEntity={this.state.workoutPlanDirectionEntity}
//                    buttonDisabled={!this.state.isFormValid}
//                    onChange={this.onFieldChange}
//                    onSubmit={this.onSubmit}
//                    onBlur={this.onBlur}
//                    dropDownListOptions={this.state.dropDownListOptions}
//                    selectedValue={this.state.workoutPlanDirectionEntity.durationTypeId}
//                    onDropChange={this.onFieldChange}
//                    stepNameError={this.state.formErrors.stepName}
//                    directionError={this.state.formErrors.directions}
//                    requirementError={this.state.formErrors.requirements}
//                    options={this.state.options}
//                />
//                <div className="col-md-10">
//                    <PlanDirectionList
//                        planDirectionList={this.state.workoutPlanDirectionItems}
//                    />
//                </div>
//            </div>
//        )

//    }

//}