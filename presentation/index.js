// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
  Image,
  Layout,
  Fill,
  Appear,
  CodePane
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const images = {
  horia: require("../assets/horia.jpg"),
  legoBricks: require("../assets/lego_bricks.png"),
  magnaTiles: require("../assets/magna_tiles.png"),
  woodenTrain: require("../assets/wooden_train.png"),
  plastilin: require("../assets/plastilin.png"),
  legoLogo: require("../assets/lego_logo.png"),
  legoChart: require("../assets/lego_bar_chart.jpg"),
  kat: require("../assets/kat.png"),
  highcharts: require("../assets/highcharts.png"),
  renderProps: require("../assets/render_props.jpg")
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Layout
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "200px",
              textAlign: "left"
            }}
          >
            <Image
              src={images.legoLogo.replace("/", "")}
              height={150}
              width={150}
              style={{ margin: 0 }}
            />
            <Heading
              size={3}
              caps
              lineHeight={1}
              textColor="secondary"
              style={{ margin: 10, paddingTop: 15 }}
            >
              Charts
            </Heading>
          </Layout>
          <Text margin="10px" textColor="secondary" size={5} bold>
            Sergiu Buciuc
          </Text>
          <Text margin="10px" textColor="tertiary" size={5} bold>
            @devserge
          </Text>
          <Notes>
            <ol>
              <li>Why lego?</li>
              <li>Are you here because of the boss?</li>
              <li>Passion = game</li>
              <li>The preferate toys of my son => next slide</li>
            </ol>
          </Notes>
        </Slide>

        <Slide bgColor="primary">
          <Layout style={{ marginBottom: 50 }}>
            <Fill>
              <Image
                src={images.plastilin.replace("/", "")}
                height={200}
                width={200}
              />
            </Fill>
            <Appear>
              <Fill>
                <Image
                  src={images.magnaTiles.replace("/", "")}
                  height={200}
                  width={200}
                />
              </Fill>
            </Appear>
          </Layout>
          <Layout>
            <Appear>
              <Fill>
                <Image
                  src={images.woodenTrain.replace("/", "")}
                  height={200}
                  width={200}
                />
              </Fill>
            </Appear>
            <Appear>
              <Fill>
                <Image
                  src={images.legoBricks.replace("/", "")}
                  height={200}
                  width={200}
                />
              </Fill>
            </Appear>
          </Layout>
        </Slide>
        <Slide bgImage={images.horia.replace("/", "")}>
          <Notes>
            <ol>
              <li>Magna tiles are tunnels for train</li>
              <li>Original tunnels were too narrow for some trains</li>
              <li>
                The sand was designed to make shapes, but it's a muddy parking
                lot
              </li>
              <li>Has "composed" his playground</li>
              <li>Unlimited possibilities</li>
            </ol>
          </Notes>
        </Slide>
        <Slide bgDarken={0.75} bgImage={images.horia.replace("/", "")}>
          <BlockQuote>
            <Quote>Solved problems need constrained APIs.</Quote>
            <br />
            <Quote>Unsolved problems need unconstrained APIs.</Quote>
            <Cite>Sebastian Markbåge</Cite>
          </BlockQuote>
          <Notes>
            <ol>
              <li>His problem (unknowingly) was to build a playground.</li>
              <li>A unique playground = an unsolved problem</li>
              <li>Very little constraints in his tools.</li>
            </ol>
          </Notes>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={3} lineHeight={1} textColor="primary">
            Unconstrained APIs
          </Heading>

          <List>
            <Appear>
              <ListItem>React</ListItem>
            </Appear>
            <Appear>
              <ListItem>D3</ListItem>
            </Appear>
            <Appear>
              <ListItem>Lodash</ListItem>
            </Appear>
            <div style={{ opacity: 0 }}>
              <ListItem>JQuery</ListItem>
            </div>

            <div style={{ opacity: 0 }}>
              <Image
                src={images.kat.replace("/", "")}
                height={200}
                width={200}
              />
            </div>
          </List>
        </Slide>

        <Slide transition={["none"]} bgColor="secondary" textColor="primary">
          <Heading size={3} lineHeight={1} textColor="primary">
            Unconstrained APIs
          </Heading>
          <List>
            <ListItem>React</ListItem>
            <ListItem>D3</ListItem>
            <ListItem>Lodash-fp / Ramda</ListItem>
            <Appear>
              <ListItem>JQuery</ListItem>
            </Appear>

            <Appear>
              <Image
                src={images.kat.replace("/", "")}
                height={200}
                width={200}
              />
            </Appear>
          </List>

          <Notes>
            <ol>
              <li>lodash-fp is more composable.</li>
              <li>
                jquery is the 18-old kid you want out, but cute when small
              </li>
              <li>constraints can be added, but later, see React vs JQuery</li>
            </ol>
          </Notes>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Configuration is a form of constraint</Quote>
            <br />
            <Appear>
              <Quote>The antidote is...</Quote>
            </Appear>
            <br />
            <Appear>
              <Quote textColor="tertiary">Composition!</Quote>
            </Appear>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.highcharts.replace("/", "")} height={300} />
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/highcharts.example")}
            margin="20px auto"
            overflow="auto"
            style={{ height: "300px" }}
          />

          <Notes>
            <ol>
              <li>
                in plot options - invents complicated language to describe an UI
              </li>
              <li>too many options - scary!</li>
              <li>mixes JS in there</li>
            </ol>
          </Notes>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={5} lineHeight={1} textColor="primary">
            Problems with non-composable, highly configurable libraries/APIs
          </Heading>
          <List>
            <Appear>
              <ListItem>Cannot easily be extended</ListItem>
            </Appear>
            <Appear>
              <ListItem>Cannot replace parts</ListItem>
            </Appear>
            <Appear>
              <ListItem>Cannot insert custom parts</ListItem>
            </Appear>
            <Appear>
              <ListItem>Tend to be very large</ListItem>
            </Appear>
            <Appear>
              <ListItem>Favour monolithic implementations</ListItem>
            </Appear>
          </List>
          <Notes>
            <ol>
              <li>composability is good, but what are we composing?</li>
            </ol>
          </Notes>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>DOTADIW</Quote>
            <br />
            <Appear>
              <Quote>Do One Thing and Do It Well.</Quote>
            </Appear>
            <Appear>
              <Cite>UNIX philosophy</Cite>
            </Appear>
          </BlockQuote>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              Everything should be made as simple as possible, but not simpler.
            </Quote>
            <Cite>attributed to Albert Einstein</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={5} lineHeight={1} textColor="primary">
            More on simplicity
          </Heading>
          <List>
            <Appear>
              <ListItem>Implement only what you need at the time</ListItem>
            </Appear>
            <Appear>
              <ListItem>80/20 thinking</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Find the perfect balance of working out of the box, and
                configuring
              </ListItem>
            </Appear>
          </List>
          <Notes>
            <ol>
              <li>
                you’ll end up writing in a bunch of features that will never be
                used
              </li>
              <li>
                A few of the features you implement will be responsible for
                handling most of the use cases. Focus on those.
              </li>
              <li>
                Too simple and it doesn’t cover enough use cases to be helpful.
                Too flexible and it becomes too difficult to understand how to
                do anything.
              </li>
            </ol>
          </Notes>
        </Slide>

        <Slide bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>So, good libraries have</Quote>
            <br />
            <Appear>
              <Quote>composable/replaceabe parts that</Quote>
            </Appear>
            <br />
            <Appear>
              <Quote>are simple and</Quote>
            </Appear>
            <br />
            <Appear>
              <Quote>do one thing well.</Quote>
            </Appear>
          </BlockQuote>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Heading size={5} lineHeight={1} textColor="primary">
            What are the tools to build a LEGO-like charting lib?
          </Heading>
          <List>
            <Appear>
              <ListItem>React - rendering engine</ListItem>
            </Appear>
            <Appear>
              <ListItem>D3 - mathematical stuff</ListItem>
            </Appear>
          </List>
          <Notes>
            <ol>
              <li>not the only tools! you could use jquery all the way</li>
            </ol>
          </Notes>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Heading size={5} lineHeight={1} textColor="primary">
            Any methodology advice?
          </Heading>
          <Appear>
            <Image src={images.renderProps.replace("/", "")} />
          </Appear>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Heading size={5} lineHeight={1} textColor="primary">
            So close!
          </Heading>
          <List>
            <Appear>
              <ListItem>Render Props</ListItem>
            </Appear>
            <Appear>
              <ListItem>Context API (the React 16.3 kind !)</ListItem>
            </Appear>
            <Appear>
              <ListItem>Compound Components</ListItem>
            </Appear>
          </List>
        </Slide>
      </Deck>
    );
  }
}
