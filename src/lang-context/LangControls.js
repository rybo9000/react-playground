import React from 'react'
import LanguageContext from './LanguageContext';

console.log(LanguageContext)

export default function LangControls(props) {
  return (
    
    <LanguageContext.Consumer>
        {(value) => {
            return (
                <>
                <button disabled={value.lang === 'en-GB'} onClick={() => props.onSetLang('en-GB')}>
                  British{' '}
                  <span role='img' aria-label='en-GB'>🇬🇧</span>
                </button>
                {' '}
                <button disabled={value.lang === 'en-US'} onClick={() => props.onSetLang('en-US')}>
                  American{' '}
                  <span role='img' aria-label='en-US'>🇺🇸</span>
                </button>
                {' '}
                <button disabled={value.lang === 'ko'} onClick={() => props.onSetLang('ko')}>
                  Korean{' '}
                  <span role='img' aria-label='ko'>🇰🇷</span>
                </button>
              </>
            )
        }}
    </LanguageContext.Consumer>
    

  );
}