import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/basic';
import Billboard from '../components/Billboard';
import Component01 from '../components/Component01';
import Component02 from '../components/Component02';
import Component03 from '../components/Component03';
import PinnedImageText from '../components/PinnedImageText';
import HorizontalPath from '../components/HorizontalPath';
import AnimatedImageText from '../components/AnimatedImageText';

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
            case 'billboard':
              return (
                <Billboard key={key} title={component?.title} subtitle={component?.subtitle} />
              );
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
            case 'pinned-image-text':
              return (
                <PinnedImageText
                  key={key}
                  title={component?.title}
                  elements={component?.elements}
                />
              );
            case 'horizontal-path':
              return (
                <HorizontalPath key={key} title={component?.title} elements={component?.elements} />
              );
            case 'animated-image-text':
              return (
                <AnimatedImageText
                  key={key}
                  title={component?.title}
                  content={component.content}
                  image={component?.image}
                  direction={component?.direction}
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
          subtitle
          direction
          type
          elements {
            content
            image
            title
            color
          }
        }
      }
    }
  }
`;

export default BasicPage;
