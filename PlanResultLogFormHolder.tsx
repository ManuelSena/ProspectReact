import * as React from "react";
import { IPlanResultLogFormHolder } from "../../interfaces/Workouts/IPlanResultLogFormHolder";

// assigns classes required to show tab as open or closed, based on props.expanded boolean
export const PlanResultLogFormHolder: React.StatelessComponent<IPlanResultLogFormHolder> = (props) => {

    return (
        <div className="panel panel-default">
            <a role="button" data-toggle="collapse" data-parent="#accordion" href={"#collapse" + noSpace(props.label)} aria-expanded={props.expanded} aria-controls={"collapse" + noSpace(props.label)} className={props.expanded ? "" : "collapsed"} style={{ textDecoration: "none", color: "#333333" }}>
                <div className="panel-heading" role="tab" id={"heading" + noSpace(props.label)}>
                    <div className="panel-title">
                        <h6>{props.label}</h6>
                    </div>
                </div>
            </a>
            <div id={"collapse" + noSpace(props.label)} className={"panel-collapse collapse " + (props.expanded ? "in" : "")} role="tabpanel" aria-labelledby={"heading" + noSpace(props.label)} aria-expanded={props.expanded} style={props.expanded ? {} : { height: "0px" }}>
                <div className="panel-body">
                    {props.children}
                </div>
            </div>
        </div>
    )
};

const noSpace = (val: string) => {
    return val.replace(/\s/g, '');
}