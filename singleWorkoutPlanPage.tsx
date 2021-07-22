import * as React from "react";
import * as toastr from "toastr";
import { UserApi } from "../../api/Blogs/index";
import { browserHistory } from "react-router";
import * as moment from "moment";
import { IAthleteBlogListEntity } from "../../interfaces/Blogs";
import { BlogList, CreateBlogsHeader } from "../../components/Blogs";
import { Button } from "../../common/components/form";

import { hashHistory } from "react-router"
import { IWorkoutPlanEntity } from "../../interfaces/workouts/IWorkoutPlanEntity";
import { publicProfileApi } from "../../api/PublicProfile/index";
import { IWorkoutPlanDirectionEntity } from "../../interfaces/workouts/IWorkoutPlanDirectionEntity";
import { AdminCommentsContainer } from "../comments/adminCommentsContainer";


interface ISingleWorkoutPlanState {
    workoutPlan: IWorkoutPlanEntity;
}


interface ISingleWorkoutPlanProps {
    id: number;

}

export class SingleWorkoutPlan extends React.Component<any, ISingleWorkoutPlanState> {
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
        }; this.CreateRow = this.CreateRow.bind(this)
    }

    public componentDidMount() {

        publicProfileApi.getSingleWorkoutPlan(this.props.params.id)
            .then((response) => {
                // console.log(response.item);
                this.setState({
                    workoutPlan: response.item,// set the blogs state to the loaded blogs from api call 
                })
                //console.log("testing the array", this.state.workoutPlan.planDirections)
                // console.log("testing length", this.state.workoutPlan.planDirections.length)
            })
    }

    //let startDate = moment(itm.startDate).format("MMM D")
    public CreateRow(data: IWorkoutPlanDirectionEntity, i) {


        const blogText: React.CSSProperties = {
            fontSize: '12px',
            marginLeft: '50px',
            fontFamily: 'Montserrat, "sans-serif"'
        }
        const blogDetail: React.CSSProperties = {
            fontSize: '10px',
            marginLeft: '85px',
            fontFamily: 'Montserrat, "sans-serif"'

        }
        const titleMargin: React.CSSProperties = {
            marginLeft: '50px',
            fontFamily: 'Montserrat, "sans-serif"'
        }
        const btnMargin: React.CSSProperties = {
            marginLeft: '85px',
            fontFamily: 'Montserrat, "sans-serif"'
        }
        const textCenter: React.CSSProperties = {
            textAlign: 'center',
            fontStyle: 'italic',
            fontFamily: 'Montserrat, "sans-serif"'

        }
        const required: React.CSSProperties = {
            color: '#F57C00',
            textAlign: 'center',
            fontFamily: 'Montserrat, "sans-serif"'

        }




        const directions: React.CSSProperties = {
            fontSize: '16px',
            textAlign: 'center',
            fontFamily: 'Montserrat, "sans-serif"'

        }


        return (


            <div key={i}>

                {this.state.workoutPlan.planDirections.length == 1 ?
                    <div className="col-md-6 col-md-offset-4 an-pricing-table-single with-shadow-dark">
                        <div className="an-pricing-table-single with-shado-dark">
                            <div className="price-header">
                                <h3 className="plan-name">   <strong>  {data.stepName} </strong></h3>
                                <h3 className="plan-price"> {data.durationTypeName} </h3>
                            </div>

                            <div className="price-footer">
                                <p style={textCenter}>  {data.directions}</p>
                                <p style={required}> Required Food: {this.state.workoutPlan.requiredFood}</p>
                            </div>
                        </div>

                    </div> :
                    <div>
                        <div className="col-md-4 col-md-offset-2 an-pricing-table-single with-shadow-dark">
                            <div className="an-pricing-table-single with-shado-dark">
                                <div className="price-header">
                                    <h3 className="plan-name">   <strong>  {data.stepName} </strong></h3>
                                    <h3 className="plan-price"> {data.durationTypeName} </h3>
                                </div>

                                <div className="price-footer">
                                    <p style={directions}>  {data.directions}</p>
                                    <p style={textCenter}> {data.requirements}</p>
                                    <p style={required}> Required Food: {this.state.workoutPlan.requiredFood}</p>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        );


    }


    public render() {
        const planImage: React.CSSProperties = {
            backgroundImage: `url(${this.state.workoutPlan.planImageURL})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'

        }

        const planName: React.CSSProperties = {
            textTransform: 'uppercase',
            fontFamily: 'Montserrat, "sans-serif"'
        }

        const planDetails: React.CSSProperties = {
            textTransform: 'capitalize',
            fontFamily: 'Montserrat, "sans-serif"',
            textSize: '12px',
            textAlign: 'center',
        }
        const imgStyle: React.CSSProperties = {
            opacity: 0
        }
        const textCenter: React.CSSProperties = {
            textAlign: 'center',
            color: '#586069'
        }
        const topPad: React.CSSProperties = {
            paddingTop: '45px'
        }
        let startDate = moment(this.state.workoutPlan.createdDate).format("MMM DD YYYY")

        return (


            <div className="an-page-content">
                <div className="an-content-body no-padding">

                    <div key={this.state.workoutPlan.id}>
                        <div className="an-profile-banner" style={planImage}>
                            <div className="an-profile-overlay"></div>
                            <div className="an-inner-page-title">
                                <div className="container">
                                    <h1 style={planName}>{this.state.workoutPlan.planName}</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row col-sm-5 col-md-5 col-lg-5 col-md-offset-3">
                            <h3 style={planDetails}> {this.state.workoutPlan.planDetails} </h3>
                        </div>
                        <div className="row col-sm-5 col-md-5 col-lg-5 col-md-offset-3">
                            <br />
                            <br />

                            <p style={textCenter}> <strong> By:  </strong> {this.state.workoutPlan.id} {this.state.workoutPlan.creatorLastName} <strong>On : </strong>{startDate}</p>
                        </div>


                    </div>

                    <br />

                    <div className="col-md-8 col-md-offset-1" style={topPad}>
                        {this.state.workoutPlan.planDirections.length < 1 ?


                            <div className="main-wrapper">
                                <div className="an-page-content an-profile-overlay">
                                    <div className="an-flex-center-center" >
                                        <h3 className="an-logo-heading text-center wow fadeInDown" style={{ visibility: "visible" }}>
                                        </h3>
                                        <div className="an-4040-page" style={{ padding: '25px' }}>
                                            <h2><strong>COMING SOON!</strong></h2>
                                            <p>Currently looks like this workout plan doesn't have any plan directions listed yet!</p>
                                        </div>

                                    </div>
                                </div>

                            </div> :


                            this.state.workoutPlan.planDirections.map(this.CreateRow)
                        }
                    </div>

                </div>
            </div>
        );
    }

}
