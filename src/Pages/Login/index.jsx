import React, { useState, useEffect } from 'react'

import Navbar from "../../Components/NavBar";

import { useLocation, useHistory } from 'react-router-dom';

import firebase from '../../firebase/index';
import firebaseAuth from 'firebase/auth';
// import history from "../../history";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import "firebase/firestore"
import "./style.scss";

// class Login extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             show: false,
//             isSignedIn: false,
//         }
//     }

//     uiConfig = {
//         signInFlow: "popup",
//         signInOptions: [
//             firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         ],
//         callbacks: {
//             signInSuccessWithAuthResult: () => false
//         }
//     }

//     componentDidMount = () => {

//         // firebase.firestore().collection('things')
//         //   .get()
//         //   .then(snapshot => {
//         //     let data = [];
//         //     snapshot.forEach(element => {
//         //       data.push(Object.assign({
//         //         id: element.id
//         //       }, element.data()))
//         //     })
//         //     console.log("data=> ", data)
//         //   }).catch(err => {
//         //     console.log(err)
//         //   })


//         firebase.auth().onAuthStateChanged(user => {
//             // this.setState({ isSignedIn: !!user })
//             // console.log("user", user)

//             console.log("User Type is equal to : ", typeof user);

//             // var positiono = {};
//             // if ('geolocation' in navigator) {
//             //   // console.log("Geolocation is Available");
//             //   navigator.geolocation.getCurrentPosition((position) => {
//             //     positiono = position
//             //     //  console.log("Latitude==>",position.coords.latitude);
//             //     //  console.log("Longitude==>",position.coords.longitude);
//             //   })
//             // }
//             // else {
//             //   alert("Geolocation is not supported by this browser.");
//             // }

//             this.setState({
//                 isSignedIn: !!user,
//                 user_data: user
//             })
//             // console.log("user", user)

//             if (this.state.isSignedIn == true) {
//             }
//             else {
//                 console.log("Not signed in")
//             }
//         })

//         //console.log("User_Data==> ", user.providerData[0])
//         //   console.log("Simple User===>",this.state.user_data);
//     }

//     componentDidUpdate = () => {
//         console.log(this.state.isSignedIn)
//     }

//     // googleSignin = () => {
//     //   const auth = firebase.auth();

//     //   auth.signInWithPopup(provider)
//     //     .then((result) => {
//     //       var credential = result.credential;

//     //       // This gives you a Google Access Token. You can use it to access the Google API.
//     //       var token = credential.accessToken;
//     //       // The signed-in user info.
//     //       var user = result.user;
//     //       alert(user)
//     //       // ...
//     //     }).catch((error) => {
//     //       // Handle Errors here.
//     //       var errorCode = error.code;
//     //       var errorMessage = error.message;
//     //       // The email of the user's account used.
//     //       var email = error.email;
//     //       // The firebase.auth.AuthCredential type that was used.
//     //       var credential = error.credential;
//     //       // ...
//     //     });

//     //   // auth.onAuthStateChanged(user => {
//     //   //   if (user) {
//     //   //     alert("Signed in successfully==> ", user.displayName);

//     //   //   } else {
//     //   //     console.log('Not signed in');
//     //   //   }
//     //   // });
//     // }
//     render() {
//         if (this.state.isSignedIn == true) {
//             const pathname = window.location.pathname;
//             console.log("Path name is equal to : ", pathname)
//             if (pathname === '/login') {
//                 if (this.state.user_data.email != "") {
//                     //Sending the data
//                     const db = firebase.firestore();
//                     let email = this.state.user_data.email;
//                     let name = this.state.user_data.displayName;
//                     let photoUrl = this.state.user_data.photoURL;

//                     const userData = {
//                         Name: name,
//                         Email: email,
//                         Photo: photoUrl
//                     }



//                     let thingsRef = db.collection(`Users/Bio/${email}`);
//                     console.log("The user data is equal to : ", userData)

//                     thingsRef.add(userData).then(() => {
//                         // console.log("Data Sent Successfully");
//                         alert("Data Sent Successfully.")
//                     })
//                     //alert("Move to main")
//                     //Sending the data
//                     // Router.push('/main')'
//                     //Pushing to the main page
//                     this.props.history.push('/');

//                 }
//             }
//         }
//         return (
//             <div>
//                 <Navbar type="general" />
//                 <main id="homeMainBody">
//                     <h1 className="bg-light text-center headingstaff text-primary bg-light mt-3">REACT ACCOUNTING</h1>
//                     <section className="login-block">
//                         <div className="container-fluid">
//                             <div className="row">
//                                 <div className="col-sm-12">
//                                     <form className="md-float-material form-material" action="#" method="POST">
//                                         <div className="auth-box card">
//                                             <div className="card-block">
//                                                 <div className="or-container">
//                                                     <div className="line-separator" />
//                                                     {/* <div className="or-label">or</div> */}
//                                                     <h5>Login</h5>
//                                                     <div className="line-separator" />
//                                                 </div>
//                                                 <div className="row">
//                                                     <div className="col-md-12">
//                                                         {(this.state.isSignedIn) ? (
//                                                             <>
//                                                                 <div className="text-center">
//                                                                     <div id="loader"></div>
//                                                                 </div>
//                                                                 <br />
//                                                                 <div className="animate-bottom text-center">
//                                                                     <h2>You are already signed In</h2>
//                                                                     <p>Please wait you will be re directed to the projects soon......</p>
//                                                                 </div>
//                                                             </>
//                                                         ) : (
//                                                             <StyledFirebaseAuth
//                                                                 uiConfig={this.uiConfig}
//                                                                 firebaseAuth={firebase.auth()}
//                                                             />
//                                                         )}
//                                                     </div>
//                                                 </div>
//                                                 <p className="text-inverse text-center">Dont have an account? <i className="text-primary">Click on above sign in button to create account.</i> </p>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </main>
//             </div>
//         )
//     }
// }
// export default Login;

