import { logEvent } from 'firebase/analytics';
import { getDatabase, get, ref, child, update } from 'firebase/database';
import React from 'react';
import { analytics } from '../Firebase/firebase-config';

function Test4() {
    const db = getDatabase();
    const dbRef = ref(getDatabase());

    const handleClick = async () => {
        // const getfirebasebackendinfo = await get(child(dbRef, `currentreg/num`));
        // const getprevnum = await getfirebasebackendinfo.val();
        // await update(ref(db, `currentreg/`), { num: getprevnum + 1 });
        // const getnewinfo = await get(child(dbRef, `currentreg/num`));
        // const getnewnum = await getnewinfo.val();




    }

    return <div>
        <button onClick={handleClick}>Click</button>
    </div>;
}

export default Test4;
