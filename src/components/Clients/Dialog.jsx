import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({ handleClose, open, handleClickHome }) {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Thank you, your request was received.
                </DialogTitle>
                <DialogContent>
                    <DialogContentText className='text-center' id="alert-dialog-description">
                        You are being vetted, once approved you will be notified.
                    </DialogContentText>
                </DialogContent>
                <div className="text-center" style={{ marginRight: "150px" }}>

                    <DialogActions >
                        <button onClick={handleClose} className='btn btn-danger btn-md'>Cancel</button>
                        <button onClick={handleClickHome} className="btn btn-md btn-success" autoFocus>
                            Go Home
                        </button>

                    </DialogActions>
                </div>

            </Dialog >
        </div >
    );
}