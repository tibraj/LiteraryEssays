import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Essays = ({}) => {
    return (
        userEssays
    )
}

mapStateToProps = ({Essays}) => {
    return {
        Essays
    }
}
export default connect(mapStateToProps)(Essays)