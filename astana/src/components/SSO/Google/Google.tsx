import { GoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
import React, { useState } from 'react'

const Google = () => {

  const [isLogged, isLoggedSet] = useState<any>();

  // const googleLogin = useGoogleLogin({
  //   onSuccess: (codeResponse) => {
  //     axios.get(
  //       `https://www.googleapis.com/oauth2/v1/userinfo? 
  //                  access_token=${codeResponse.access_token}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer 
  //                      ${codeResponse.access_token}`,
  //           Accept: "application/json",
  //         },
  //       }).then((res) => {
  //         //  googleID, gmail, name, etc...
  //         console.log(res.data);
  //       }).catch((err) => console.log(err));
  //   },
  //   onError: (error) => console.log("Login Failed:", error),
  // });
  function handleLoginSuccess(credentialResponse) {
    const idToken = credentialResponse.credential;
    axios.post('http://localhost:5000/auth/google', { token: idToken })
      .then(response => (console.log('Backend response:', response.data), isLoggedSet(response.data)))
      .catch(error => console.error('Login error:', error));
  }

  function logout() {
    googleLogout();
    isLoggedSet(null)
    console.log("User logged out", isLogged);
    // Clear any user data from your app’s state if needed
  }

  return <>
    {/* <GoogleLogin
      shape="square"
      type="icon"
      size="medium"
      onSuccess={credentialResponse => console.log(credentialResponse)}
      onError={() => console.log('Login Failed')}
      /> */}
    <div className={isLogged?.user?.email_verified ? 'googleContLogged googleContLoggedCover' : 'googleCont'}>

      <div className='googleSign'>
        {
          isLogged?.user?.email_verified ?

            <div
              className='googleTextLogged'
            >
              {isLogged?.user?.name}
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
            shape="square"
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