import * as React from "react";
// assigns classes required to show tab as open or closed, based on props.expanded boolean
export const PlanResultLogFormHolder = (props) => {
    return (React.createElement("div", { className: "panel panel-default" },
        React.createElement("a", { role: "button", "data-toggle": "collapse", "data-parent": "#accordion", href: "#collapse" + noSpace(props.label), "aria-expanded": props.expanded, "aria-controls": "collapse" + noSpace(props.label), className: props.expanded ? "" : "collapsed", style: { textDecoration: "none", color: "#333333" } },
            React.createElement("div", { className: "panel-heading", role: "tab", id: "heading" + noSpace(props.label) },
                React.createElement("div", { className: "panel-title" },
                    React.createElement("h6", null, props.label)))),
        React.createElement("div", { id: "collapse" + noSpace(props.label), className: "panel-collapse collapse " + (props.expanded ? "in" : ""), role: "tabpanel", "aria-labelledby": "heading" + noSpace(props.label), "aria-expanded": props.expanded, style: props.expanded ? {} : { height: "0px" } },
            React.createElement("div", { className: "panel-body" }, props.children))));
};
const noSpace = (val) => {
    return val.replace(/\s/g, '');
};
//# sourceMappingURL=PlanResultLogFormHolder.js.map