import * as React from "react";
import { Button } from "../../common/components/form";
import { FileSelectorCrop } from "../../common/components";
export const WorkoutPlanFileSelectFinal = (props) => {
    return (React.createElement("div", null,
        React.createElement("form", { action: "#" },
            React.createElement(FileSelectorCrop, { placeholderImage: props.image, showProgressBar: true, onGetBlobFile: props.onGetBlobFile, progress: props.progress }),
            React.createElement("div", { className: "row", style: { margin: 0 } },
                React.createElement("div", { style: props.submitButtonDisplay ? { display: "block" } : { display: "none" } },
                    React.createElement(Button, { className: "btn an-btn-primary pull-right", label: "Submit", onClick: props.onSubmit })),
                React.createElement("div", { style: props.updateButtonDisplay ? { display: "block" } : { display: "none" } },
                    React.createElement(Button, { className: "btn an-btn-primary pull-right", label: "Update", onClick: props.onUpdateClick }))))));
};
//# sourceMappingURL=workoutPlanFileSelectFinal.js.map