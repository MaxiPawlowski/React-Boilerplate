import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sampleAction } from 'actions';
import { withStyles } from 'react-jss';
import { navigate } from 'utils/history'
import styles from './styles'

class Landing extends Component {
  render() {
    const {
      classes,
      changeData,
      data,
    } = this.props;

    return (
      <div>
        <button type='button' onClick={() => { navigate('/test') }}>Navigate</button>
        <div className={classes.container}>
          <input className={classes.input} onChange={(event) => changeData(event.target.value)} />
          <span className={classes.paragraph}>{data}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.sampleReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  changeData: (payload) => dispatch(sampleAction(payload)),
});


Landing.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired,
  }).isRequired,

  changeData: PropTypes.func.isRequired,
};

export const StyledApp = withStyles(styles)(Landing);

export default connect(mapStateToProps, mapDispatchToProps)(StyledApp);
