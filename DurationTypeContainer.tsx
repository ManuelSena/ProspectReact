import * as React from "react";
import * as toastr from "toastr";
import { browserHistory } from "react-router";
import { IDurationTypeEntity, IDurationTypeForm } from "../../interfaces/workouts";
import { DurationTypeList, DurationTypeForm } from "../../components/workouts";
import { IGridViewOptions } from "../../interfaces";
import { workoutsApi } from "../../api/workouts/index";


interface IDurationTypeState {
    durationTypeEntity: IDurationTypeEntity;
    durationTypeItems: IDurationTypeEntity[]; 
    currentPage: number;
    totalPages: number;
}

export class DurationTypeContainer extends React.Component<{}, IDurationTypeState>{

    constructor(props) {
        super(props);
        this.state = {
            durationTypeEntity: {
                id: 0,
                typeName: "",
                typeDescription: "",
                isActive: false,
                totalPages: 1
            },
            durationTypeItems: [],
            currentPage: 1, //initial state of the current page number
            totalPages: 1, //initial state of the total page number
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.saveData = this.saveData.bind(this);
        this.listButtonClick = this.listButtonClick.bind(this);
    }

    public componentDidMount() {
        document.title = "Team Prospect/Duration Type";
        this.loadDataList();
    }

    private onFieldChange(fieldName: string, fieldValue: string) {
        const nextState = {
            ...this.state,
            durationTypeEntity: {
                ...this.state.durationTypeEntity,
                [fieldName]: fieldValue
            }
        }
        this.setState(nextState);
    }

    private listButtonClick(id: number, action: string) {
        let ndx = this.state.durationTypeItems.findIndex(x => x.id === id);
        if (action === "edit") {
            if (ndx >= 0) {
                this.setState({ durationTypeEntity: this.state.durationTypeItems[ndx] });

            }
        }
        else if (action === "delete") {
            this.state.durationTypeItems.splice(ndx, 1)
            let itms = [
                ...this.state.durationTypeItems
            ];
            this.loadDataList();
        }
    }

    private saveData() {
        workoutsApi.saveDurationType(this.state.durationTypeEntity) //add new items or edit existing ones
            .then((response) => {
                //toastr.success("Duration Type Added Successfully");
                this.loadDataList();
                this.setState({  //to reset the form
                    ...this.state,
                    durationTypeItems: [...this.state.durationTypeItems, this.state.durationTypeEntity],
                    durationTypeEntity: {
                        id: 0,
                        typeName: "",
                        typeDescription: "",                        
                        isActive: false,
                        totalPages: 1,
                    }
                });
            }, (err) => {
                //toastr.error("Something went wrong...please try again.");
            })
            .catch((err) => {
                //toastr.error("Something went wrong...please try again.");
            });
    }

    private getWorkoutTypes() {
        //Invoke this function 
        workoutsApi.getAllPerPageDurationType(this.state.currentPage) //grabs only the data from the current page number
            //if successful, fire this function
            .then((response) => {
                //Console.log our items
                //console.log(response.items);
                //Set the state 
                this.setState({
                    //our array will attain the items from the response
                    durationTypeItems: response.items,
                    //totalPages will attain the items from the response
                    totalPages: response.items[0].totalPages
                })
            })
    }

    private getPage(direction: number) { // gets new page 
        let newPage = this.state.currentPage + direction; // gets current page and adds or removes 1 
        this.setState({
            currentPage: newPage // makes current page the new page loaded 
        }, () => { this.getWorkoutTypes() });//fires the function thats already wired to open current page 
    }


    private jumpToPage(pageNumber: number) {

        this.setState({
            currentPage: pageNumber
        }, () => { this.getWorkoutTypes() });

    }

    private loadDataList() {
        this.getWorkoutTypes();
    }

    private listBody: React.CSSProperties = {
        maxHeight: 500,
        borderLeft: "1px solid #EDEDED",
        margin: '0 auto',
        overflowY: "scroll" ////Creates the scrollbar
    }

    public render() {

        var pagesArray = []; //empty array to put the page numbers that the loop is going to give me

        // condition to state if page is more than 5 and less than the total pages run this below, had to do this otherwise it would only start showing me only the last 9 pages and would decrease to show me only 8 and 7 and so on
        if (this.state.currentPage + 5 < this.state.totalPages) {
            for (var i = this.state.currentPage; i <= this.state.currentPage + 5; i++) {
                if (i > 0 && i <= this.state.totalPages) {
                    pagesArray.push(i);
                }
            }
        } else {
            for (var i = this.state.totalPages - 5; i <= this.state.currentPage + 5; i++) { // for loop to show me last 5 pages 
                if (i > 0 && i <= this.state.totalPages) {
                    pagesArray.push(i);
                }
            }
        }

        const disabled: React.CSSProperties = {

            pointerEvents: 'none'
        };
        const enabled: React.CSSProperties = {}

        const maxPage = this.state.currentPage >= this.state.totalPages;
        const minPage = this.state.currentPage <= 1;

        const changeColor: React.CSSProperties = {
            background: 'an-btn-prospect-transparent',
            color: 'an-btn-prospect-transparent'
        }


        return (
            <div className="container col-md-12">
                <div className="row">
                    <div className="col-md-5">
                        <DurationTypeForm
                            durationTypeEntity={this.state.durationTypeEntity}
                            onChange={this.onFieldChange}
                            onSubmit={this.saveData}
                        />
                    </div>
                    <div className="col-md-7" style={this.listBody}>                    
                        <DurationTypeList
                            dataItems={this.state.durationTypeItems}
                            onButtonClick={this.listButtonClick}
                            showDeleteButton={false}
                            showEditButton={true}
                            headerColumns={[
                                { columnName: "Workout Duration:", columnStyle: "col-md-3" },
                                { columnName: "Description:", columnStyle: "col-md-3" },
                                { columnName: "Status:", columnStyle: "col-md-3" },
                                { columnName: "Action:", columnStyle: "col-md-3" }]}
                        />

                        <div className="an-pagination-container center">
                            <ul className="pagination">

                                <li>
                                    <a href="javascript:;" aria-label="First Page" style={minPage ? disabled : enabled}

                                        onClick={(e) => {
                                            this.jumpToPage(1);
                                            return false;
                                        }} >
                                        <span aria-hidden="true"><i className="ion-chevron-left "></i><i className="ion-chevron-left "></i></span>
                                    </a>
                                </li>


                                <li>
                                    <a href="javascript:;" aria-label="Previous" style={minPage ? disabled : enabled}

                                        onClick={(e) => {
                                            this.getPage(-1);
                                            return false;
                                        }} >
                                        <span aria-hidden="true"><i className="ion-chevron-left"></i></span>
                                    </a>
                                </li>

                                {pagesArray.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href="javascript:;" style={item == this.state.currentPage ? changeColor : enabled}

                                                onClick={(e) => {
                                                    this.jumpToPage(item);
                                                    //console.log("this is the item " + item);
                                                    return false;
                                                }} >{item}</a>
                                        </li>
                                    )
                                })}

                                <li>
                                    <a href="javascript:;" aria-label="Next" style={maxPage ? disabled : enabled}
                                        onClick={(e) => {

                                            this.getPage(1);
                                            return false;
                                        }} >
                                        <span aria-hidden="true"><i className="ion-chevron-right"></i></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;" aria-label="Last Page" style={maxPage ? disabled : enabled}
                                        onClick={(e) => {

                                            this.jumpToPage(this.state.totalPages);
                                            return false;
                                        }} >
                                        <span aria-hidden="true"><i className="ion-chevron-right"></i><i className="ion-chevron-right"></i></span>
                                    </a>
                                </li>

                            </ul>

                        </div>

                        <div className="an-pagination-container center" >

                            <h5> Showing page {this.state.currentPage} of {this.state.totalPages}</h5>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
} //end of class




    
       