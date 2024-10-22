import { t } from "i18next"
import Contact from "../../../Contact/Contact"

const MenuTransformation = () => {
  return <div className="boxCont">
    {/* <div className="textUp">Profile</div> */}
    <div className="textUp">{t('comment')}</div>
    <div className="box">
      <textarea className='inputProfile' rows={2} cols={10} placeholder={t('opinion')}>

      </textarea>
      <input className="submit" type="submit" value="Submit" />
    </div>

    <div className="textOne">{t('forMe')}</div>
    <div className="boxOne">
      I'm in IT sphere since I'm a child. At the beginning I started with Pascal, Perl and PHP then Flash - all that time was mixed with Network Engineering own businesses and last years I end up mainly Front-End with ReactJS and many more.
    </div>
    <div className="textTwo">{t('contact')}</div>
    <div className="boxTwo">
      <Contact />
      {/* contact@ben.bg */}
    </div>
  </div>
}

export default MenuTransformation