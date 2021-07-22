import * as React from "react";
import * as moment from "moment";
import { publicProfileApi } from "../../api/PublicProfile/index";
export class SingleWorkoutPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workoutPlan: {
                id: 0,
                creatorFirstName: "",
                creatorLastName: "",
                planName: "",
                planDetails: "",
                durationTypeId: 0,
                requiredFood: "",
                isActive: false,
                createdDate: new Date(),
                createdById: 0,
                userBaseId: 0,
                planImageURL: "",
                avatarUrl: "",
                modifiedDate: new Date(),
                modifiedById: 0,
                planDirections: [],
            }
        };
        this.CreateRow = this.CreateRow.bind(this);
    }
    componentDidMount() {
        publicProfileApi.getSingleWorkoutPlan(this.props.params.id)
            .then((response) => {
            // console.log(response.item);
            this.setState({
                workoutPlan: response.item,
            });
            //console.log("testing the array", this.state.workoutPlan.planDirections)
            // console.log("testing length", this.state.workoutPlan.planDirections.length)
        });
    }
    //let startDate = moment(itm.startDate).format("MMM D")
    CreateRow(data, i) {
        const blogText = {
            fontSize: '12px',
            marginLeft: '50px',
            fontFamily: 'Montserrat, "sans-serif"'
        };
        const blogDetail = {
            fontSize: '10px',
            marginLeft: '85px',
            fontFamily: 'Montserrat, "sans-serif"'
        };
        const titleMargin = {
            marginLeft: '50px',
            fontFamily: 'Montserrat, "sans-serif"'
        };
        const btnMargin = {
            marginLeft: '85px',
            fontFamily: 'Montserrat, "sans-serif"'
        };
        const textCenter = {
            textAlign: 'center',
            fontStyle: 'italic',
            fontFamily: 'Montserrat, "sans-serif"'
        };
        const required = {
            color: '#F57C00',
            textAlign: 'center',
            fontFamily: 'Montserrat, "sans-serif"'
        };
        const directions = {
            fontSize: '16px',
            textAlign: 'center',
            fontFamily: 'Montserrat, "sans-serif"'
        };
        return (React.createElement("div", { key: i }, this.state.workoutPlan.planDirections.length == 1 ?
            React.createElement("div", { className: "col-md-6 col-md-offset-4 an-pricing-table-single with-shadow-dark" },
                React.createElement("div", { className: "an-pricing-table-single with-shado-dark" },
                    React.createElement("div", { className: "price-header" },
                        React.createElement("h3", { className: "plan-name" },
                            "   ",
                            React.createElement("strong", null,
                                "  ",
                                data.stepName,
                                " ")),
                        React.createElement("h3", { className: "plan-price" },
                            " ",
                            data.durationTypeName,
                            " ")),
                    React.createElement("div", { className: "price-footer" },
                        React.createElement("p", { style: textCenter },
                            "  ",
                            data.directions),
                        React.createElement("p", { style: required },
                            " Required Food: ",
                            this.state.workoutPlan.requiredFood)))) :
            React.createElement("div", null,
                React.createElement("div", { className: "col-md-4 col-md-offset-2 an-pricing-table-single with-shadow-dark" },
                    React.createElement("div", { className: "an-pricing-table-single with-shado-dark" },
                        React.createElement("div", { className: "price-header" },
                            React.createElement("h3", { className: "plan-name" },
                                "   ",
                                React.createElement("strong", null,
                                    "  ",
                                    data.stepName,
                                    " ")),
                            React.createElement("h3", { className: "plan-price" },
                                " ",
                                data.durationTypeName,
                                " ")),
                        React.createElement("div", { className: "price-footer" },
                            React.createElement("p", { style: directions },
                                "  ",
                                data.directions),
                            React.createElement("p", { style: textCenter },
                                " ",
                                data.requirements),
                            React.createElement("p", { style: required },
                                " Required Food: ",
                                this.state.workoutPlan.requiredFood)))))));
    }
    render() {
        const planImage = {
            backgroundImage: `url(${this.state.workoutPlan.planImageURL})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        };
        const planName = {
            textTransform: 'uppercase',
            fontFamily: 'Montserrat, "sans-serif"'
        };
        const planDetails = {
            textTransform: 'capitalize',
            fontFamily: 'Montserrat, "sans-serif"',
            textSize: '12px',
            textAlign: 'center',
        };
        const imgStyle = {
            opacity: 0
        };
        const textCenter = {
            textAlign: 'center',
            color: '#586069'
        };
        const topPad = {
            paddingTop: '45px'
        };
        let startDate = moment(this.state.workoutPlan.createdDate).format("MMM DD YYYY");
        return (React.createElement("div", { className: "an-page-content" },
            React.createElement("div", { className: "an-content-body no-padding" },
                React.createElement("div", { key: this.state.workoutPlan.id },
                    React.createElement("div", { className: "an-profile-banner", style: planImage },
                        React.createElement("div", { className: "an-profile-overlay" }),
                        React.createElement("div", { className: "an-inner-page-title" },
                            React.createElement("div", { className: "container" },
                                React.createElement("h1", { style: planName }, this.state.workoutPlan.planName)))),
                    React.createElement("div", { className: "row col-sm-5 col-md-5 col-lg-5 col-md-offset-3" },
                        React.createElement("h3", { style: planDetails },
                            " ",
                            this.state.workoutPlan.planDetails,
                            " ")),
                    React.createElement("div", { className: "row col-sm-5 col-md-5 col-lg-5 col-md-offset-3" },
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("p", { style: textCenter },
                            " ",
                            React.createElement("strong", null, " By:  "),
                            " ",
                            this.state.workoutPlan.id,
                            " ",
                            this.state.workoutPlan.creatorLastName,
                            " ",
                            React.createElement("strong", null, "On : "),
                            startDate))),
                React.createElement("br", null),
                React.createElement("div", { className: "col-md-8 col-md-offset-1", style: topPad }, this.state.workoutPlan.planDirections.length < 1 ?
                    React.createElement("div", { className: "main-wrapper" },
                        React.createElement("div", { className: "an-page-content an-profile-overlay" },
                            React.createElement("div", { className: "an-flex-center-center" },
                                React.createElement("h3", { className: "an-logo-heading text-center wow fadeInDown", style: { visibility: "visible" } }),
                                React.createElement("div", { className: "an-4040-page", style: { padding: '25px' } },
                                    React.createElement("h2", null,
                                        React.createElement("strong", null, "COMING SOON!")),
                                    React.createElement("p", null, "Currently looks like this workout plan doesn't have any plan directions listed yet!"))))) :
                    this.state.workoutPlan.planDirections.map(this.CreateRow)))));
    }
}
//# sourceMappingURL=singleWorkoutPlanPage.js.map