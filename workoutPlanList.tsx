import * as React from "react";
import { IWorkoutPlanGridViewOptions } from "../../interfaces/Workouts/IWorkoutPlanGridViewOptions";
import { IWorkoutPlanEntity } from "../../interfaces/Workouts/IWorkoutPlanEntity"

export const WorkoutPlanList: React.StatelessComponent<IWorkoutPlanGridViewOptions<IWorkoutPlanEntity>> = (props: IWorkoutPlanGridViewOptions<IWorkoutPlanEntity>) => {

    return (
        <React.Fragment>

            <div className="an-single-component with-shadow">
                <div className="an-component-header">
                    <h6>Workout Plans:</h6>
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
    )

}

const buildRow = (props: IWorkoutPlanGridViewOptions<IWorkoutPlanEntity>) => (itm: IWorkoutPlanEntity, ndx: number) => {

    return (

        <tbody key={ndx}>
            <tr>
                <td className="basis-20">{itm.planName}</td>
                <td className="basis-20">{itm.planDetails}</td>
                <td className="basis-20">{itm.requiredFood}</td>
                <td className="basis-20">{itm.isActive ? "Active" : "Inactive"}</td>
                <td className="basis-10">
                    {props.showEditButton ? (<button type="button" className="an-btn an-btn-primary" onClick={buttonClick(props, itm.id, "edit")}>Edit</button>) : ("")}
                    {props.showDeleteButton ? (<button type="button" className="an-btn btn-danger" onClick={buttonClick(props, itm.id, "delete")}>Delete</button>) : ("")}
                </td>
            </tr>
        </tbody>
    );
}


const buttonClick = (props: IWorkoutPlanGridViewOptions<IWorkoutPlanEntity>, id: number, action: string) => (e: React.SyntheticEvent<HTMLButtonElement>) => {
    props.onButtonClick(id, action);
}