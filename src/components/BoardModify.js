import React from 'react'
import stores from '../store/modules/member';

class BoardModify extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            rank: '',
            department: ''
        }

    }

    handleModify = (id, data) => {
        const memberList = stores.memberList;
        this.setState({
            memberList: memberList.map(
                info => id === info.id ? { ...info, ...data } : info
            )
        })
    }

    renter() {
        const { memberList, keyword } = this.state;
        const filterList = memberList.filter(
            info => info.name.indexOf(keyword) !== -1
        );
        return(
            <div className="modal-container">
                <button onClick={this.handleClickOpen}></button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle></DialogTitle>
                    <DialogContent className="modal-input">
                        <TextField label="이름" type="text" name="name" value={this.state.name} onChange={this.handleValueChange} />
                        <TextField label="직급" type="text" name="rank" value={this.state.rank} onChange={this.handleValueChange} />
                        <TextField label="소속" type="text" name="department" value={this.state.department} onChange={this.handleValueChange} />
                    </DialogContent>
                    <DialogActions className="modal-btn-wrap">
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>수정</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default BoardModify;