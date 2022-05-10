import React, { useEffect, useState } from "react";


const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const changeLocalStatus = (e) => { setStatus(e.currentTarget.value) }

    const activeEditMode = () => {setEditMode(true)}
    const deactivateEditMode = () => {
      setEditMode(false)
      props.updateStatus(status)
    };

    useEffect(() => {
      setStatus(props.status)
    },[props.status]);


    return (
      <div>
        {!editMode && ( 
          <div>
            <span onDoubleClick={activeEditMode}>{props.status || 'No status'}</span>
          </div>
        )}
        {editMode && (<div>
            <input autoFocus={true} onChange={changeLocalStatus} value={status} onBlur={deactivateEditMode}/>
          </div>
        )}
      </div>
    );
  
}

export default ProfileStatusWithHooks;
