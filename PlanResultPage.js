import * as React from "react";
import * as toastr from "toastr";
import { PlanResultLogApi } from "../../api/Workouts/PlanResultLogApi";
import { PlanResultLogForm } from "./PlanResultLogForm";
import { PlanResultLogList } from "./PlanResultLogList";
const FormErrors = (props) => {
    return (React.createElement("div", { className: "formErrors" }, Object.keys(props).map((fieldName, i) => {
        if (props[fieldName].length > 0)
            return React.createElement("p", { key: i },
                fieldName,
                props[fieldName]);
    })));
};
export class PlanResultLog extends React.Component {
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
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.listButtonClick = this.listButtonClick.bind(this);
    }
    listButtonClick(id, action) {
        let ndx = this.state.planResultLogItems.findIndex(x => x.id === id);
        console.log("ndx", ndx);
        if (action === "edit") {
            if (ndx >= 0) {
                this.setState({ planResultLogEntity: this.state.planResultLogItems[ndx] });
            }
        }
        else if (action === "delete") {
            this.state.planResultLogItems.splice(ndx, 1);
            let itms = [
                ...this.state.planResultLogItems
            ];
            this.loadDataList();
        }
    }
    onFieldChange(fieldName, fieldValue) {
        const nextState = Object.assign({}, this.state, { planResultLogEntity: Object.assign({}, this.state.planResultLogEntity, { [fieldName]: fieldValue }) });
        this.setState(nextState);
    }
    onSubmit() {
        PlanResultLogApi.postPlanResultLog(this.state.planResultLogEntity)
            .then((response) => {
            console.log(response);
            toastr.success("PlanResult Submitted");
        }, (err) => {
            toastr.error("Failed to Submit PlanResult");
        })
            .catch((err) => {
            toastr.error("PlanResult failed, view console");
            console.log(err);
        });
    }
    ;
    loadDataList() {
        PlanResultLogApi.getPlanResultLog()
            .then((response) => {
            console.log("GET DIRECTION Success");
            console.log(response);
            this.setState({ planResultLogItems: response.items });
        });
    }
    componentDidMount() {
        this.loadDataList();
    }
    render() {
        return (React.createElement("div", { className: "col-md-12" },
            React.createElement(PlanResultLogForm, { planResultLogEntity: this.state.planResultLogEntity, onSubmit: this.onSubmit, onChange: this.onFieldChange }),
            React.createElement(PlanResultLogList, { dataItems: this.state.planResultLogItems, onButtonClick: this.onSubmit, showDeleteButton: true, showEditButton: true, headerColumns: [
                    { columnName: "Id", columnStyle: "basis-20" },
                    { columnName: "planResultId", columnStyle: "basis-20" },
                    { columnName: "directionTypeId", columnStyle: "basis-20" },
                    { columnName: "weighIn", columnStyle: "basis-20" },
                    { columnName: "nutrition", columnStyle: "basis-20" },
                    { columnName: "createdDate", columnStyle: "basis-20" }
                ] })));
    }
}
//# sourceMappingURL=PlanResultPage.js.map