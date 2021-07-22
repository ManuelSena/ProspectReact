import * as React from "react";
import { DurationTypeList, DurationTypeForm } from "../../components/workouts";
import { workoutsApi } from "../../api/workouts/index";
export class DurationTypeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.listBody = {
            maxHeight: 500,
            borderLeft: "1px solid #EDEDED",
            margin: '0 auto',
            overflowY: "scroll" ////Creates the scrollbar
        };
        this.state = {
            durationTypeEntity: {
                id: 0,
                typeName: "",
                typeDescription: "",
                isActive: false,
                totalPages: 1
            },
            durationTypeItems: [],
            currentPage: 1,
            totalPages: 1,
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.saveData = this.saveData.bind(this);
        this.listButtonClick = this.listButtonClick.bind(this);
    }
    componentDidMount() {
        document.title = "Team Prospect/Duration Type";
        this.loadDataList();
    }
    onFieldChange(fieldName, fieldValue) {
        const nextState = Object.assign({}, this.state, { durationTypeEntity: Object.assign({}, this.state.durationTypeEntity, { [fieldName]: fieldValue }) });
        this.setState(nextState);
    }
    listButtonClick(id, action) {
        let ndx = this.state.durationTypeItems.findIndex(x => x.id === id);
        if (action === "edit") {
            if (ndx >= 0) {
                this.setState({ durationTypeEntity: this.state.durationTypeItems[ndx] });
            }
        }
        else if (action === "delete") {
            this.state.durationTypeItems.splice(ndx, 1);
            let itms = [
                ...this.state.durationTypeItems
            ];
            this.loadDataList();
        }
    }
    saveData() {
        workoutsApi.saveDurationType(this.state.durationTypeEntity) //add new items or edit existing ones
            .then((response) => {
            //toastr.success("Duration Type Added Successfully");
            this.loadDataList();
            this.setState(Object.assign({}, this.state, { durationTypeItems: [...this.state.durationTypeItems, this.state.durationTypeEntity], durationTypeEntity: {
                    id: 0,
                    typeName: "",
                    typeDescription: "",
                    isActive: false,
                    totalPages: 1,
                } }));
        }, (err) => {
            //toastr.error("Something went wrong...please try again.");
        })
            .catch((err) => {
            //toastr.error("Something went wrong...please try again.");
        });
    }
    getWorkoutTypes() {
        //Invoke this function 
        workoutsApi.getAllPerPageDurationType(this.state.currentPage) //grabs only the data from the current page number
            .then((response) => {
            //Console.log our items
            //console.log(response.items);
            //Set the state 
            this.setState({
                //our array will attain the items from the response
                durationTypeItems: response.items,
                //totalPages will attain the items from the response
                totalPages: response.items[0].totalPages
            });
        });
    }
    getPage(direction) {
        let newPage = this.state.currentPage + direction; // gets current page and adds or removes 1 
        this.setState({
            currentPage: newPage // makes current page the new page loaded 
        }, () => { this.getWorkoutTypes(); }); //fires the function thats already wired to open current page 
    }
    jumpToPage(pageNumber) {
        this.setState({
            currentPage: pageNumber
        }, () => { this.getWorkoutTypes(); });
    }
    loadDataList() {
        this.getWorkoutTypes();
    }
    render() {
        var pagesArray = []; //empty array to put the page numbers that the loop is going to give me
        // condition to state if page is more than 5 and less than the total pages run this below, had to do this otherwise it would only start showing me only the last 9 pages and would decrease to show me only 8 and 7 and so on
        if (this.state.currentPage + 5 < this.state.totalPages) {
            for (var i = this.state.currentPage; i <= this.state.currentPage + 5; i++) {
                if (i > 0 && i <= this.state.totalPages) {
                    pagesArray.push(i);
                }
            }
        }
        else {
            for (var i = this.state.totalPages - 5; i <= this.state.currentPage + 5; i++) {
                if (i > 0 && i <= this.state.totalPages) {
                    pagesArray.push(i);
                }
            }
        }
        const disabled = {
            pointerEvents: 'none'
        };
        const enabled = {};
        const maxPage = this.state.currentPage >= this.state.totalPages;
        const minPage = this.state.currentPage <= 1;
        const changeColor = {
            background: 'an-btn-prospect-transparent',
            color: 'an-btn-prospect-transparent'
        };
        return (React.createElement("div", { className: "container col-md-12" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-5" },
                    React.createElement(DurationTypeForm, { durationTypeEntity: this.state.durationTypeEntity, onChange: this.onFieldChange, onSubmit: this.saveData })),
                React.createElement("div", { className: "col-md-7", style: this.listBody },
                    React.createElement(DurationTypeList, { dataItems: this.state.durationTypeItems, onButtonClick: this.listButtonClick, showDeleteButton: false, showEditButton: true, headerColumns: [
                            { columnName: "Workout Duration:", columnStyle: "col-md-3" },
                            { columnName: "Description:", columnStyle: "col-md-3" },
                            { columnName: "Status:", columnStyle: "col-md-3" },
                            { columnName: "Action:", columnStyle: "col-md-3" }
                        ] }),
                    React.createElement("div", { className: "an-pagination-container center" },
                        React.createElement("ul", { className: "pagination" },
                            React.createElement("li", null,
                                React.createElement("a", { href: "javascript:;", "aria-label": "First Page", style: minPage ? disabled : enabled, onClick: (e) => {
                                        this.jumpToPage(1);
                                        return false;
                                    } },
                                    React.createElement("span", { "aria-hidden": "true" },
                                        React.createElement("i", { className: "ion-chevron-left " }),
                                        React.createElement("i", { className: "ion-chevron-left " })))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "javascript:;", "aria-label": "Previous", style: minPage ? disabled : enabled, onClick: (e) => {
                                        this.getPage(-1);
                                        return false;
                                    } },
                                    React.createElement("span", { "aria-hidden": "true" },
                                        React.createElement("i", { className: "ion-chevron-left" })))),
                            pagesArray.map((item, index) => {
                                return (React.createElement("li", { key: index },
                                    React.createElement("a", { href: "javascript:;", style: item == this.state.currentPage ? changeColor : enabled, onClick: (e) => {
                                            this.jumpToPage(item);
                                            //console.log("this is the item " + item);
                                            return false;
                                        } }, item)));
                            }),
                            React.createElement("li", null,
                                React.createElement("a", { href: "javascript:;", "aria-label": "Next", style: maxPage ? disabled : enabled, onClick: (e) => {
                                        this.getPage(1);
                                        return false;
                                    } },
                                    React.createElement("span", { "aria-hidden": "true" },
                                        React.createElement("i", { className: "ion-chevron-right" })))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "javascript:;", "aria-label": "Last Page", style: maxPage ? disabled : enabled, onClick: (e) => {
                                        this.jumpToPage(this.state.totalPages);
                                        return false;
                                    } },
                                    React.createElement("span", { "aria-hidden": "true" },
                                        React.createElement("i", { className: "ion-chevron-right" }),
                                        React.createElement("i", { className: "ion-chevron-right" })))))),
                    React.createElement("div", { className: "an-pagination-container center" },
                        React.createElement("h5", null,
                            " Showing page ",
                            this.state.currentPage,
                            " of ",
                            this.state.totalPages))))));
    }
} //end of class
//# sourceMappingURL=DurationTypeContainer.js.map