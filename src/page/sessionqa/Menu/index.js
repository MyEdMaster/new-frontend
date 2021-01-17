import React from 'react';
import classes from './index.module.css'
import {withRouter} from 'react-router-dom';

class SessionMenuReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
          <div>

              <div className={classes.float}>
                  <div
                      className={this.props.location.pathname.indexOf(`/sessionqa/${this.props.match.params.id}`) > -1? classes.selectmenubar: classes.menubar}
                      onClick={() => {this.props.history.push(`/sessionqa/${this.props.match.params.id}`);}}
                  >
                      Content
                  </div>
                  <div
                      className={this.props.location.pathname.indexOf(`/worksheet/${this.props.match.params.id}`) > -1? classes.selectmenubar: classes.menubar}
                      onClick={() => {this.props.history.push(`/worksheet/${this.props.match.params.id}`);}}
                  >
                      Worksheet
                  </div>
              </div>
          </div>

        );
    }
}
export const SessionMenu = withRouter(SessionMenuReact);
