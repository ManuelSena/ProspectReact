import * as React from "react";
import { Button } from "../../common/components/form";
import { FileSelectorCrop } from "../../common/components";


interface IFileSelectFinalSubmit {
    onSubmit: () => void;
    progress: number;
    campaignImageURL: string;
    onGetBlobFile: (blobFile: File) => void;
    onUpdateClick: () => void;
    submitButtonDisplay: boolean;
    updateButtonDisplay: boolean;
    image: string;

}

export const WorkoutPlanFileSelectFinal: React.StatelessComponent<IFileSelectFinalSubmit> = (props: IFileSelectFinalSubmit) => {
    return (
        <div>
            <form action="#">
                <FileSelectorCrop
                    placeholderImage={props.image}
                    showProgressBar={true}
                    onGetBlobFile={props.onGetBlobFile}
                    progress={props.progress} />
                <div className="row" style={{ margin: 0 }}>
                    <div style={props.submitButtonDisplay ? { display: "block" } : { display: "none" }}>
                        <Button
                            className="btn an-btn-primary pull-right"
                            label="Submit"
                            onClick={props.onSubmit} />
                    </div>
                    <div style={props.updateButtonDisplay ? { display: "block" } : { display: "none" }}>
                        <Button
                            className="btn an-btn-primary pull-right"
                            label="Update"
                            onClick={props.onUpdateClick} />
                    </div>
                </div>
            </form>
        </div>
    )
};
