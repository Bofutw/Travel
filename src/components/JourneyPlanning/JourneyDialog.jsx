import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link,useNavigate } from 'react-router-dom';
import DatePicker from './DatePicker';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import './journeyhome.css'

export default function JourneyDialog({ open, setOpen, openMap, setOpenMap }) {
    // const [open, setOpen] = useState(false);
    let nagative = useNavigate()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handlestart = () => {
        window.localStorage.title = document.getElementById ("inputtitle").value
        window.location.reload();
        setOpen(false);
        window.location.href = "/map"
        
    }

    const handleClose = (e) => {

        setOpenMap(true);
        console.log("JourneyDialog", openMap);
        setOpen(false);




    };

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
            </Button> */}
            <Dialog
                open={open}
                onClose={handleClose}
                onBackdropClick={false}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <div id='jourti'>選擇旅程時間</div>
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description" >
                    </DialogContentText>
                    <DatePicker />
                </DialogContent>
                
                    {/* <label>為您的旅程取個名字</label><input id = "inputtitle" /> */}
                <TextField
                    /* autoFocus */
                    margin="dense"
                    id="inputtitle"
                    label="為您的旅程取個名字"
                    type="text"
                    sx={{width:'400px',marginX:'40px'}}
                    /* fullWidth */
                    variant="standard"
                />
                <DialogActions>
                    <LoadingButton

                        onClick={handlestart}
                        endIcon={<SendIcon />}
                        /* loading={loading} */
                        loadingPosition="end"
                        variant="outlined"
                    >
                        開始旅程
                    </LoadingButton>

                    <Button onClick={handleClose} color='warning' variant="outlined" endIcon={<DeleteIcon />}>
                        取消
                        </Button>
                    {/* <Button onClick={handleClose}>關閉</Button> */}
                   {/*  <Button onClick={handlestart} autoFocus>
                        <Link to={openMap ? "/map" : "/journeyplanhome"} ></Link>
                        {console.log(openMap ? "true" : "false")}
                        開始
                    </Button> */}
                </DialogActions>
            </Dialog>
        </div>
    );
}
