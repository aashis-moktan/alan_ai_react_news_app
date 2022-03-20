import React, {useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles';

const alanKey = '63268e136420b510300c3a13e7c7e3ee2e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const classes = useStyles();
    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles}) => {
                if(command === "newHeadlines") {
                    setNewsArticles(articles);
                }
            }
        })
    },[]);
    const alanLogoSrc = 'https://miro.medium.com/max/600/1*CJyCnZVdr-EfgC27MAdFUQ.jpeg';    
    return (
        <>
            <div>
                <div className={classes.logoContainer}>
                    <img src={alanLogoSrc} alt="Alan Logo" className={classes.alanLogo} />
                </div>
                <NewsCards articles={newsArticles} />
            </div>
        </>
    )
}

export default App;