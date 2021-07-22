import * as React from "react";
import { IDurationTypeEntity, IDurationTypeForm } from "../../interfaces/workouts";
import { Input, Checkbox, Button } from "../../common/components/form";

export const DurationTypeForm: React.StatelessComponent<IDurationTypeForm> = (props: IDurationTypeForm) => {
    return (
        <div className="an-single-component">
            <div className="an-formarea">
                <div className="an-component-header grey-bg">
                    <h6>Workout Duration Type</h6>
                </div>
                <div className="an-component-body">
                    <div className="an-helper-block">
                        <form> 
                            <fieldset>
                                <div className="form-group">
                                    <Input
                                        label="Type Name"
                                        name="typeName"
                                        value={props.durationTypeEntity.typeName}
                                        onChange={props.onChange}
                                        placeholder="Type Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <Input
                                        label="Description"
                                        name="typeDescription"
                                        value={props.durationTypeEntity.typeDescription}
                                        onChange={props.onChange}
                                        placeholder="Type Description"
                                    />
                                </div>
                                <div className="form-group">
                                    <Checkbox
                                        label="Is Active"
                                        name="isActive"
                                        checked={props.durationTypeEntity.isActive}
                                        onCheck={props.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <Button
                                        className="an-btn an-btn-prospect-transparent"
                                        label="Save Workout Duration Type"
                                        onClick={props.onSubmit}
                                    />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div >
            </div >
        </div >
    );
}