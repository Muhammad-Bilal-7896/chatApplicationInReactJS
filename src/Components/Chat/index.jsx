import React, { useEffect, useState } from "react";

import Sidebar from "react-sidebar";

// import Button from '@material-ui/core/Button';

import "./style.scss";

const mql = window.matchMedia(`(min-width: 800px)`);

const Chat = () => {

  const [isOpen, setIsOpen] = useState(true);

  const [sidebarDocked, setSidebarDocked] = useState(mql.matches);

  const toggleCollapse = (val) => {
    setIsOpen(val);
  }

  const mediaQueryChanged = () => {
    setSidebarDocked(mql.matches);
  }

  mql.addListener(mediaQueryChanged);

  useEffect(() => {
    console.log("This is the useEffect")
  })

  return (
    <>
      <Sidebar
        sidebar={
          <div>
            {/* Tab navs */}
            <div className="nav flex-column nav-tabs text-center tab-docs-left" id="v-tabs-tab" role="tablist" aria-orientation="vertical">
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
            </div>
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


        {/* Modal Content Will be here */}
        <div
          class="modal fade"
          id="AddContactModal"
          tabindex="1"
          aria-labelledby="AddContactModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                    <input type="text" class="form-control" id="recipient-name" />
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">Message:</label>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary">Send message</button>
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