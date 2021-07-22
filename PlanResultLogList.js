import * as React from "react";
export const PlanResultLogList = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "an-single-component with shadow" },
            React.createElement("div", { className: "an-component-header" },
                React.createElement("h6", null, "Workout Plan Directions:")),
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
const buttonClick = (props, id, action) => (e) => {
    props.onButtonClick(id, action);
};
const buildRow = (props) => (itm, ndx) => {
    return (React.createElement("tbody", { key: ndx },
        React.createElement("tr", null,
            React.createElement("td", { className: "basis-20" }, itm.id),
            React.createElement("td", { className: "basis-20" }, itm.planResultId),
            React.createElement("td", { className: "basis-20" }, itm.directionTypeId),
            React.createElement("td", { className: "basis-20" }, itm.weighIn),
            React.createElement("td", { className: "basis-20" }, itm.nutrition),
            React.createElement("td", { className: "basis-20" }, itm.createdDate),
            React.createElement("td", { className: "basis-20" },
                props.showEditButton ? (React.createElement("button", { type: "button", className: "an-btn an-btn-primary", onClick: buttonClick(props, itm.id, "edit") }, "Edit")) : (""),
                props.showDeleteButton ? (React.createElement("button", { type: "button", className: "an-btn an-btn-primary", onClick: buttonClick(props, itm.id, "delete") }, "Delete")) : ("")))));
};
//# sourceMappingURL=PlanResultLogList.js.map