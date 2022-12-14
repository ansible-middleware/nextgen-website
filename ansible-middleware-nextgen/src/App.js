import React from 'react';
import "@patternfly/react-core/dist/styles/base.css";

import {
  Button,
  Card,
  CardBody,
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
} from '@patternfly/react-core'

import {
  TimesIcon
} from '@patternfly/react-icons';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import logo from './logo.svg';
import './App.css';


class SeparateTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 0
    };

    this.contentRef1 = React.createRef();
    this.contentRef2 = React.createRef();
    this.contentRef3 = React.createRef();
    this.contentRef4 = React.createRef();
    this.contentRef5 = React.createRef();

    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };
  }

  render() {
    return (
      <React.Fragment>
      <Masthead id="basic-example">
        <MastheadContent>
          <Tabs
            activeKey={this.state.activeTabKey}
            onSelect={this.handleTabClick}
            aria-label="Tabs in the seperate content example"
            role="region"
          >
            <Tab
              eventKey={0}
              title={<TabTitleText>Home</TabTitleText>}
              tabContentId="refTab1Section"
              tabContentRef={this.contentRef1}
            >
            </Tab>
            <Tab
              eventKey={1}
              title={<TabTitleText>Overview</TabTitleText>}
              tabContentId="refTab2Section"
              tabContentRef={this.contentRef2}
            />
            <Tab
              eventKey={2}
              title={<TabTitleText>Collections</TabTitleText>}
              tabContentId="refTab3Section"
              tabContentRef={this.contentRef3}
            />
            <Tab
              eventKey={3}
              title={<TabTitleText>Examples</TabTitleText>}
              tabContentId="refTab4Section"
              tabContentRef={this.contentRef4}
            />
            <Tab
              eventKey={4}
              title={<TabTitleText>Documenation</TabTitleText>}
              tabContentId="refTab5Section"
              tabContentRef={this.contentRef5}
            />
          </Tabs>
          <Toolbar id="toolbar" isFullHeight isStatic>
            <ToolbarContent>
              <ToolbarGroup
                variant="icon-button-group"
                alignment={{ default: 'alignRight' }}
                spacer={{ default: 'spacerNone', md: 'spacerMd' }}
              >
                <ToolbarItem>
                  <Button>I am a button</Button>
                </ToolbarItem>
              </ToolbarGroup>
            </ToolbarContent>
          </Toolbar>
        </MastheadContent>
      </Masthead>
        <div>
          <TabContent
            /* Home */
            eventKey={0}
            id="refTab1Section"
            ref={this.contentRef1}
            aria-label="This is content for the first separate content tab"
          >
          </TabContent>
          <TabContent
            /* Overview */
            eventKey={1}
            id="refTab2Section"
            ref={this.contentRef2}
            aria-label="This is content for the second separate content tab"
            hidden
          >
            Tab 2 section
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
            <Card isCompact>
              <CardTitle> Tab 1 Card </CardTitle>
              <CardBody> Tab 1 Card Body</CardBody>
              <CardFooter>Tab 1 Card footer</CardFooter> 
            </Card>

            <Card isCompact>
              <CardTitle> Tab 1 Card </CardTitle>
              <CardBody> Tab 1 Card Body</CardBody>
              <CardFooter>Tab 1 Card footer</CardFooter> 
            </Card>

            <Card isCompact>
              <CardTitle> Tab 1 Card </CardTitle>
              <CardBody> Tab 1 Card Body</CardBody>
              <CardFooter>Tab 1 Card footer</CardFooter> 
            </Card>

            <Card isCompact>
              <CardTitle> Tab 1 Card </CardTitle>
              <CardBody> Tab 1 Card Body</CardBody>
              <CardFooter>Tab 1 Card footer</CardFooter> 
            </Card>

            <Card isCompact>
              <CardTitle> Tab 1 Card </CardTitle>
              <CardBody> Tab 1 Card Body</CardBody>
              <CardFooter>Tab 1 Card footer</CardFooter> 
            </Card>

            <Card isCompact>
              <CardTitle> Tab 1 Card </CardTitle>
              <CardBody> Tab 1 Card Body</CardBody>
              <CardFooter>Tab 1 Card footer</CardFooter> 
            </Card>

            <Card isCompact>
              <CardTitle> Tab 1 Card </CardTitle>
              <CardBody> Tab 1 Card Body</CardBody>
              <CardFooter>Tab 1 Card footer</CardFooter> 
            </Card>

            <Card isCompact>
              <CardTitle> Tab 1 Card </CardTitle>
              <CardBody> Tab 1 Card Body</CardBody>
              <CardFooter>Tab 1 Card footer</CardFooter> 
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
            Tab 4 section
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
    <footer class="footer">&#169; Copyright 2022, Red Hat</footer>
    </span>  
  );
}

export default App; 

//