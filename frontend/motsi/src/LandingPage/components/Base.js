import React from 'react';
import '../components/styles/Base.css';
import Image from './Image'
import Description from './Description';
// ES7 snippets to do 'rfce'

function Base() {

        return (
        <React.Fragment>
        <div className='bigcontainer'>
            <Image/>
            <Description/>
        </div>
        </React.Fragment>
    )
}

export default Base