import { Statistics } from "./Statistics/Statistics";
import data from '../../src/data.json'
import { FriendList } from "./FriendList/FriendList";
import friends from '../../src/friends.json'

export const App = () => {
  return (
    <div>
      <Statistics stats={data} title='UPLOAD STATS'/>
      <FriendList friends={friends}/>
    </div>
  );
};
