import React from 'react'
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import 'App.css';
import stores from '../store/modules/member';

const styles = theme => ({
    hidden: {
        display: 'none'
    }
});

class BoardAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            rank: '',
            department: '',
            open: false
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
        this.addMember = this.addMember.bind(this)
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.addMember()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            name: '',
            rank: '',
            department: '',
            open: false
        })
    }

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addMember() {
        const memberList = stores.memberList;
        console.log("member is" + memberList);
        
        const formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('rank', this.state.rank)
        formData.append('department', this.state.department)
        const config = {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        }
        return post(memberList, formData, config)
    }

    handleClickOpen() {
        this.setState({
            open: true
        });
    }

    handleClose() {
        this.setState({
            name: '',
            rank: '',
            department: '',
            open: false
        })
    }

    render() {
        const { classes } = this.props;
        return(
            <div className="modal-container">
                <button onClick={this.handleClickOpen} className="btn-red btn-add">+</button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Member 추가</DialogTitle>
                    <DialogContent className="modal-input">
                        <TextField label="이름" type="text" name="name" value={this.state.name} onChange={this.handleValueChange} />
                        <TextField label="직급" type="text" name="rank" value={this.state.rank} onChange={this.handleValueChange} />
                        <TextField label="소속" type="text" name="department" value={this.state.department} onChange={this.handleValueChange} />
                    </DialogContent>
                    <DialogActions className="modal-btn-wrap">
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles) (BoardAdd);