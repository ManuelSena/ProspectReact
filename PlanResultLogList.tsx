import * as React from "react";
import { IWorkoutPlanGridViewOptions } from "../../interfaces/Workouts/IWorkoutPlanGridViewOptions";
import { IPlanResultLogEntity } from "../../interfaces/Workouts/IPlanResultLogEntity";

export const PlanResultLogList: React.StatelessComponent<IWorkoutPlanGridViewOptions<IPlanResultLogEntity>> = (props: IWorkoutPlanGridViewOptions<IPlanResultLogEntity>) => {
    return (

        <React.Fragment>
            <div className="an-single-component with shadow">
                <div className="an-component-header">
                    <h6>Workout Plan Directions:</h6>
                </div>
                <div className="an-component-body">
                    <div className="an-helper-block">
                        <div className="scrollable">

                            <table className="table table-striped">

                                <thead>
                                    <tr>
                                        {props.headerColumns != null ? (
                                            props.headerColumns.map((itm, i) => {
                                                return <th key={i} className={itm.columnStyle}><strong>{itm.columnName}</strong></th>
                                            })
                                        )
                                            : ("")
                                        }
                                    </tr>

                                </thead>
                                {props.dataItems.map(buildRow(props))}
                            </table>
                        </div>
                    </div>
                    <div className="ps-scrollbar-y-rail">
                        <div className="ps-scrollbar-y"></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

const buttonClick = (props: IWorkoutPlanGridViewOptions<IPlanResultLogEntity>, id: number, action: string) => (e: React.SyntheticEvent<HTMLButtonElement>) => {
    props.onButtonClick(id, action);
}

const buildRow = (props: IWorkoutPlanGridViewOptions<IPlanResultLogEntity>) => (itm: IPlanResultLogEntity, ndx: number) => {
    return (

        <tbody key={ndx}>
            <tr>
                <td className="basis-20">{itm.id}</td>
                <td className="basis-20">{itm.planResultId}</td>
                <td className="basis-20">{itm.directionTypeId}</td>
                <td className="basis-20">{itm.weighIn}</td>
                <td className="basis-20">{itm.nutrition}</td>
                <td className="basis-20">{itm.createdDate}</td>
                <td className="basis-20">
                    {props.showEditButton ? (<button type="button" className="an-btn an-btn-primary" onClick={buttonClick(props, itm.id, "edit")}>Edit</button>) : ("")}
                    {props.showDeleteButton ? (<button type="button" className="an-btn an-btn-primary" onClick={buttonClick(props, itm.id, "delete")}>Delete</button>) : ("")}
                </td>
            </tr>

        </tbody>
    )
}