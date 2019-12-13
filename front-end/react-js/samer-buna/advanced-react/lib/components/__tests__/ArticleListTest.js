import React from 'react';
import ArticleList from '../ArticleList';
import Article from '../Article';

// import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' }
    }
  };

  Article.propTypes = {};

  it('renders correctly', () => {
    // const tree = renderer.create(<ArticleList {...testProps} />).toJSON();
    // console.log(tree);
    // expect(tree.children.length).toBe(2);
    // //===========================================
    // // snapshot expectations
    // //===========================================
    // expect(tree).toMatchSnapshot();
    const wrapper = shallow(<ArticleList {...testProps} />);
    // console.log(wrapper);
    expect(wrapper.find('Article').length).toBe(2);
    //===========================================
    // snapshot expectations
    //===========================================
    expect(wrapper).toMatchSnapshot();
  });
});
