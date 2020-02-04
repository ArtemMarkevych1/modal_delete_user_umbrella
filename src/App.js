import React from "react";
import {makeStyles, createStyles} from '@material-ui/core';
import useStyles from '@material-ui/core'
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {Close} from "@material-ui/icons";
import ButtonYesShared from "../../../button/button-yes-shared";
import ButtonNoShared from "../../../button/button-no-shared";

// export interface DeleteEmployeeModalModel {
//     open: boolean;
//     text: string;

//     onClose(): void;

//     onSubmit(): void;
// }

// export type PropTypes =
//     & DeleteEmployeeModalModel;

export default function DeleteEmployeeModal({open, text, onClose, onSubmit}: PropTypes) {

    // const classes = useStyles();

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <Close onClick={onClose}/>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are You Sure That You Want
                    <span>{text}</span>
                </DialogContentText>
            </DialogContent>
            <DialogActions>


                <ButtonYesShared
                    // filled={false} title={'YES'} onClick={onSubmit}
                />

                <ButtonNoShared
                    // filled={true} title={'NO'} onClick={onClose}
                />


            </DialogActions>
        </Dialog>
    );
}

