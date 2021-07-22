import * as React from "react";
import { IGridViewOptions } from "../../interfaces";
import { IDurationTypeEntity } from "../../interfaces/workouts";

export const DurationTypeList: React.StatelessComponent<IGridViewOptions<IDurationTypeEntity>> = (props: IGridViewOptions<IDurationTypeEntity>) => {
    return (
        <React.Fragment>
            <div className="row">
                {props.headerColumns != null ? (
                    props.headerColumns.map((itm, i) => {
                        return <div key={i} className={itm.columnStyle}><strong>{itm.columnName}</strong></div>
                    })
                )
                    : ("")
                }
            </div>
            {props.dataItems.map(buildRow(props))}  
            </React.Fragment>
    );
}

const buildRow = (props: IGridViewOptions<IDurationTypeEntity>) => (itm: IDurationTypeEntity, ndx: number) => {
    return (<div className="container col-md-12" key={ndx}>
        <br />
        <div className="row">
            <div className="col-md-3"><strong>{itm.typeName}</strong></div>
            <div className="col-md-3">{itm.typeDescription}</div>
            <div className="col-md-3">{itm.isActive ? "Active" : "Inactive"}</div>
            <div className="col-md-3">
                {props.showEditButton ? (<button type="button" className="an-btn an-btn-edit-transparent" onClick={buttonClick(props, itm.id, "edit")}>Edit</button>) : ("")}
                {props.showDeleteButton ? (<button type="button" className="an-btn an-btn-edit-transparent" onClick={buttonClick(props, itm.id, "delete")}>Delete</button>) : ("")}
            </div>
        </div>
        <hr />
    </div>);
}

const buttonClick = (props: IGridViewOptions<IDurationTypeEntity>, id: number, action: string) => (e: React.SyntheticEvent<HTMLButtonElement>) => {
    props.onButtonClick(id, action);
}
