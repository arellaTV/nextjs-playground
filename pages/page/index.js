import axios from 'axios';
import { Fragment } from 'react';
import 'isomorphic-fetch';

class WordpressPages extends React.Component {
  static async getInitialProps() {
    const pages = await fetch('http://demo.wp-api.org/wp-json/wp/v2/pages').then(res => res.json());
    return { pages };
  }

  render() {
    return (
      <Fragment>
        <h1>Logging axios results</h1>
        <div dangerouslySetInnerHTML={{ __html: this.props.pages[0].content.rendered }}></div>
      </Fragment>
    )
  }
}

export default WordpressPages;
