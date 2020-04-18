import React, { useState } from 'react'

const CheckBox = (props) => {

    const [userChecked, setUserChecked] = useState(true);
    const [userCheckedChange, setUserChackedChange] = useState(false); //Для того, чтобы админ менял статус привелегию


    return props.privileges ? (
        <input type="checkbox" checked ></input>

    ) : <input type="checkbox" checked={userCheckedChange}></input>
}
export { CheckBox }
