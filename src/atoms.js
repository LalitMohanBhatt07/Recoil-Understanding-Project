import { atom, selector } from "recoil";

export const networkAtom=atom({
    key:"networkAtom",
    default:102
})

export const jobsAtom=atom({
    key:"jobsAtom",
    default:0 
})

export const notificationAtom=atom({
    key:"notificationAtom",
    default:12
})

export const messagingAtom=atom({
    key:"messagingAtom",
    default:0
})

// ? if we are having asynchronous data queries like we know that the data is coming from library that in that case we will perform following task
// export const notifications=atom({
// key:"notifications",
// default:selector({
//     key: "networkAtomSelector",
//     get:async()=>{
//         const res=await axios.get('https://sum-server.100xdevs.com/notification')
//         return res.data;
//     }
// })

// })

export const totalNotificationSelector=selector({
    key:"totalNotificationSelector",
    get:({get})=>{
        const networkAtomCount=get(networkAtom);
        const notificationAtomCount=get(notificationAtom);
        const jobsAtomCount=get(jobsAtom)

        return networkAtomCount+jobsAtomCount+notificationAtomCount
    }
})