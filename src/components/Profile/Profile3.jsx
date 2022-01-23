import React from "react";
import { useRef, useState, useEffect } from "react";
import "./profile3.css";
import { Avatar, Button, Divider, Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ProfileData from "./ProfileData";
import { getmemberallinfo } from "./getmemberinfo";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
// TODO :  City ID

export default function Profile3() {
  //用戶資訊
  const emailref = useRef("");
  const nicknameref = useRef("");
  const realnameref = useRef("");
  const birthdayref = useRef("");
  const arearef = useRef("");
  const signref = useRef("");

  //星座
  const [constellation, setConstellation] = useState("");

  //用戶照片URL
  let profileURL = localStorage.getItem("profileURL");
  //當前用戶所有資訊
  const [memberinfo, setMemberInfo] = useState({});
  //當前用戶生日
  const [currentbirth, setCurrentBirth] = useState("");
  //性別
  const [curgender, setCurGender] = useState("");

  useEffect(() => {
    const gdata = async () => {
      const axiosmemberinfo = await getmemberallinfo(
        localStorage.getItem("email")
      );
      if (axiosmemberinfo.memberbirth != null) {
        let memberbirth2 = await axiosmemberinfo.memberbirth;
        memberbirth2 = memberbirth2.toString().slice(0, 10);
        setCurrentBirth(() => memberbirth2);
      }
      setMemberInfo(axiosmemberinfo);

      return axiosmemberinfo;
    };
    gdata();
  }, []);
  //  var d1 = new Date(memberinfo.memberbirth);
  //    let memberbirth2 = d1.toISOString().slice(0,10)
  //   console.log((memberinfo.memberbirth).toString().slice(0,10));

  //能否修改
  const [edit, setEdit] = useState(false);
  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };

  const [profilesend, setProfileSend] = useState(false);

  const submitClick = async (e) => {
    e.preventDefault();
    await setProfileSend(!profilesend);
  };

  //判斷星座
  useEffect(() => {
    const month = parseInt(birthdayref.current.value.substr(5, 2));
    const day = parseInt(birthdayref.current.value.substr(8, 2));

    //console.log("月：", month);
    //console.log("日期:", date.substr(8, 2));

    const conditionconstellation = () => {
      switch (month) {
        case 1:
          setConstellation(day < 21 ? `♑摩羯座` : `♒水瓶座`);

          break;
        case 2:
          setConstellation(day < 20 ? `♒水瓶座` : `♓雙魚座`);
          break;
        case 3:
          setConstellation(day < 21 ? `♓雙魚座` : `♈牡羊座`);
          break;

        case 4:
          setConstellation(day < 21 ? `♈牡羊座` : `♉金牛座`);
          break;
        case 5:
          setConstellation(day < 22 ? `♉金牛座` : `♊雙子座`);
          break;
        case 6:
          setConstellation(day < 22 ? `♊雙子座` : `♋巨蠍座`);
          break;
        case 7:
          setConstellation(day < 23 ? `♋巨蠍座` : `♌獅子座🦁`);
          break;
        case 8:
          setConstellation(day < 24 ? `♌獅子座🦁` : `♍處女座`);
          break;
        case 9:
          setConstellation(day < 24 ? `♍處女座` : `♎天秤座`);
          break;
        case 10:
          setConstellation(day < 24 ? `♎天秤座` : `♏天蠍座`);
          break;
        case 11:
          setConstellation(day < 23 ? `♏天蠍座` : `♐射手座`);
          break;
        case 12:
          setConstellation(day < 22 ? `♐射手座` : `♑摩羯座`);
          break;

        default:
          break;
      }
    };
    conditionconstellation();
  }, [birthdayref.current.value]);

  return (
    <div
      style={{
        padding: "350px 300px 200px 440px",
        display: "flex",
        backgroundImage: 'url("/images/683602d049d4e3854580d5180cbbdaba.png")',
        backgroundSize: "100% 100%",
      }}
    >
      <div className="profile-container" style={{ fontSize: "1.5rem" }}>
        {profilesend && (
          <ProfileData
            profilesend={profilesend}
            setProfileSend={setProfileSend}
            emailref={emailref}
            nicknameref={nicknameref}
            realnameref={realnameref}
            curgender={curgender}
            birthdayref={birthdayref}
            arearef={arearef}
            signref={signref}
            profileURL={profileURL}
          />
        )}

        <form action="">
          <div className="row">
            <div className="background">
              <img
                className="profile3-backgroundimg"
                src="./img/1.jpg"
                alt=""
              />
            </div>

            <div className="profile3-img">
              <img className="avatarimg" src={profileURL} alt="" />
            </div>
          </div>
          <div className="profile-editbtn">
            <button
              className="profile-editbtn"
              style={{
                border: "none",
                backgroundColor: "transparent",
                justifyContent: "right",
              }}
              onClick={handleEdit}
            >
              <BorderColorSharpIcon sx={{ color: edit ? "red" : "black" }} />
            </button>
          </div>
          <div className="profile3-row">
            <div className="col-25">
              <label className="profile-label" htmlFor="email">
                電子信箱：
              </label>
            </div>

            <div className="col-75">
              <input
                type="email"
                id="email"
                className="email"
                name="firstname"
                disabled="disabled"
                placeholder="Your email.."
                value={localStorage.getItem("email")}
                ref={emailref}
              />
            </div>
          </div>
          <div className="profile3-row">
            <div className="col-25">
              <label className="profile-label" htmlFor="nickname">
                暱稱：
              </label>
            </div>
            <div className="col-75">
              <input
                type="text"
                required
                defaultValue={memberinfo.membernickname}
                ref={nicknameref}
                disabled={edit ? null : "disabled"}
                className="text"
                id="nickname"
                name="nickname"
                placeholder="暱稱..."
              />
            </div>
          </div>
          <div className="profile3-row">
            <div className="col-25">
              <label className="profile-label" htmlFor="fname">
                姓名：
              </label>
            </div>
            <div className="col-75">
              <input
                type="text"
                disabled={edit ? null : "disabled"}
                defaultValue={memberinfo.membername}
                ref={realnameref}
                className="text"
                id="fname"
                name="firstname"
                placeholder="姓名..."
              />
            </div>
          </div>

          <div className="profile3-row">
            <div className="col-25">
              <label className="profile-label" htmlFor="birthday">
                生日：
              </label>
            </div>
            <div className="col-75">
              <input
                disabled={edit ? null : "disabled"}
                defaultValue={currentbirth}
                className="profile-date"
                type="date"
                ref={birthdayref}
                id="birthday"
                name="lastname"
                placeholder="Your last name.."
              />
            </div>
          </div>
          <div>
            <div>
              <label>性別：</label>
            </div>
            <div style={{ marginLeft: "230px", marginTop: "-40px" }}>
              {console.log(memberinfo.membergender===1)}
              {console.log(curgender)}

              <input
                disabled={edit ? null : "disabled"}
                //defaultChecked={(memberinfo.membergender) !== 2}
                onChange={(e) => setCurGender(e.target.value)}
                type="radio"
                id="r1"
                name="gender"
                value="1"
              />
              <label for="r1">
                <span>男生</span>
              </label>
              <input
                type="radio"
                //defaultChecked={(memberinfo.membergender) ===1}
                disabled={edit ? null : "disabled"}
                value="2"
                id="r2"
                onChange={(e) => setCurGender(e.target.value)}
                name="gender"
                style={{ marginLeft: "80px" }}
              />
              <label for="r2">
                <span>女生</span>
              </label>
              
            </div>
            {memberinfo.membergender != null? <>當前性別：<span style={{marginLeft:'120px'}}>{(memberinfo.membergender) ===1?"男生":"女生"}</span></> : ""}
            {console.log(memberinfo.membergender)}
          </div>
          <div>
         
          </div>
          <div className="profile3-row">
            <div className="col-25">
              <label className="profile-label" htmlFor="constellations ">
                星座：
              </label>
            </div>
            <div className="col-75">
              <input
                value={constellation}
                disabled="disabled"
                type="text"
                className="text"
                id="constellations "
                name="constellations "
                placeholder="星座..."
              />
            </div>
          </div>
          <div className="profile3-row">
            <div className="col-25">
              <label className="profile-label" htmlFor="area">
                地區：
              </label>
            </div>
            <div className="col-75">
              <select
                id="area"
                name="country"
                ref={arearef}
                defaultValue={memberinfo.membercityid}
                disabled={edit ? null : "disabled"}
              >
                <optgroup label="北">
                  <option value="1">基隆市</option>
                  <option value="2">臺北市</option>
                  <option value="3">新北市</option>

                  <option value="4">桃園市</option>
                  <option value="5">新竹市</option>
                  <option value="6">新竹縣</option>

                  <option value="19">宜蘭縣</option>
                </optgroup>
                <optgroup label="中">
                  <option value="7">苗栗縣</option>
                  <option value="8">臺中市</option>
                  <option value="9">彰化縣</option>
                  <option value="10">南投縣</option>
                </optgroup>
                <optgroup label="南">
                  <option value="11">雲林縣</option>
                  <option value="12">嘉義市</option>
                  <option value="13">嘉義縣</option>
                  <option value="14">台南市</option>
                  <option value="15">高雄市</option>
                  <option value="16">屏東縣</option>
                </optgroup>
                <optgroup label="東">
                  <option value="17">台東縣</option>

                  <option value="18">花蓮縣</option>
                </optgroup>
                <optgroup label="離島">
                  <option value="20">澎湖縣</option>
                  <option value="21">金門縣</option>
                  <option value="22">連江縣</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div className="profile3-row">
            <div className="col-25">
              <label className="profile-label" htmlFor="sign">
                個性簽名：
              </label>
            </div>
            <div className="col-75">
              <textarea
                defaultValue={memberinfo.memberintro}
                id="sign"
                disabled={edit ? null : "disabled"}
                ref={signref}
                name="sign"
                placeholder="寫些特別的吧 ..."
                style={{ height: "200px" }}
              ></textarea>
            </div>
          </div>
          <br />
          <br />
          <br />

          <div
            className="profile3-row"
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <input
              disabled={edit ? null : "disabled"}
              className={edit ? "profile3-submit" : "profile3-notsubmit"}
              type="submit"
              value="送出"
              onClick={submitClick}
            />
          </div>
        </form>
        <Divider sx={{ color: "black" }} />
      </div>
    </div>
  );
}
