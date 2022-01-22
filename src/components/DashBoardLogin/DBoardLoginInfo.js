import { async } from "@firebase/util";
import { get, child, getDatabase, ref, update } from "firebase/database";
import { useNavigate } from "react-router-dom";


export async function getfirebaseinfo(currentemail, currentpassword) {
    const dbRef = ref(getDatabase());
    const db = getDatabase();

    const getfirebasebackendinfo = await get(child(dbRef, `admin/`));

    const getdatabaseemailpassword = await getfirebasebackendinfo.val();

    const { email, password, isadmin } = await getdatabaseemailpassword;

    if (email === currentemail && password === currentpassword) {
        await update(ref(db, `admin/`), { isadmin: "true" });
        const newinfo = await (await get(child(dbRef, `admin/`))).val();
        const { isadmin } = newinfo;
        return isadmin

    } else {
        return "false"
    }

}

export async function getisadmin() {
    const dbRef = ref(getDatabase());
    const getfirebasebackendinfo = await get(child(dbRef, `admin/`));

    const getdatabaseemailpassword = await getfirebasebackendinfo.val();

    const { isadmin } = getdatabaseemailpassword;
    return isadmin
}

export async function setisadmin() {
    const db = getDatabase();
    await update(ref(db, `admin/`), { isadmin: "false" });
}

export async function getadminloginpage() {
    const dbRef = ref(getDatabase());
    const getisloginpage = await get(child(dbRef, `admin/isloginpage`));
    const getvalue = await getisloginpage.val();
    return getvalue
}
export async function setfradminloginpage() {
    const db = getDatabase();
    await update(ref(db, `admin/`), { isloginpage: "false" });
}