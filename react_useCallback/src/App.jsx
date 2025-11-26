import React from 'react'
import { Withoutusecallback } from './components/withoutusecallback';
import ChatApp from './chatApp/ChatApp';
import ChatAppNoUseCallback from './chatApp/ChatAppNouse';

const App = () => {
  return (
    <div>
      <ChatApp/>
      {/* <ChatAppNoUseCallback/> */}
      {/* <Withoutusecallback/> */}
    </div>
  )
}

export default App;