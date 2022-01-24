import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function LoginErrorMessage({ open, setOpen, errormessage, sumessage, suopen, setSuOpen }) {
  const handleClose = () => {
    setOpen(false);

  }
  const handleClose2 = () => {
    setSuOpen(false);
  }

  return <>

    {/* <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%', '&:hover': { boxShadow: ' 3px 7px #78002e' } }}>
        <AlertTitle>Error</AlertTitle>

        {errormessage}
      </Alert>
    </Snackbar> */}

    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert variant="filled" onClose={handleClose2} severity="success" sx={{ width: '100%', '&:hover': { boxShadow: ' 3px 7px #78002e' } }}>
        <AlertTitle>Success</AlertTitle>

        {sumessage}
      </Alert>
    </Snackbar>
  </>;
}

export default LoginErrorMessage;
