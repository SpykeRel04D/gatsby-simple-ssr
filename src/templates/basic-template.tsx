import React from 'react';
import loadable from '@loadable/component';
import { graphql } from 'gatsby';

import Layout from '../layouts/basic';
const Component01 = loadable(() => import('../components/Component01'));
const Component02 = loadable(() => import('../components/Component02'));
const Component03 = loadable(() => import('../components/Component03'));

interface IProps {
  data: any;
  pageContext: {
    id: string;
    translations: any;
  };
}

const BasicPage = ({ data, pageContext }: IProps) => {
  const { markdownRemark } = data;

  const components = markdownRemark?.frontmatter?.components;
  return (
    <Layout>
      {components &&
        components.map((component, i) => {
          const type = component.type;
          const key = `${type}_${i}`;

          switch (type) {
            case 'component01':
              return (
                <Component01
                  key={key}
                  title={component?.title}
                  content={component.content}
                  image={component?.image}
                />
              );
            case 'component02':
              return (
                <Component02
                  key={key}
                  title={component?.title}
                  content={component.content}
                  image={component?.image}
                />
              );
            case 'component03':
              return (
                <Component03
                  key={key}
                  title={component?.title}
                  content={component.content}
                  image={component?.image}
                />
              );
          }
        })}
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        slug
        type
        components {
          content
          image
          title
          type
        }
      }
    }
  }
`;

export default BasicPage;
