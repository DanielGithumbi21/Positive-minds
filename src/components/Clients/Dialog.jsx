import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({ handleClose, open, handleClickHome, title, content, button }) {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText className='text-center' id="alert-dialog-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <div className="text-center" style={{ marginRight: "150px" }}>

                    <DialogActions >
                        <button onClick={handleClose} className='btn btn-success btn-md'>Cancel</button>
                        <button onClick={handleClickHome} className="btn btn-md btn-danger" autoFocus>
                            {button}
                        </button>

                    </DialogActions>
                </div>

            </Dialog >
        </div >
    );
}