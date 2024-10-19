import { t } from "i18next"

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
    <div className="boxOne">Lorem sub one text Lorem \
      Lorem sub one text Lorem \
      Lorem sub one text Lorem \
      Lorem sub one text Lorem \
      Lorem sub one text Lorem \
    </div>
    <div className="textTwo">{t('contact')}</div>
    <div className="boxTwo">contact@ben.bg</div>
  </div>
}

export default MenuTransformation