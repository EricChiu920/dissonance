import React from 'react';
import SideNavServerIcon from './SideNavServerIcon';
import SideNavMainContent from './SideNavMainContent';

class SideNav extends React.Component {
  createServerModal() {
    const { openModal } = this.props;

    return openModal('createServer');
  }

  render() {
    const { serverNames } = this.props;

    const serverIconList = serverNames.map(server => (
      <SideNavServerIcon key={server.id} server={server.name} />
    ));

    return (
      <div className="server-side-nav">
        <ul className="server-icon-container">
          {serverIconList}
          <button onClick={this.createServerModal} className="add-server-button" type="button">+</button>
        </ul>
        <ul className="server-side-main-container">
          <SideNavMainContent />
        </ul>
      </div>
    );
  }
};

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
