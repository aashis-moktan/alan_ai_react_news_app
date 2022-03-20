import React, {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '63268e136420b510300c3a13e7c7e3ee2e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
    useEffect(()=>{
        alanBtn({
            key: alanKey,
            command: ({command}) => {
                if(command === "test") {
                    alert('Hello World');
                }
            }
        })
    },[]);    
    return (
        <>
            <h1>This si alan ai powered react news application</h1>
        </>
    )
}

export default App;