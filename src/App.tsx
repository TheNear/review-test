import React, { useState } from "react";
import UserList from "./components/UserList";

function App() {
    const [isShowUserList, setIsShowUserList] = useState(true);

    return (
        <div className="App">
            <UserList enabled={isShowUserList} setIsShowUserList={setIsShowUserList} enableEscapeExit />
            {/** Кнопка чтобы показать список пользователей к награде */}
            <button onClick={() => setIsShowUserList(true)}>Показать пользователей к награде</button>
        </div>
    );
}

export default App;
