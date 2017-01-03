const React = require('react');
const ReactDOM = require('react-dom');
require('./style.scss');

class Message extends React.Component {

    render() {
        return(
          <div>

          </div>
        );
    }

}

ReactDOM.render(<Message />,
    document.getElementById('react-container'));