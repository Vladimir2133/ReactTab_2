//Components
import React, {Component} from "react";
//constants
import {tabNames, tabs} from "constants/tabs";
import {FirstTab} from "components/tabs/FirstTab";
import {SecondTab} from "components/tabs/SecondTab";
import {ThirdTab} from "components/tabs/ThirdTab";

//style
import {Tabs, ButtonStyle, TabContent} from "style/components/style";


class App extends React.Component{
  state = {
    activTab: tabNames.FIRST
  };

  handleClick = tabIndex => () => {
        this.setState({
          activeTab: tabIndex
        });
    }

    render() {
    const simpleText = "Hello!!!";
    return (
      <div>
        <Tabs>
          {tabs.map(({ title, tabIndex }, ind) => (
            <ButtonStyle key={ind} onClick={this.handleClick(tabIndex)}>
              {title}
            </ButtonStyle>
          ))}
        </Tabs>
        <TabContent>
          {this.state.activeTab === tabNames.FIRST && (
            <FirstTab text={simpleText} />
          )}
          {this.state.activeTab === tabNames.SECOND && <SecondTab />}
          {this.state.activeTab === tabNames.THIRD && <ThirdTab />}
        </TabContent>
      </div>
    );
  }
}
export default App;
