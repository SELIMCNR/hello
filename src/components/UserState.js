import React, { useState } from 'react';


function UserState() {
    const [user, setUser] = UserState({ name: "Mehmet", surname: "Seven" });
    return (
        <div>
            <h2>User</h2>
            {user.name} {user.surname}
            <br />
            <br />
            <div>
                <button onClick={() => setUser({ ...user, name: "Ahmet" })}>İsmi Değiştir</button>
                <button onClick={() => setUser({
                    ...user, surname: "Test soyisim"
                })}>Soyismi Değiştir</button>
            </div>
        </div>
    )
}

export default UserState

