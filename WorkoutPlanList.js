import * as React from "react";
export const WorkoutPlanList = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "an-single-component with-shadow" },
            React.createElement("div", { className: "an-component-header" },
                React.createElement("h6", null, "Workout Plans:")),
            React.createElement("div", { className: "an-component-body" },
                React.createElement("div", { className: "an-helper-block" },
                    React.createElement("div", { className: "scrollable" },
                        React.createElement("table", { className: "table table-striped" },
                            React.createElement("thead", null,
                                React.createElement("tr", null, props.headerColumns != null ? (props.headerColumns.map((itm, i) => {
                                    return React.createElement("th", { key: i, className: itm.columnStyle },
                                        React.createElement("strong", null, itm.columnName));
                                }))
                                    : (""))),
                            props.dataItems.map(buildRow(props))))),
                React.createElement("div", { className: "ps-scrollbar-y-rail" },
                    React.createElement("div", { className: "ps-scrollbar-y" }))))));
};
const buildRow = (props) => (itm, ndx) => {
    return (React.createElement("tbody", { key: ndx },
        React.createElement("tr", null,
            React.createElement("td", { className: "basis-20" }, itm.planName),
            React.createElement("td", { className: "basis-20" }, itm.planDetails),
            React.createElement("td", { className: "basis-20" }, itm.requiredFood),
            React.createElement("td", { className: "basis-20" }, itm.isActive ? "Active" : "Inactive"),
            React.createElement("td", { className: "basis-10" },
                props.showEditButton ? (React.createElement("button", { type: "button", className: "an-btn an-btn-primary", onClick: buttonClick(props, itm.id, "edit") }, "Edit")) : (""),
                props.showDeleteButton ? (React.createElement("button", { type: "button", className: "an-btn btn-danger", onClick: buttonClick(props, itm.id, "delete") }, "Delete")) : ("")))));
};
const buttonClick = (props, id, action) => (e) => {
    props.onButtonClick(id, action);
};
//# sourceMappingURL=WorkoutPlanList.js.map