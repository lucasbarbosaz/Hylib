import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
// import { Fade, Slide } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'block',
        paddingRight: "17px",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
    },
}));

const UserHomeCard = (props) => {
    const { open, onClose, children, timeout, transition, transitionProps } = props;
    const classes = useStyles();

    return (
        <>
            <Modal
                className={classes.modal}
                open={open}
                onClose={onClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                {
                    React.createElement(transition, { ...transitionProps, in: open, timeout: timeout, mountOnEnter: true, unmountOnExit: true }, children)
                }

                {/* <transition in={open} timeout={timeout} mountOnEnter unmountOnExit>
                    {children}
                </transition> */}

                {/* <Fade in={open} timeout={timeout} mountOnEnter unmountOnExit>
                    {children}
                </Fade> */}
                {/* <Slide direction="down" in={open} timeout={timeout} mountOnEnter unmountOnExit>
                    {children}
                </Slide> */}
            </Modal>
        </>
    );
}

export default UserHomeCard;