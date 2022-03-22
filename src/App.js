import React, {useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles';

const alanKey = '63268e136420b510300c3a13e7c7e3ee2e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();
    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles, number}) => {
                if(command === "newHeadlines") {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }
                else if(command === "highlight") {
                    setActiveArticle((prevActiveArticle)=> prevActiveArticle + 1);
                }
                else if(command === "open"){
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }): number;
                    if(parsedNumber > articles.length){
                        alanBtn().playText('Please try that again../');
                    }
                    else {
                        const article = articles[parsedNumber - 1];
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening ...');
                    }
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
                <NewsCards articles={newsArticles} active={activeArticle} />
            </div>
        </>
    )
}

export default App;