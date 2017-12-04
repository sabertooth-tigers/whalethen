import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from './Search';
import Timeline from './Timeline';
import TimelineLookUp from './TimelineLookUp';
import StartDateBox from './StartDateBox';
import EndDateBox from './EndDateBox';
import CreateEventBox from './CreateEventBox';
import TimelineName from './TimelineName';
import * as actionCreators from './actions/actionCreator';
import { Switch, Route } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import NotificationEventAvailable from 'material-ui/svg-icons/notification/event-available';


class Header extends React.Component {
  render() {
    const {
      timelineName,
      timelineId,
      saveTimeline,
      getTrip,
    } = this.props;
    return (
      <div>
        <div className="title">WhaleThen</div>
        <br />
        <div className="container timelineParams">
          <div className="label">{timelineName}</div>
          <div className="label">{timelineId}</div>
          <MuiThemeProvider>
            <CopyToClipboard
              onCopy={this.onCopy}
              text={`http://localhost:3002/#/${timelineId}`}
            >
              {/*
              window.location.href is another option to copy the
              full url. However if someone who was
              sent the url, IE a third person, attempts to copy
              using window.loc... it'll append a second time
              */}
              <RaisedButton
                label="COPY URL"
                backgroundColor="#009688"
                labelColor="#FFF"
                icon={<NotificationEventAvailable />}
                onClick={this.onClick}
              />
            </CopyToClipboard>
          </MuiThemeProvider>
          <TimelineName {...this.props} />
          <StartDateBox {...this.props} />
          <EndDateBox {...this.props} />
        </div>
        <CreateEventBox {...this.props} />
        <TimelineLookUp {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = ({ appState }) => ({ ...appState });

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
