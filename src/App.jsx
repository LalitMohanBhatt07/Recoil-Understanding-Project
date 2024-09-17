import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'

function App() {
  return(
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}

//! SELCTOR -> Selector is the value which is derved from other atoms

const MainApp=()=>{
  const networkNotificationAtom=useRecoilValue(networkAtom)
  const jobsAtomCount=useRecoilValue(jobsAtom)
  const notificationAtomCount=useRecoilValue(notificationAtom)
  const [messagingAtomCount,setMessagingAtomCount]=useRecoilState(messagingAtom)
  const totalNotificationCount=useRecoilValue(totalNotificationSelector);

  const finalValue=networkNotificationAtom>=100?"99+":networkNotificationAtom;
  return (
    <>
    <button>Home</button>
     <button>My network ({finalValue})</button>
     <button>Jobs ({jobsAtomCount})</button>
     <button>Messaging ({messagingAtomCount})</button>
     <button>Notification ({notificationAtomCount})</button>

     <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
