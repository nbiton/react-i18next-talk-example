import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from "react-i18next";
import {useCallback} from "react";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = useCallback(() => {
    i18n.changeLanguage(i18n.language === 'en' ? 'he' : 'en');
  }, [i18n.language]);
  const fileName = 'src/App.js'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Trans i18nKey='mainInstruction'>
            Edit <code>{{fileName}}</code> and save to <strong>reload.</strong>
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('learnReact')}
        </a>

        <button onClick={changeLanguage}>{t('changeLang')}</button>
      </header>
    </div>
  );
}

export default App;
