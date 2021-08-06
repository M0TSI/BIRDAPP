import React from 'react';
import '../components/styles/Base.css';
import Image from './Image'
import Description from './Description';
// ES7 snippets to do 'rfce'

function Base() {

        return (
        <div className='bigcontainer'>
            <Image/>
            <Description/>
        </div>
    )
}

export default Base