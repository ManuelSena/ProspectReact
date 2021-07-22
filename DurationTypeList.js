import * as React from "react";
export const DurationTypeList = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "row" }, props.headerColumns != null ? (props.headerColumns.map((itm, i) => {
            return React.createElement("div", { key: i, className: itm.columnStyle },
                React.createElement("strong", null, itm.columnName));
        }))
            : ("")),
        props.dataItems.map(buildRow(props))));
};
const buildRow = (props) => (itm, ndx) => {
    return (React.createElement("div", { className: "container col-md-12", key: ndx },
        React.createElement("br", null),
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-3" },
                React.createElement("strong", null, itm.typeName)),
            React.createElement("div", { className: "col-md-3" }, itm.typeDescription),
            React.createElement("div", { className: "col-md-3" }, itm.isActive ? "Active" : "Inactive"),
            React.createElement("div", { className: "col-md-3" },
                props.showEditButton ? (React.createElement("button", { type: "button", className: "an-btn an-btn-edit-transparent", onClick: buttonClick(props, itm.id, "edit") }, "Edit")) : (""),
                props.showDeleteButton ? (React.createElement("button", { type: "button", className: "an-btn an-btn-edit-transparent", onClick: buttonClick(props, itm.id, "delete") }, "Delete")) : (""))),
        React.createElement("hr", null)));
};
const buttonClick = (props, id, action) => (e) => {
    props.onButtonClick(id, action);
};
//# sourceMappingURL=DurationTypeList.js.map