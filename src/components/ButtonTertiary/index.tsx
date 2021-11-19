import React from 'react';

import { externalLink } from '../../ui/helpers';
import { ButtonLink, ButtonExternal } from '../../ui/Button';
import Arrow from '../../ui/svgs/arrow.svg';

interface IProps {
  label: string;
  props?: any;
}

const ButtonTertiary = ({ label, ...props }: IProps) => {
  return externalLink(props?.to) ? (
    <ButtonExternal
      tertiary={1}
      {...props}
      to={null}
      href={props?.to}
      rel="nofollow noopener noreferrer">
      <span>{label}</span>
      <Arrow />
    </ButtonExternal>
  ) : (
    <ButtonLink tertiary={1} {...props}>
      <span>{label}</span>
      <Arrow />
    </ButtonLink>
  );
};

export default ButtonTertiary;
