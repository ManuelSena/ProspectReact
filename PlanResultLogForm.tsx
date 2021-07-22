import * as React from "react";
import { IPlanResultLogForm } from "../../interfaces/Workouts/IPlanResultLogForm";
import { IPlanResultLogEntity } from "../../interfaces/Workouts/IPlanResultLogEntity";
import { Input, Button, Textarea, DropDownList } from "../../common/components/form";
import { Link } from "react-router";


export const PlanResultLogForm: React.StatelessComponent<IPlanResultLogForm> = (props: IPlanResultLogForm) => {
    return (
        <div className="an-single-component">
            <div className="an-formarea">
                <div className="an-component-header grey-bg">
                    <h6>Plan Result Log</h6>
                </div>
                <div className="an-component-body">
                    <div className="an-helper-block">
                        <form className="tg-planresultlog" method="post">
                            <fieldset>

                                <div className="form-group">
                                    <Input type="number"
                                        label="Weight In"
                                        name="weighIn"
                                        value={props.planResultLogEntity.weighIn}
                                        placeholder="Enter Weight"
                                        onChange={props.onChange} />
                                </div>

                                <div className="form-group">
                                    <Textarea
                                        label="Nutrition"
                                        name="nutrition"
                                        value={props.planResultLogEntity.nutrition}
                                        placeholder="Enter Nutrition"
                                        onChange={props.onChange} />
                                </div>

                                <div className="form-group">
                                    <Button className="an-btn an-btn-primary"
                                        label="Submit"
                                        onClick={props.onSubmit}
                                    />

                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}