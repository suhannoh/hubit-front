import ChatRoom from '../../components/ChatRoom'
import userStore from '../../store/user'

export default function Community() {
  const {user} = userStore();
  return (
    <div>
      <h2>준비중입니다</h2>
      <ChatRoom roomId={0} user={user}/>
    </div>
  )
}
