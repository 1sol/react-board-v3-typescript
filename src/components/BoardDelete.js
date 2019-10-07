import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
// import memberList from '../store/modules/member';

const authKey = "1234";

class BoardDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleClickOpen() {
        this.setState({
            open: true
        });
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    handleRemove = () => {
        this.setState({
            // memberList: memberList.filter(id !== id)
        });
    }

    render() {
        return (
            <div>
                <Button color="secondary" onClick={this.handleClickOpen}>삭제</Button>
                <Dialog onClose={this.handleClose} open={this.state.open}>
                    <DialogTitle onClose={this.handleClose}>알림</DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>선택한 멤버 정보가 삭제됩니다.</Typography>
                    </DialogContent>
                    <DialogActions className="modal-btn-wrap">
                        <Button variant="contained" color="primary" onClick={(e) => {this.handleRemove(this.props.id)}}>삭제</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                    </Dialog>
            </div>
        );
    }
}

export default BoardDelete;