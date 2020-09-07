import React from "react";

// MATERIAL-UI CORE COMPONENTS
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
  Grid,
} from "@material-ui/core/";

// MATERIAL-UI ICONS
import { SendSharp, MailOutline, CreditCard } from "@material-ui/icons/";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        style={{
          width: "80%",
          margin: "2rem auto",
          display: "flex",
          height: "3rem",
          background: "var(--main-red)",
          color: "white",
        }}
        endIcon={<SendSharp />}
        onClick={handleClickOpen}
        type="submit"
        name="submit"
      >
        CHECKOUT
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"INTEGRATED PAYMENT SYSTEM GOES HERE"}
        </DialogTitle>
        <DialogContent>
          <FormControl>
            <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <MailOutline />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="credit-card">Credit Card Number</InputLabel>
            <Input
              id="credit-card"
              startAdornment={
                <InputAdornment position="start">
                  <CreditCard />
                </InputAdornment>
              }
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            CLOSE
          </Button>
          <Button onClick={handleClose} color="primary">
            CHECKOUT
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
