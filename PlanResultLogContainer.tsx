import * as React from "react";
import * as toastr from "toastr";
import { browserHistory } from "react-router";
import { IPlanResultLogEntity, IPlanResultLogForm, IPlanResultLogList } from "../../interfaces/Workouts/index";
import { PlanResultLogPage } from "../../components/Workouts/PlanResultLogPage"
import { PlanResultLogApi } from "../../api/Workouts/PlanResultLogApi"
import { PlanResultLogForm } from "./PlanResultLogForm";
import { PlanResultLogList } from "./PlanResultLogList";
import { IError, IKeyValue } from "../../interfaces";
import { IWorkoutPlanGridViewOptions } from "../../interfaces/Workouts/IWorkoutPlanGridViewOptions";
import { UserApi } from "../../api/users";
import { apiUpload } from "../../api/apiUpload";




const FormErrors: React.StatelessComponent<IPlanResultLogErrors> = (props) => {
    return (
        <div className="formErrors">
            {Object.keys(props).map((fieldName, i) => {
                if (props[fieldName].length > 0)
                    return <p key={i}>{fieldName}{props[fieldName]}</p>
            })}
        </div>
    );
}

interface IPlanResultLogErrors {
    id: string,
    planResultId: string,
    directionTypeId: string,
    weighIn: string,
    nutrition: string,
    createdDate: string,
}

interface IPlanResultLogState {
    planResultLogEntity: IPlanResultLogEntity;
    planResultLogItems: IPlanResultLogEntity[];
    formErrors: IPlanResultLogErrors;
    options: IKeyValue[];
}

export class PlanResultLog extends React.Component<{}, IPlanResultLogState> {
    constructor(props) {
        super(props);

        this.state = {
            planResultLogEntity: {
                id: 0,
                planResultId: 0,
                directionTypeId: 0,
                weighIn: 0,
                nutrition: "",
                createdDate: new Date()
            },
            options: [],
            planResultLogItems: [],
            formErrors: {
                id: "",
                planResultId: "",
                directionTypeId: "",
                weighIn: "",
                nutrition: "",
                createdDate: ""
            }
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.listButtonClick = this.listButtonClick.bind(this);
    }



    private listButtonClick(id: number, action: string) {
        let ndx = this.state.planResultLogItems.findIndex(x => x.id === id);
        console.log("ndx", ndx);

        if (action === "edit") {
            if (ndx >= 0) {
                this.setState({ planResultLogEntity: this.state.planResultLogItems[ndx] });
            }
        }
        else if (action === "delete") {
            this.state.planResultLogItems.splice(ndx, 1)
            let itms = [
                ...this.state.planResultLogItems
            ];
            this.loadDataList();

        }
    }

    private onFieldChange(fieldName: any, fieldValue: any) {
        const nextState = {
            ...this.state,
            planResultLogEntity: {
                ...this.state.planResultLogEntity,
                [fieldName]: fieldValue
            }
        }
        this.setState(nextState);
    }


    private onSubmit() {
        PlanResultLogApi.postPlanResultLog(this.state.planResultLogEntity)
            .then((response) => {
                console.log(response)
                toastr.success("PlanResult Submitted");
            }, (err) => {
                toastr.error("Failed to Submit PlanResult")
            })
            .catch((err) => {
                toastr.error("PlanResult failed, view console");
                console.log(err);
            });
    };

    private loadDataList() {
        PlanResultLogApi.getPlanResultLog()
            .then((response) => {
                console.log("GET DIRECTION Success")
                console.log(response)
                this.setState({ planResultLogItems: response.items });
            })
    }

    public componentDidMount() {
        this.loadDataList();
    }


    public render() {
        return (
            <div className="col-md-12">
                <PlanResultLogPage
                    planResultLogEntity={this.state.planResultLogEntity}
                    onChange={this.onFieldChange}
                    onSubmit={this.onSubmit}      />


                <PlanResultLogList
                    dataItems={this.state.planResultLogItems}
                    onButtonClick={this.onSubmit}
                    showDeleteButton={true}
                    showEditButton={true}
                    headerColumns={[
                        { columnName: "Id", columnStyle: "basis-20" },
                        { columnName: "planResultId", columnStyle: "basis-20" },
                        { columnName: "directionTypeId", columnStyle: "basis-20" },
                        { columnName: "weighIn", columnStyle: "basis-20" },
                        { columnName: "nutrition", columnStyle: "basis-20" },
                        { columnName: "createdDate", columnStyle: "basis-20" }
                    ]}
                />
            </div>



        )


    }
}
