import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import firebase from "../../firebase/index";
import "firebase/firestore";
import 'firebase/auth';

// import send_message_icon from "../../resources/send_button.png";

import Sidebar from "react-sidebar";

import history from "../../history";

// import Button from '@material-ui/core/Button';

import "./style.scss";

const mql = window.matchMedia(`(min-width: 800px)`);

const Chat = () => {

  const [firestoreData, setFirestoreData] = useState([]);
  const [signedInUserData, setSignedInUserData] = useState({});
  const [status, setStatus] = useState(false);

  const contacts = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];

  const [isOpen, setIsOpen] = useState(true);

  const [sidebarDocked, setSidebarDocked] = useState(mql.matches);

  const [phone_number, set_phone_number] = useState(0);

  // const [otp_code, set_otp_code] = useState(0);

  const toggleCollapse = (val) => {
    setIsOpen(val);
  }

  const mediaQueryChanged = () => {
    setSidebarDocked(mql.matches);
  }

  // const setUpRecaptcha = () => {
  //   window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
  //     "recaptcha-container",
  //     {
  //       size: "invisible",
  //       callback: function (response) {
  //         console.log("Captcha Resolved");
  //         onSignInSubmit();
  //       },
  //       defaultCountry: "PK",
  //     }
  //   );
  // };

  // const onSignInSubmit = (e) => {
  //   e.preventDefault();
  //   setUpRecaptcha();
  //   let phoneNumber = "+92" + phone_number;
  //   console.log(phoneNumber);
  //   let appVerifier = window.recaptchaVerifier;
  //   firebase
  //     .auth()
  //     .signInWithPhoneNumber(phoneNumber, appVerifier)
  //     .then(function (confirmationResult) {
  //       // SMS sent. Prompt user to type the code from the message, then sign the
  //       // user in with confirmationResult.confirm(code).
  //       window.confirmationResult = confirmationResult;
  //       // console.log(confirmationResult);
  //       alert("OTP is sent.Enter it now.");
  //     })
  //     .catch(function (error) {
  //       alert(error)
  //       console.log(error);
  //     });
  // };

  // const onSubmitOtp = (e) => {
  //   e.preventDefault();
  //   let otpInput = otp_code;
  //   let optConfirm = window.confirmationResult;
  //   // console.log(codee);
  //   optConfirm
  //     .confirm(otpInput)
  //     .then((result) => {
  //       // User signed in successfully.
  //       // console.log("Result" + result.verificationID);
  //       let mobilePhone = phone_number;
  //       //Yahan par mobile number verify hoga
  //       alert("Phone Number Verified Successfully");
  //       // let data=this.props

  //       let user = result.user;
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       alert("INVALID OTP.PLEASE TRY AGAIN");
  //     });
  // };

  mql.addListener(mediaQueryChanged);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setStatus(true);
        setSignedInUserData(user);
        console.log("The signed in user data is as follows==>", user)
        // loadData();
      }
      else {
        setStatus(false)
        setSignedInUserData(null);
        history.push('/login')
      }
    })

    //console.log("All the user data of current signed user: ", props.user_data)

    //Take data from database only when user is signed in because without that phone number is not provided
    if (status) {
      ///////////////////////////////////This code is for RETRIVING DATABASE data//////////////////////////
      const db = firebase.firestore();

      db.collection(`Data/ContactList/${signedInUserData.phoneNumber}`)
        .get()
        .then(snapshot => {
          let data = [];
          snapshot.forEach(element => {
            data.push(Object.assign({
              id: element.id,
              uid: element.uid,
              addedPhone: element.addedPhone,
              userPhone: element.userPhone,
              dateTimeAdded: element.dateTimeAdded
            }, element.data()))
          })
          console.log("The Contact List is equal to => ", data)
          if (firestoreData.length != data.length) {
            setFirestoreData(data);
            console.log("Updated")
          }
        }).catch(err => {
          console.log(err)
        })
      ///////////////////////////////////This code is for RETRIVING DATABASE data//////////////////////////
    }
    else {
      console.log("User should be signed in first to get the database data.");
    }

  })

  const onSubmitPhoneNumber = () => {
    if (status) {
      //Getting the email from the signed in data
      //let email = signedInUserData.email;
      const db = firebase.firestore();
      //For getting the exact time
      const { serverTimestamp } = firebase.firestore.FieldValue;

      // let cleanedEmail;
      // let email = signedInUserData.email;
      // cleanedEmail = email.split("@").join("");
      // cleanedEmail = email.split(".").join("");
      // cleanedEmail = email.split("`").join("");
      // cleanedEmail = email.split("!").join("");
      // cleanedEmail = email.split(".").join("");
      // cleanedEmail = email.split("#").join("");
      // cleanedEmail = email.split("%").join("");
      // cleanedEmail = email.split("^").join("");
      // cleanedEmail = email.split("&").join("");
      // cleanedEmail = email.split("*").join("");
      // cleanedEmail = email.split("(").join("");
      // cleanedEmail = email.split(")").join("");
      // cleanedEmail = email.split('"').join("");
      // cleanedEmail = email.split("'").join("");
      // cleanedEmail = email.split("_").join("");
      // cleanedEmail = email.split("-").join("");
      // cleanedEmail = email.split("+").join("");
      // cleanedEmail = email.split("=").join("");
      // cleanedEmail = email.split("}").join("");
      // cleanedEmail = email.split("{").join("");
      // cleanedEmail = email.split("]").join("");
      // cleanedEmail = email.split("[").join("");
      // cleanedEmail = email.split("|").join("");
      // cleanedEmail = email.split("/").join("");
      // cleanedEmail = email.split("?").join("");
      // cleanedEmail = email.split(";").join("");
      // cleanedEmail = email.split(",").join("");

      const today = new Date();
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + ' ' + time;

      let thingsRef = db.collection(`Data/ContactList/${signedInUserData.phoneNumber}`);

      thingsRef.add({
        uid: signedInUserData.uid,
        userPhone: signedInUserData.phoneNumber,
        addedPhone: phone_number,
        dateTimeAdded: dateTime
        // userName: signedInUserData.displayName,
        // ProjectMembers: teamMatesArray,
        // ProjectStages: allStageArray,
        // ProjectTasks: allTaskArray,
        // ProjectStartingDate: projectStartingDate.toLocaleDateString(),
        // ProjectEndingDate: projectEndingDate.toLocaleDateString(),
        // CurrentStage: currentStage,
        // CurrentStageCurrentTask: currentStageCurrentTask,
        // createAt: JSON.stringify(serverTimestamp),
        // UniqueID: id
      }).then(() => {
        alert("Contact Added Successfully.");
        // const { pathname } = window.location.url
        // if (pathname == '/new') {
        //     alert("Your Project is initialized Successfully.Redirecting you to your projects page.")
        //     Router.push('/staff');
        // }
      })

      //Now sending the data for notifications

      //Now sending the data for notifications
      //
      // alert(true)
    }
    else {
      alert("Please.Get yourself signed In first.");
    }
  }

  return (
    <>
      <Sidebar
        sidebar={
          <div>
            {/* Tab navs */}
            <div className="nav flex-column nav-tabs text-center tab-docs-left" id="v-tabs-tab" role="tablist" aria-orientation="vertical">
              {(firestoreData.length == 0) ? (
                <a className="nav-link docs-tabs" id="v-tabs-the1-tab" data-mdb-toggle="tab" href={`#v-tabs-the`} role="tab" aria-controls="v-tabs-the" aria-selected="false">No Contacts Added</a>
              ) : (
                firestoreData.map((e, i) => (
                  <a className="nav-link docs-tabs" id="v-tabs-the1-tab" data-mdb-toggle="tab" href={`#v-tabs-the${(i + 1)}`} role="tab" aria-controls="v-tabs-the1" aria-selected="true">+{e.addedPhone}</a>
                ))
              )}
            </div>
            {/* Tab navs */}

            {/* <div className="nav flex-column nav-tabs text-center tab-docs-left" id="v-tabs-tab" role="tablist" aria-orientation="vertical">

              <a className="nav-link docs-tabs active" id="v-tabs-the1-tab" data-mdb-toggle="tab" href="#v-tabs-the1" role="tab" aria-controls="v-tabs-the1" aria-selected="true">bilalmohib7896@gmail.com</a>
              <a className="nav-link docs-tabs" id="v-tabs-the2-tab" data-mdb-toggle="tab" href="#v-tabs-the2" role="tab" aria-controls="v-tabs-the2" aria-selected="false">mbilals9922@gmail.com</a>
              <a className="nav-link docs-tabs" id="v-tabs-the3-tab" data-mdb-toggle="tab" href="#v-tabs-the3" role="tab" aria-controls="v-tabs-the3" aria-selected="false">Messages</a>
              <a className="nav-link docs-tabs" id="v-tabs-about-tab" data-mdb-toggle="tab" href="#v-tabs-about" role="tab" aria-controls="v-tabs-about" aria-selected="false">About</a>
              <a className="nav-link docs-tabs" id="v-tabs-country-tab" data-mdb-toggle="tab" href="#v-tabs-country" role="tab" aria-controls="v-tabs-country" aria-selected="false">Country</a>
              <a className="nav-link docs-tabs" id="v-tabs-region-tab" data-mdb-toggle="tab" href="#v-tabs-region" role="tab" aria-controls="v-tabs-region" aria-selected="false">Region</a>
              <a className="nav-link docs-tabs" id="v-tabs-continent-tab" data-mdb-toggle="tab" href="#v-tabs-continent" role="tab" aria-controls="v-tabs-continent" aria-selected="false">Continent</a>
              <a className="nav-link docs-tabs" id="v-tabs-province-tab" data-mdb-toggle="tab" href="#v-tabs-province" role="tab" aria-controls="v-tabs-province" aria-selected="false">Province</a>
              <a className="nav-link docs-tabs" id="v-tabs-bioData-tab" data-mdb-toggle="tab" href="#v-tabs-bioData" role="tab" aria-controls="v-tabs-bioData" aria-selected="false">Bio-Data</a>
              <a className="nav-link docs-tabs" id="v-tabs-company-tab" data-mdb-toggle="tab" href="#v-tabs-company" role="tab" aria-controls="v-tabs-company" aria-selected="false">Company</a>
            </div> */}
            {/* Tab navs */}
          </div>
        }
        open={isOpen}
        docked={sidebarDocked}
        onSetOpen={toggleCollapse}
        styles={{ sidebar: { background: "white", marginTop: "100px" } }}
      >
        <div style={{ width: "100%", height: "100%", marginTop: "100px" }}>

          <div id="Docs-bars" onClick={() => setIsOpen(!isOpen)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          {/* Tab content */}
          <div className="tab-content" id="v-tabs-tabContent">
            <div className="tab-pane fade show active" id="v-tabs-the1" role="tabpanel" aria-labelledby="v-tabs-the1-tab">
              <div className="container">
                <div className="row">
                  <h1>Home</h1>
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                  <hr />
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="v-tabs-the2" role="tabpanel" aria-labelledby="v-tabs-the2-tab">
              <div className="container">
                <div className="row">
                  <h1>Profle</h1>
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                  <hr />
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="v-tabs-the3" role="tabpanel" aria-labelledby="v-tabs-the3-tab">
              <div className="container">
                <div className="row">
                  <h1>Messages</h1>
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                  <hr />
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="v-tabs-about" role="tabpanel" aria-labelledby="v-tabs-about-tab">
              <div className="container">
                <div className="row">
                  <h1>About</h1>
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                  <hr />
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="v-tabs-country" role="tabpanel" aria-labelledby="v-tabs-country-tab">
              <div className="container">
                <div className="row">
                  <h1>Country</h1>
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                  <hr />
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="v-tabs-region" role="tabpanel" aria-labelledby="v-tabs-region-tab">
              <div className="container">
                <div className="row">
                  <h1>Region</h1>
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                  <hr />
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="v-tabs-continent" role="tabpanel" aria-labelledby="v-tabs-continent-tab">
              <div className="container">
                <div className="row">
                  <h1>Continent</h1>
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                  <hr />
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="v-tabs-province" role="tabpanel" aria-labelledby="v-tabs-province-tab">
              <div className="container">
                <div className="row">
                  <h1>Province</h1>
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                  <hr />
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="v-tabs-bioData" role="tabpanel" aria-labelledby="v-tabs-bioData-tab">
              <div className="container">
                <div className="row">
                  <h1>Bio Data</h1>
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                  <hr />
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="v-tabs-company" role="tabpanel" aria-labelledby="v-tabs-company-tab">
              <div className="container">
                <div className="row">
                  <h1>Company</h1>
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                  <hr />
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 d-flex" id="message_text">
          <input placeholder="Send Message" type="text" className="form-control ml-2 mt-0" />

          <Button type="button" id="send_button" className="btn bg-dark btn-transparent">Send</Button>
        </div>



        {/* Modal Content Will be here */}
        <div
          className="modal fade"
          id="AddContactModal"
          tabindex="1"
          aria-labelledby="AddContactModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Contacts</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  {/* <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">Enter the Mobile Phone Number of the Person:</label>
                    <input placeholder="like 3081511889" value={phone_number} onChange={(e) => setPhone_number(e.target.value)} type="number" className="form-control" id="input_text_code" />
                    <h6 className="text-danger mt-2">Note: Currently this service is only for +92 i.e for pakistan</h6>
                    <div id="recaptcha-container"></div>
                    <button type="button" className="btn btn-primary" title="Send Code" onClick={onSignInSubmit}>Send Code</button>

                  </div> */}

                  <div className="mb-3">
                    <label for="message-text" className="col-form-label">Phone number</label>
                    <input placeholder="i.e 03081511889" type="number" value={phone_number} onChange={(e) => set_phone_number(e.target.value)} className="form-control" id="input_text_code" />
                    <span>Note: Only Add Valid Contacts Otherwise your messages will be sent to unkown or wrong contact which may even not exist</span>
                  </div>

                  <button type="button" className="btn btn-success" onClick={onSubmitPhoneNumber} data-mdb-dismiss="modal">Add Contact</button>

                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Content Will be here */}
      </Sidebar>
    </>
  )
}
export default Chat;