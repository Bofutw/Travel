import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
import { getmemberid } from "../Login/LoginFn";
import ProfileMessage from "./ProfileMessage";
export default function ProfileData({
  profilesend,
  setProfileSend,
  emailref,
  nicknameref,
  realnameref,
  curgender,
  birthdayref,
  profileURL,
  arearef,
  signref,
}) {
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  let memberid = localStorage.getItem("memberid");
  let email = emailref.current.value;
  let nickname = nicknameref.current.value;
  let birthday = birthdayref.current.value;
  let gender = curgender;
  let area = `cityid=${parseInt(arearef.current.value)}`;
  let sign = signref.current.value;
  let realname = realnameref.current.value;
  // realname, email, profileURL, nickname, birthday, area, sign
  let profiledata = {
    memberid: memberid,
    membername: realname,
    memberemail: email,
    membericon: profileURL,
    membernickname: nickname,
    memberbirth: birthday,
    membergender: gender,
    memberintro: sign,
  };
  console.log(memberid);

  //系統提示訊息
  const [suopen, setSuOpen] = useState(false);
  const [sumessage, setSuMessage] = useState("");


  // const handleClickOpen = () => {
  //   setOpen(true);
  //   setProfileSend(true);
  //   setAgree(false);
  // };

  const handleClose = () => {
    setProfileSend(false);
    setAgree(false);
  };

  const handleAgree = async (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(async () => {
      try {
        setLoading(true);
        const axiospost = await axios.put(
          `http://localhost:8080/member/${area}`,
          profiledata
        );

        const axiosresult = await axiospost.data;


        console.log("successs", axiosresult);
        setSuOpen(true);
        const str = "修改成功"
        setSuMessage(() => str);
        console.log(str);
        // window.location.reload();



        setTimeout(() => {
          setProfileSend(false);
        }, 2300);

      } catch (error) {
        console.log(error);
      }
    }, 2000);
    console.log(profiledata);


  };

  return (
    <div>
      {suopen && <ProfileMessage suopen={suopen} setSuOpen={setSuOpen} sumessage={sumessage} />}
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        開啟對話窗
      </Button> */}
      <Dialog
        open={profilesend}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onBackdropClick={() => setProfileSend(false)}
      >
        <DialogTitle id="alert-dialog-title">
          <h3>提示視窗</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h5> 確定要把表單送出嗎?</h5>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {loading ? (
            <LoadingButton
              loadingPosition="center"
              loading={loading}
              variant="outlined"
              disabled


            >
              等待中
            </LoadingButton>
          ) : (
            <>
              <Button onClick={handleAgree} autoFocus>
                確認送出
              </Button>
              <Button onClick={handleClose}>再想想</Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
