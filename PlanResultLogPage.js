import * as React from "react";
import { PlanResultLogForm } from "./PlanResultLogForm";
export const PlanResultLogPage = (props) => {
    return (React.createElement("div", { className: "tg-modal-content" },
        React.createElement(PlanResultLogForm, { planResultLogEntity: props.planResultLogEntity, onChange: props.onChange, onSubmit: props.onSubmit })));
};
//# sourceMappingURL=PlanResultLogPage.js.map