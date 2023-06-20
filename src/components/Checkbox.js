import { useState } from 'react'

function Checkbox({ checkedLocation, setCheckedLocation }) {

    console.log(checkedLocation)
    return (
        <div>
            <label htmlFor='location'>Location</label>
            <input
                type='checkbox'
                id='location'
                name='location'
                value='location'
                checked={checkedLocation}
                onChange={(e) => setCheckedLocation(e.target.checked)}
            />
        </div>
    )
}

export default Checkbox