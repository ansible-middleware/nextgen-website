import React from 'react';
import "@patternfly/react-core/dist/styles/base.css";
import "@patternfly/patternfly/patternfly.css"

import {
  Button,
  Card,
  CardBody,
  Flex,
  FlexItem,
  Grid,
  Page,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  PageSidebar,
  PageSection,
  PageSectionVariants,
  PageToggleButton,
  Pagination,
  Title,
  TitleSizes,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Stack,
  StackItem,
  Tabs,
  Tab,
  TabContent,
  TabTitleText,
  Tooltip,
  CardTitle,
  CardFooter,
  Gallery,
  Split,
  GalleryItem,
  GridItem,
  SplitItem,
  Bullseye,
  EmptyStatePrimary,
  Level,
  LevelItem,
} from '@patternfly/react-core'

import Overview from './Overview';
import Homepage from './Homepage';

import {
  TimesIcon
} from '@patternfly/react-icons';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon'; 
import AnisbleIcon from '@patternfly/react-icons/dist/esm/icons/ansible-tower-icon'; 
import logo from './logo.svg';
//import redHatRuntimeLogo from './images/red-hat-runtime-logo.svg';
import './App.css';

class SeparateTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 0,
      homeHidden: false
    };

    this.contentRef1 = React.createRef();
    this.contentRef2 = React.createRef();
    this.contentRef3 = React.createRef();
    this.contentRef4 = React.createRef();
    this.contentRef5 = React.createRef();

    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex,
        homeHidden: false
      });
    };

    // hide the homepage content when we switch to the Overview tab with the 'Learn More' button
    this.handleLearnMoreClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex,
        homeHidden: true
      });
    };
  }

  render() {
    return (
      <React.Fragment>
        <Split hasGutter className="Split">       
          <SplitItem isFilled hasGutter> 
            <Tabs
              activeKey={this.state.activeTabKey} 
              onSelect={this.handleTabClick}
              aria-label="Tabs in the seperate content example"
              role="region"

            >
              <Tab
                eventKey={0}
                title={<TabTitleText className="Tab-text">Home</TabTitleText>}
                tabContentId="refTab1Section"
                tabContentRef={this.contentRef1}    
              >
              </Tab>
              <Tab
                eventKey={1}
                title={<TabTitleText className="Tab-text">Overview</TabTitleText>}
                tabContentId="refTab2Section"
                tabContentRef={this.contentRef2}
              />
              <Tab
                eventKey={2}
                title={<TabTitleText className="Tab-text">Collections</TabTitleText>}
                tabContentId="refTab3Section"
                tabContentRef={this.contentRef3}
              />
              <Tab
                eventKey={3}
                title={<TabTitleText className="Tab-text">Examples</TabTitleText>}
                tabContentId="refTab4Section"
                tabContentRef={this.contentRef4}
              />
              <Tab
                eventKey={4}
                title={<TabTitleText className="Tab-text">Documentation</TabTitleText>}
                tabContentId="refTab5Section"
                tabContentRef={this.contentRef5}
              />
            </Tabs>
          </SplitItem>
          <SplitItem>
            <Button className="Button-color" variant="link" icon={<GithubIcon size="lg" className="Icon-color"/>} component="a" href="https://github.com/ansible-middleware/" target="_blank" hasGutter></Button>
            &nbsp;
            &nbsp;
            <Button className="Button-color" variant="link" icon={<AnisbleIcon size="lg" className="Icon-color"/>} component="a" href="https://galaxy.ansible.com/" target="_blank"hasGutter></Button>
          </SplitItem>
        </Split>
        <div>
          <TabContent
            /* Home */
            eventKey={0}
            id="refTab1Section"
            ref={this.contentRef1}
            aria-label="This is content for the first separate content tab"
            className="Tabs"
          >
            {!this.state.homeHidden && <Flex className='homepage' direction={{ default: 'column' }}>
              <FlexItem align={{ default: 'alignCenter' }}>
                <Homepage />
              </FlexItem>
              <FlexItem align={{ default: 'alignRight' }}>
                <Tabs
                  /* Switch to the overview tab when we click the 'Learn More' button */
                  activeKey={this.state.activeTabKey} 
                  onSelect={this.handleLearnMoreClick}
                  aria-label="Tabs in the seperate content example"
                  role="region"
                  hasBorderBottom={false}
                  hasSecondaryBorderBottom={false}
                >
                  <Tab
                    //className='learn-more-tab'
                    eventKey={1}
                    title={<Button>Learn more</Button>}
                    tabContentId="refTab2Section"
                    tabContentRef={this.contentRef2}
                    
                  />
                  
                </Tabs>
              </FlexItem>
            </Flex>}
          </TabContent>
          <TabContent
            /* Overview */
            eventKey={1}
            id="refTab2Section"
            ref={this.contentRef2}
            aria-label="This is content for the second separate content tab"
            hidden
          >
            <div className='Overview-top-spacing'></div>
            <Overview />
          </TabContent>
          <TabContent
            /* Collections */
            eventKey={2}
            id="refTab3Section"
            ref={this.contentRef3}
            aria-label="This is content for the third separate content tab"
            hidden
          >
            <Gallery hasGutter>
              <Card isRounded>
                <CardTitle> Tab 1 Card </CardTitle>
                <CardBody> Tab 1 Card Body</CardBody>
                <CardFooter>Tab 1 Card footer &nbsp;
                  <AnisbleIcon/>
                </CardFooter>
              </Card>

              <Card isRounded>
                <CardTitle> Tab 1 Card </CardTitle>
                <CardBody> Tab 1 Card Body</CardBody>
                <CardFooter>Tab 1 Card footer</CardFooter>
              </Card>

              <Card isRounded>
                <CardTitle> Tab 1 Card </CardTitle>
                <CardBody> Tab 1 Card Body</CardBody>
                <CardFooter>Tab 1 Card footer</CardFooter>
              </Card>

              <Card isRounded>
                <CardTitle> Tab 1 Card </CardTitle>
                <CardBody> Tab 1 Card Body</CardBody>
                <CardFooter>Tab 1 Card footer</CardFooter>
              </Card>

              <Card isRounded>
                <CardTitle> Tab 1 Card </CardTitle>
                <CardBody> Tab 1 Card Body</CardBody>
                <CardFooter>Tab 1 Card footer</CardFooter>
              </Card>

              <Card isRounded>
                <CardTitle> Tab 1 Card </CardTitle>
                <CardBody> Tab 1 Card Body</CardBody>
                <CardFooter>Tab 1 Card footer</CardFooter>
              </Card>

              <Card isRounded>
                <CardTitle> Tab 1 Card </CardTitle>
                <CardBody> Tab 1 Card Body</CardBody>
                <CardFooter>Tab 1 Card footer</CardFooter>
              </Card>

              <Card isRounded>
                <CardTitle> Tab 1 Card </CardTitle>
                <CardBody> Tab 1 Card Body</CardBody>
                <CardFooter><Level>
                  <LevelItem><AnisbleIcon/><br></br>Hello</LevelItem>
                  <LevelItem><AnisbleIcon/><br></br>Hello</LevelItem>
                  <LevelItem><AnisbleIcon/><br></br>Hello</LevelItem>
                  <LevelItem><AnisbleIcon/><br></br>Hello</LevelItem>
                  </Level></CardFooter>
              </Card>

            </Gallery>
          </TabContent>
          <TabContent
            /* Examples */
            eventKey={3}
            id="refTab4Section"
            ref={this.contentRef4}
            aria-label="This is content for the third separate content tab"
            hidden
          >
            Tab 4 Section
          </TabContent>
          <TabContent
            /* Documentation */
            eventKey={4}
            id="refTab5Section"
            ref={this.contentRef5}
            aria-label="This is content for the third separate content tab"
            hidden
          >
            Tab 5 section
          </TabContent>
        </div>
      </React.Fragment>
    );
  }
}

function App() {
  return (
    <span>
      <SeparateTabs />
      <footer className="footer">&#169; 2022 - Ansible for Middleware</footer>
    </span>
  );
}

export default App;

//