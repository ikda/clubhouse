import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Form, Input } from 'reactstrap';
import { Button } from 'reactstrap';



const forms = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 19,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class MyProfileSettingForm extends React.Component {
  state = {
    name: 'Johan Cruyff',
    location: 'Amsterdam, Netherlands',
    position: 'FW',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleClick = () => {
    console.log('this is:', this);
  }


  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <div>
          <Button color="link" onClick={this.handleClick}>
              완료
          </Button>
        </div>
        <div>
          <MyImage />
        </div>
        <div>
          <TextField
            id="standard-name"
            label="NAME"
            value={this.state.name}
            onChange={this.handleChange('name')}
            className={classes.textField}
            defaultValue="NAME"
            style={{ margin: 8 }}
            placeholder="name"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div>
          <TextField
            id="location"
            label="LOCATION"
            value={this.state.location}
            onChange={this.handleChange('location')}
            className={classes.textField}
            defaultValue="location"
            style={{ margin: 8 }}
            placeholder="location"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div>
          <TextField
            id="position"
            label="POSITION"
            value={this.state.position}
            onChange={this.handleChange('position')}
            className={classes.textField}
            defaultValue="position"
            style={{ margin: 8 }}
            placeholder="position"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

      </form>
    );
  }
}

MyProfileSettingForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

class MyImage extends React.Component{
  render(){
    return (
      <img src={('#')} alt="image" width="180" height="200"/>
    )
  }
}

export default withStyles(forms)(MyProfileSettingForm);
