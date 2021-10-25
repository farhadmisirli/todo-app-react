import React, { Component } from "react";
import { TextField, Stack } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            open: false,
            edit_text: "",
            edit_task_index: null
        }
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            let new_task = e.target.value.trim();
            if(new_task) {
                let tasks = this.state.tasks;
                tasks.unshift(new_task);
                this.setState({'tasks': tasks, open: this.state.open, edit_text: "", edit_task_index: null});
    
                e.target.value = "";
            }
            
        }
    }


    editSelectedTask = (e) => {
        if(e.key === 'Enter'){
            let new_task = e.target.value.trim();
            if(new_task) {
                let tasks = this.state.tasks;
                tasks[this.state.edit_task_index] = new_task;
                this.setState({'tasks': tasks, open: this.state.open, edit_text: "", edit_task_index: null});

                e.target.value = "";
                this.closeModal();
            }
        }
    }
    

    deleteItem = (index) => {
        let tasks = this.state.tasks;
        tasks.splice(index, 1);
        this.setState({'tasks': tasks, open: this.state.open, edit_text: "", edit_task_index: null});
    }

    editItem = (index) => {
        let selected_task = this.state.tasks[index];
        this.setState({'tasks': this.state.tasks, open: true, edit_text: selected_task, edit_task_index:index});
        
    }


    closeModal = () => {
        this.setState({'tasks': this.state.tasks, open: false, edit_text: "", edit_task_index: null});
    };


    render() {
        return <>
            <Stack spacing={2}>
                <TextField id="outlined-basic" label="Add new task" variant="outlined" className="task_input" onKeyPress={this.handleKeyPress} />
            </Stack>

            <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
                {this.state.tasks.map((task, index) => {
                    const labelId = `checkbox-list-label-${index}`;
                    return (
                    <ListItem
                        key={index}
                        secondaryAction={
                            <>
                            <IconButton aria-label="Edit" onClick={() => this.editItem(index) } > 
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="Delete" onClick={() => this.deleteItem(index) } > 
                                <DeleteIcon />
                            </IconButton>
                        </>
                        }
                        disablePadding >

                        <ListItemButton role={undefined}  dense>
                            <ListItemIcon>
                                <Checkbox
                                edge="start"
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={task} />
                        </ListItemButton>


                    </ListItem>
                    );
                })}
            </List>


            {/* Modal */}
            <Dialog open={this.state.open} onClose={() => this.closeModal()}>
                <DialogTitle>Edit Task</DialogTitle>
                <DialogContent >
                    <TextField
                        autoFocus
                        margin="dense"
                        id="edit_task_input"
                        type="text"
                        fullWidth
                        variant="standard"
                        defaultValue={this.state.edit_text}
                        onKeyPress={this.editSelectedTask}

                    />
                    
                </DialogContent>
                <DialogActions>
                <Button onClick={() => this.closeModal()}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    }
}


export default Content;