import { CredentialResponse, GoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { SSO } from '../../../types/types';

const Google = () => {

  const [isLogged, isLoggedSet] = useState<SSO>();
  const [el, elSet] = useState<HTMLElement | null>();

  function handleLoginSuccess(credentialResponse: CredentialResponse) {
    console.log('credentialResponse.credential', credentialResponse)
    const idToken = credentialResponse.credential;
    axios.post('http://localhost:5000/auth/google', { token: idToken })
      .then(response => (console.log('Backend response:', response.data), isLoggedSet(response.data)))
      .catch(error => console.error('Login error:', error));
  }

  function logout() {
    googleLogout();
    isLoggedSet(undefined);
    console.log("User logged out", isLogged);
    // Clear any user data from your app’s state if needed
  }
  // const el = document.querySelector<HTMLElement>('.nsm7Bb-HzV7m-LgbsSe')
  // nsm7Bb-HzV7m-LgbsSe
  useEffect(() => {
    const el = document.querySelector<HTMLElement>('.nsm7Bb-HzV7m-LgbsSe')
    elSet(el)
    console.log('el', el)
    el === null ? '' : document.querySelector<HTMLElement>('.nsm7Bb-HzV7m-LgbsSe')!.style.backgroundColor = '#242424'
  }, [el])

  return <>

    <div className={isLogged?.user?.email_verified ? 'googleContLogged ' : 'googleCont'}>

      <div className='googleSign'>
        {
          isLogged?.user?.email_verified ?

            <div
              className='googleTextLogged'
            >
              <img src={isLogged?.user?.picture} width={24} style={{ paddingLeft: '5px' }} alt="user image" />
              <span style={{ paddingLeft: '5px' }} >{isLogged?.user?.name}</span>
            </div>
            :
            <div
              className='googleText'
            >
              Login
            </div>
        }
        {
          !isLogged?.user?.email_verified && <GoogleLogin
            shape="circle"
            type="icon"
            size="medium"

            onSuccess={handleLoginSuccess}
            onError={() => console.log('Login Failed')}
          />
        }
      </div>
    </div>
    {
      isLogged?.user?.email_verified && <div
        role="button"
        className='logoutBox'
        onClick={logout}
      >
        Logout
      </div>
    } {/* <div
      className="googleSign"
      onClick={() => googleLogin()}
      >
      <img src={googleSvg} alt="" />
      </div> */}
  </>
}

export default Google