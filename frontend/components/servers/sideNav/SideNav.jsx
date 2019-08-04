import React from 'react';
import SideNavServerIcon from './SideNavServerIcon';
import SideNavMainContent from './SideNavMainContent';

class SideNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleServer: 0,
    };

    this.createServerModal = this.createServerModal.bind(this);
    this.changeServer = this.changeServer.bind(this);
  }

  createServerModal() {
    const { openModal } = this.props;

    return openModal('createServer');
  }

  changeServer(i) {
    return () => {
      this.setState({
        visibleServer: i,
      });
    };
  }

  render() {
    const { serverNames } = this.props;
    const { visibleServer } = this.state;

    const serverIconList = serverNames.map((server, i) => (
      <SideNavServerIcon
        changeServer={this.changeServer(i)}
        key={server.id}
        server={server.name}
      />
    ));

    return (
      <div className="server-side-nav">
        <ul className="server-icon-container">
          {serverIconList}
          <button onClick={this.createServerModal} className="add-server-button" type="button">+</button>
        </ul>
        <ul className="server-side-main-container">
          <SideNavMainContent server={serverNames[visibleServer]} />
        </ul>
      </div>
    );
  }
}

export default SideNav;

// const SideNav = ({ serverNames, openModal }) => {
//   const serverIconList = serverNames.map(server => (
//     <SideNavServerIcon key={server.id} server={server.name} />
//   ));

//   const createServerModal = () => {
//     return openModal('createServer');
//   };

//   return (
//     <div className="server-side-nav">
//       <ul className="server-icon-container">
//         {serverIconList}
//         <button onClick={createServerModal} className="add-server-button" type="button">+</button>
//       </ul>
//       <ul className="server-side-main-container">
//         <SideNavMainContent />
//       </ul>
//     </div>
//   );
// };
