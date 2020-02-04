import React from 'react'
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    buttonItemYes: {
        border: "1px solid #FF3D3D",
        width: "169px",
        height: "48px",
        marginRight: "14px",
        borderRadius: "5px",
        color: "#FF3D3D",
    },

    buttonItemLabelYes: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        textTransform: 'none',
        fontFamily: 'Montserrat',
    },
})

const SharedButtonNo = () => {
    const classes = useStyles();
    return (
        <Button
            className={classes.buttonItemYes}
            classes={{label: classes.buttonItemLabelYes}}
            // onClick={handleClose}
        >
            Yes
        </Button>
    )
}

export default SharedButtonNo