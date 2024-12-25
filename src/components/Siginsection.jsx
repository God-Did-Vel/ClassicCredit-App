import { useState } from "react";
import "./SignSection.css";
import signImage from "./Images/img1.png";

export const Siginsection = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formMovment, setFormMovenemt] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleForm = () => {
    setFormMovenemt(isSignIn ? "move-left" : "move-right");
    setIsSignIn(!isSignIn);

    setTimeout(() => {
      setFormMovenemt("");
    }, 1000);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="sign-section">
      <img src={signImage} alt="Sign In" className="background-image" />
      <div className={`form-container ${formMovment}`}>
        {isSignIn ? (
          <form className="sign-in-form">
            {/* <h2>Sign In</h2> */}
            <input type="email" placeholder="Email or Phone Number" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="submit-button">
              Sign In
            </button>
            <div className="form-footer">
              <p>
                Dont Have an account?{" "}
                <span onClick={toggleForm} className="toggle-link">
                  Sign Up
                </span>
              </p>
              <div className="language-selector">
                <label htmlFor="language">Language </label>
                <select
                  id="language"
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Hindi">Hindi</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="aa">Afar</option>
                  <option value="af">Abkhazian</option>
                  <option value="ar">Arabic</option>
                  <option value="bg">Bulgarian</option>
                  <option value="bh">Bihari</option>
                  <option value="bo">Tibetan</option>
                  <option value="cs">Czech</option>
                  <option value="da">Danish</option>
                  <option value="dz">Bhutani</option>
                  <option value="el">Greek</option>
                  <option value="eo">Esperanto</option>
                  <option value="et">Estonian</option>
                  <option value="fa">Persian</option>
                  <option value="fi">Finnish</option>
                  <option value="fj">Fiji</option>
                  <option value="ga">Irish</option>
                  <option value="gd">Scots Gaelic</option>
                  <option value="gl">Galician</option>
                  <option value="hi">Hindi</option>
                  <option value="he">Hebrew</option>
                  <option value="hr">Croatian</option>
                  <option value="hu">Hungarian</option>
                  <option value="hy">Armenian</option>
                  <option value="id">Indonesian</option>
                  <option value="is">Icelandic</option>
                  <option value="it+">Italian</option>
                  <option value="ja">Japanese</option>
                  <option value="jw">Javanese</option>
                  <option value="ka">Georgian</option>
                  <option value="kl">Greenlandic</option>
                  <option value="km">Cambodian</option>
                  <option value="ko">Korean</option>
                  <option value="ku">Kurdish</option>
                  <option value="la">Latin</option>
                  <option value="lo">Laothian</option>
                  <option value="lt">Lithuanian</option>
                  <option value="mk">Macedonian</option>
                  <option value="mn">Mongolian</option>
                  <option value="mo">Moldavian</option>
                  <option value="ms">Malay</option>
                  <option value="ne">Nepali</option>
                  <option value="nl">Dutch</option>
                  <option value="no">Norwegian</option>
                  <option value="pl">Polish</option>
                  <option value="pt">Portuguese</option>
                  <option value="ru">Russian</option>
                  <option value="ro">Romanian</option>
                  <option value="sk">Slovak</option>
                  <option value="sl">Slovenian</option>
                  <option value="sr">Serbian</option>
                  <option value="sq">Albanian</option>
                  <option value="sv">Swedish</option>
                  <option value="th">Thai</option>
                  <option value="tr">Turkish</option>
                  <option value="uk">Ukrainian</option>
                  <option value="uz">Uzbek</option>
                  <option value="vi">Vietnamese</option>
                  <option value="zh">Chinese</option>
                </select>
              </div>
            </div>
          </form>
        ) : (
          <form className="sign-up-form">
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="password" required />
            <button type="submit" className="submit-button">
              Sign Up
            </button>
            <div className="form-footer">
              <p>
                Already have an account?
                <span onClick={toggleForm} className="toggle-link">
                  Sign In
                </span>
              </p>
              <div className="language-selector1">
                <lable htmlFor="language">Language  </lable>
                <select
                  id="language"
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Hindi">Hindi</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="aa">Afar</option>
                  <option value="af">Abkhazian</option>
                  <option value="ar">Arabic</option>
                  <option value="bg">Bulgarian</option>
                  <option value="bh">Bihari</option>
                  <option value="bo">Tibetan</option>
                  <option value="cs">Czech</option>
                  <option value="da">Danish</option>
                  <option value="dz">Bhutani</option>
                  <option value="el">Greek</option>
                  <option value="eo">Esperanto</option>
                  <option value="et">Estonian</option>
                  <option value="fa">Persian</option>
                  <option value="fi">Finnish</option>
                  <option value="fj">Fiji</option>
                  <option value="ga">Irish</option>
                  <option value="gd">Scots Gaelic</option>
                  <option value="gl">Galician</option>
                  <option value="he">Hebrew</option>
                  <option value="hr">Croatian</option>
                  <option value="hu">Hungarian</option>
                  <option value="hy">Armenian</option>
                  <option value="id">Indonesian</option>
                  <option value="is">Icelandic</option>
                  <option value="it+">Italian</option>
                  <option value="ja">Japanese</option>
                  <option value="jw">Javanese</option>
                  <option value="ka">Georgian</option>
                  <option value="kl">Greenlandic</option>
                  <option value="km">Cambodian</option>
                  <option value="ko">Korean</option>
                  <option value="ku">Kurdish</option>
                  <option value="la">Latin</option>
                  <option value="lo">Laothian</option>
                  <option value="lt">Lithuanian</option>
                  <option value="mk">Macedonian</option>
                  <option value="mn">Mongolian</option>
                  <option value="mo">Moldavian</option>
                  <option value="ms">Malay</option>
                  <option value="ne">Nepali</option>
                  <option value="nl">Dutch</option>
                  <option value="no">Norwegian</option>
                  <option value="pl">Polish</option>
                  <option value="pt">Portuguese</option>
                  <option value="ru">Russian</option>
                  <option value="ro">Romanian</option>
                  <option value="sk">Slovak</option>
                  <option value="sl">Slovenian</option>
                  <option value="sr">Serbian</option>
                  <option value="sq">Albanian</option>
                  <option value="sv">Swedish</option>
                  <option value="th">Thai</option>
                  <option value="tr">Turkish</option>
                  <option value="uk">Ukrainian</option>
                  <option value="uz">Uzbek</option>
                  <option value="vi">Vietnamese</option>
                  <option value="zh">Chinese</option>
                </select>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
