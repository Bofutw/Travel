import axios from 'axios';
import { logEvent } from 'firebase/analytics';
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { analytics } from '../Firebase/firebase-config';


function Test4() {
    // const db = getDatabase();
    // const dbRef = ref(getDatabase());
    const [data2, setData2] = useState([]);
    const [show, setShow] = useState(false);

    const handleClick = async () => {
        // const getfirebasebackendinfo = await get(child(dbRef, `currentreg/num`));
        // const getprevnum = await getfirebasebackendinfo.val();
        // await update(ref(db, `currentreg/`), { num: getprevnum + 1 });
        // const getnewinfo = await get(child(dbRef, `currentreg/num`));
        // const getnewnum = await getnewinfo.val();




    };
    const handleShow = (e) => {
        e.preventDefault();
        setShow(!show);
    }


    useEffect(() => {
        const test2 = async () => {
            const axiosdata = await (await axios.get("http://localhost:8080/member/")).data;
            // const axiosresult = await axiosdata.data;
            setData2(axiosdata);

        }
        test2();
        console.log(data2);

    }, [])

    return <div>
        <button onClick={handleClick}>Click</button>
        <button onClick={handleShow}>Show</button>
        {/* {JSON.stringify(data2)} */}
        {/* {console.log(data2)} */}
        <div style={{ width: '80%', height: '80vh', overFlow: 'scroll' }}>
            <div style={{ display: (show ? '' : 'none') }}>
                {data2.map((item, index) => <ul key={index}>
                    <li>memid：{item.memberid}<br />
                        name：{item.membername}<br />
                        email：{item.memberemail}
                    </li>
                </ul>)
                }
            </div>
        </div>

    </div>;
}

export default Test4;
