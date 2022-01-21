import axios from "axios"

export async function getuseremail(useremail) {
    try {
        const axiosgetdata = await axios.get(`http://localhost:8080/member/email=${useremail}`);
        const axiosresult = await axiosgetdata.data;

        console.log("GetUserInfo", axiosresult.memberemail);
        return axiosresult.memberemail;
    } catch (error) {
        
    }


}

export async function createnewuser(currentuseremail, currentusername, currentuserprofileURL) {
    const axiospostdata = await axios.post("http://localhost:8080/member/", {
        membername: currentusername,
        memberemail: currentuseremail,
        membericon: currentuserprofileURL
    })

    //const axiosres = await axiospostdata.data;   

    return console.log("return cureateuser status", axiospostdata.status);

}

export async function getmemberid(currentuseremail) {
    const axiosget = await axios.get(`http://localhost:8080/member/email=${currentuseremail}`);
    const axiosdata = await axiosget.data;
    const memberid = await axiosdata.memberid;

    console.log("這是memberID", memberid);
    return memberid

}

export async function existenceemaillpassword(loginEmail,loginPassword){
    
    const useremail = await getuseremail(loginEmail);
//write useremail error message
    console.log(useremail);
    
    if(!!loginPassword===!!null){
        alert("密碼記得填寫")
    }
}