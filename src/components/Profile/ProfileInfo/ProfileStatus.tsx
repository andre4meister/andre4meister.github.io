import React, {ChangeEvent} from "react";

type PropsType = {
    props: {
    updateStatus: (status: string)=> void
    status: string
  }

}

type StateProps = {
  editMode: boolean
  status: string
}

class ProfileStatus extends React.Component<PropsType, StateProps> {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode() {
    this.setState({
      editMode: true,
      status: this.props.status,
    });
    
  }
  deactivateEditMode() {
    this.setState({editMode: false})
    this.props.updateStatus(this.state.status)
  };

  onStatusChange =(e: ChangeEvent<HTMLInputElement>): void =>{
    this.setState({
      status: e.currentTarget.value,
    });
  }

  componentDidUpdate(prevProps: PropsType, prevState: StateProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  }
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || 'No status'}</span>
          </div>
        )}
        {this.state.editMode && (<div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
