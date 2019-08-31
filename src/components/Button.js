import React, { Component } from 'react';
import { setSorted } from '../redux/actions';
import { connect } from 'react-redux';

const styles = {
    btnStyle: {
        border: 'teal solid 1px',
        borderRadius: 5,
        backgroundColor: '#fff',
        cursor: 'pointer',
        color: 'teal',
        textTransform: 'uppercase',
        padding: 10,
        marginRight: 10
    }
}

class Button extends Component {
    render() {
        return (
            <div style={{display: 'flex'}}>
                <button style={styles.btnStyle} onClick={() => this.props.setSorted(true)}>Show Sorted</button>
                <button style={styles.btnStyle} onClick={() => this.props.setSorted(false)}>Show Un-Sorted</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSorted: sortState => dispatch(setSorted(sortState)) 
    }
}

export default connect(null, mapDispatchToProps)(Button);