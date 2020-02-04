import React from 'react'
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    buttonItemNo: {
        background: "#FF3D3D",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        boxShadow: "0px 4px 40px rgba(227, 240, 255, 0.3)",
        width: "169px",
        height: "48px",
        borderRadius: "5px",
        color: "#F6F7FA",
        cursor: "pointer",
    },

    buttonItemLabelNo: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        textTransform: 'none',
        color: '#F6F7FA',
        fontFamily: 'Montserrat',
    }

})

const SharedButtonYes = () => {
    const classes = useStyles();
    return (
        <Button
            className={classes.buttonItemNo}
            classes={{label: classes.buttonItemLabelNo}}
            // onClick={handleClose}
        >
            No
        </Button>
    )
}

export default SharedButtonYes