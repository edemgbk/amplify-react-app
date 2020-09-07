import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import TabDevices from './tabs_nav/TabDevices';
import TabPrices from './tabs_nav/TabPrices';
// Tabs Content
import TabContentOne from './TabContentOne';
import TabContentTwo from './TabContentTwo';
import TabContentThree from './TabContentThree';

import '../css/TabsNav.css';

class TabComponent extends Component {
  state = {
    tabIndex: 0
  };
  render() {
    return (
      <div>
        <Tabs
          className="tabs"
          selectedIndex={this.state.tabIndex}
          onSelect={tabIndex => this.setState({ tabIndex })}
        >
     
          {/* Tabs Content */}
          {/* <TabPanel>
            <TabContentOne /> */}
          {/* </TabPanel> */}
          <TabPanel>
            {/* <TabContentTwo /> */}
          </TabPanel>
          <TabPanel>
            {/* <TabContentThree /> */}
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;
