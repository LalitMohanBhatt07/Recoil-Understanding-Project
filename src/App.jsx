import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atoms'

function App() {
  return(
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}

const MainApp=()=>{
  const networkNotificationAtom=useRecoilValue(networkAtom)
  const jobsAtomCount=useRecoilValue(jobsAtom)
  const notificationAtomCount=useRecoilValue(notificationAtom)
  const [messagingAtomCount,setMessagingAtomCount]=useRecoilState(messagingAtom)

  const finalValue=networkNotificationAtom>=100?"99+":networkNotificationAtom;
  return (
    <>
    <button>Home</button>
     <button>My network ({finalValue})</button>
     <button>Jobs ({jobsAtomCount})</button>
     <button>Messaging ({messagingAtomCount})</button>
     <button>Notification ({notificationAtomCount})</button>

     <button onClick={()=>setMessagingAtomCount((e)=>e+1)}>Me</button>
    </>
  )
}

export default App
