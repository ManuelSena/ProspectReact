import * as React from "react";
import { PlanResultLogHeader } from "./PlanResultLogHeader";
import { PlanResultLogFormHolder } from "./PlanResultLogFormHolder";
import { PlanResultLogForm } from "./PlanResultLogForm";
import { IPlanResultLogForm } from "../../interfaces/workouts/IPlanResultLogForm";

export const PlanResultLogPage: React.StatelessComponent<IPlanResultLogForm> = (props: IPlanResultLogForm) => {
    return (
        <div className="tg-modal-content">
            <PlanResultLogForm
                planResultLogEntity={props.planResultLogEntity}
                onChange={props.onChange}
                onSubmit={props.onSubmit}
            />
        </div>
    )
};