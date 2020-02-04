import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SharedButtonYes from "../shared-buttons/shared-button-yes";
import SharedButtonNo from "../shared-buttons/shared-button-no";
import { makeStyles } from "@material-ui/core";
import TextOptionShared from "../shared-modal-text/shared-modal-text";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles({
  dialogActions: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "50px"
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "flex-end"
  },
  closeIcon: {
    fontSize: "2.3rem",
    color: "#9FA8C0",
    marginTop: "-10px",
    marginRight: "-18px"
  },
  dialogContent: {
    display: "flex",
    justifyContent: "center",
    width: "508px"
  },
  dialogContentText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "189%",
    color: "#2D3054"
  },
  dialog: {
    borderRadius: "8px"
  }
});

export default function ModalMenu() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        className={classes.dialog}
        classes={{
          paper: classes.dialog
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={classes.dialogTitle} id="alert-dialog-title">
          <Close onClick={handleClose} className={classes.closeIcon} />
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <DialogContentText
            className={classes.dialogContentText}
            id="alert-dialog-description"
          >
            Are You Sure That You Want To
            <br />
            <TextOptionShared />
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <SharedButtonNo />
          <SharedButtonYes />
        </DialogActions>
      </Dialog>
    </div>
  );
}