//Preferring phone authentication over the Google Sign In

const Login = () => {

    const [signedInUserData, setSignedInUserData] = useState({});

    const [isSignedIn, setIsSignedIn] = useState(false);

    //States for phone authentication
    const [phone_number, setPhone_number] = useState(0);
    const [otp_code, set_otp_code] = useState(0);
    //States for phone authentication

    //The status of whether the user is signed in or not
    const [status, setStatus] = useState(false);

    const history = useHistory();

    const setUpRecaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container",
            {
                size: "invisible",
                callback: function (response) {
                    console.log("Captcha Resolved");
                    onSignInSubmit();
                },
                defaultCountry: "PK",
            }
        );
    };

    const onSignInSubmit = (e) => {
        e.preventDefault();
        setUpRecaptcha();
        let phoneNumber = "+92" + phone_number;
        console.log(phoneNumber);
        let appVerifier = window.recaptchaVerifier;
        firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // console.log(confirmationResult);
                alert("OTP is sent.Enter it now.");
            })
            .catch(function (error) {
                alert(error)
                console.log(error);
            });
    };

    const onSubmitOtp = (e) => {
        e.preventDefault();
        let otpInput = otp_code;
        let optConfirm = window.confirmationResult;
        // console.log(codee);
        optConfirm
            .confirm(otpInput)
            .then((result) => {
                // User signed in successfully.
                // console.log("Result" + result.verificationID);
                let mobilePhone = phone_number;
                //Yahan par mobile number verify hoga
                history.push("/")
                alert("Phone Number Verified Successfully");
                // let data=this.props

                let user = result.user;
            })
            .catch(function (error) {
                console.log(error);
                alert("INVALID OTP.PLEASE TRY AGAIN");
            });
    };

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setStatus(true);
                console.log("The signed in User data is equal to :---- ", signedInUserData);
                setSignedInUserData(user);
                //history.push("/")
                // console.log("...........",user.uid)
                // loadData();
            }
            else {
                setStatus(false);
                setSignedInUserData(null);
            }
        })
    })

    const sign_out = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            alert("Signed Out Successfully");
            setStatus(false)
        }).catch((error) => {
            // An error happened.
            console.log(error)
            alert(error);
        });
    }

    return (
        <div>
            <div>
                <Navbar type="general" />
                <main id="homeMainBody">
                    <h1 className="bg-light text-center headingstaff text-primary bg-light mt-3">REACT ACCOUNTING</h1>
                    <section className="login-block">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <form className="md-float-material form-material" action="#" method="POST">
                                        <div className="auth-box card">
                                            <div className="card-block">
                                                <div className="or-container">
                                                    <div className="line-separator" />
                                                    <h5>Login</h5>
                                                    <div className="line-separator" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        {(isSignedIn) ? (
                                                            <>
                                                                <div className="text-center">
                                                                    <div id="loader"></div>
                                                                </div>
                                                                <br />
                                                                <div className="animate-bottom text-center">
                                                                    <h2>You are already signed In</h2>
                                                                    <p>Please wait you will be re directed to the projects soon......</p>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            // <StyledFirebaseAuth
                                                            //     uiConfig={this.uiConfig}
                                                            //     firebaseAuth={firebase.auth()}
                                                            // />
                                                            <form>
                                                                <div className="mb-3">
                                                                    <label for="recipient-name" className="col-form-label">Enter the Mobile Phone Number of the Person:</label>
                                                                    <input placeholder="like 3081511889" value={phone_number} onChange={(e) => setPhone_number(e.target.value)} type="number" className="form-control" id="input_text_code" />
                                                                    <h6 className="text-danger mt-2">Note: Currently this service is only for +92 i.e for pakistan</h6>
                                                                    <div id="recaptcha-container"></div>
                                                                    <button type="button" className="btn btn-primary" title="Send Code" onClick={onSignInSubmit}>Send Code</button>
                                                                </div>

                                                                <div className="mb-3">
                                                                    <label for="message-text" className="col-form-label">Enter OTP</label>
                                                                    <input placeholder="i.e 45644" type="number" value={otp_code} onChange={(e) => set_otp_code(e.target.value)} className="form-control ml-4" id="input_text_code" />
                                                                </div>

                                                                <button type="button" className="btn btn-success" onClick={onSubmitOtp} data-mdb-dismiss="modal">Verify</button>

                                                            </form>
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="text-inverse text-center">Dont have an account? <i className="text-primary">Click on above sign in button to create account.</i> </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <button onClick={sign_out}>s</button> */}
                </main>
            </div>
        </div>
    )
}
export default Login;