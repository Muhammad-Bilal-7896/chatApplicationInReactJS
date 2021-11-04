import "./style.scss";

const Chat = () => {
  return (
    <>
      <div className="row">
        <div className="col-3">
          {/* Tab navs */}
          <div className="nav flex-column nav-tabs text-center" id="v-tabs-tab" role="tablist" aria-orientation="vertical">
            <a className="nav-link active" id="v-tabs-home-tab" data-mdb-toggle="tab" href="#v-tabs-home" role="tab" aria-controls="v-tabs-home" aria-selected="true">Home</a>
            <a className="nav-link" id="v-tabs-profile-tab" data-mdb-toggle="tab" href="#v-tabs-profile" role="tab" aria-controls="v-tabs-profile" aria-selected="false">Profile</a>
            <a className="nav-link" id="v-tabs-messages-tab" data-mdb-toggle="tab" href="#v-tabs-messages" role="tab" aria-controls="v-tabs-messages" aria-selected="false">Messages</a>
          </div>
          {/* Tab navs */}
        </div>
        <div className="col-9">
          {/* Tab content */}
          <div className="tab-content" id="v-tabs-tabContent">
            <div className="tab-pane fade show active" id="v-tabs-home" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              Home content
            </div>
            <div className="tab-pane fade" id="v-tabs-profile" role="tabpanel" aria-labelledby="v-tabs-profile-tab">
              Profile content
            </div>
            <div className="tab-pane fade" id="v-tabs-messages" role="tabpanel" aria-labelledby="v-tabs-messages-tab">
              Messages content
            </div>
          </div>
          {/* Tab content */}
        </div>
      </div>
    </>
  )
}
export default Chat;