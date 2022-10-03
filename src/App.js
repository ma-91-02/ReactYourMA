import logo from './images/logo.png';
import './App.css';
import SelectLang from './components/selecteLang/SelectLang';
import { useTranslation } from "react-i18next";


function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h1>{t("welcome")} {t("your")} {t("MA")}</h1>
      <SelectLang/>
      </header>
    </div>
  );
}

export default App;
