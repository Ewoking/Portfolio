import {connect} from 'react-redux';
import { useState } from 'react';

const Projects = (props) => {
    return(
        <p>coucou</p>
    )
}

const mapStateToProps = (store) => {
    return {
        display: store.display
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(Projects);