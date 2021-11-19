import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { colors } from './design-tokens';
import { space, rems } from './helpers';
import fonts from './fonts';

const buttonPrimary = css`
  background: ${({ inverted }) => (inverted ? colors.neutral[100] : colors.primary[500])};
  border-color: ${({ inverted }) => (inverted ? colors.neutral[100] : colors.primary[500])};
  color: ${({ inverted }) => (inverted ? colors.primary[600] : colors.neutral[100])};

  &:hover,
  &:active {
    background: ${({ inverted }) => (inverted ? colors.neutral[200] : colors.primary[600])};
    border-color: ${({ inverted }) => (inverted ? colors.neutral[200] : colors.primary[600])};
    color: ${({ inverted }) => (inverted ? colors.primary[500] : colors.neutral[100])};
  }
`;

const buttonSecondary = css`
  background: none;
  border-color: currentColor;
  color: ${({ inverted, theme }) => {
    if (inverted) return colors.neutral[100];
    else if (theme?.secondary) return theme.secondary;
    else return colors.primary[900];
  }};

  &:hover,
  &:active {
    background: none;
    border-color: currentColor;
    color: ${({ inverted, theme }) => {
      if (inverted) return colors.neutral[100];
      else if (theme?.secondaryHover) return theme.secondaryHover;
      else if (theme?.hover) return theme.hover;
      else return colors.primary[800];
    }};
  }
`;

const buttonTertiary = css`
  align-items: center;
  background: none;
  border: none;
  color: ${({ inverted, theme }) => {
    if (inverted) return colors.neutral[100];
    else if (theme?.clickable) return theme.clickable;
    else return colors.primary[700];
  }};
  padding-left: 0;
  padding-right: 0;
  text-align: center;
  text-decoration: underline;
  width: auto;

  &:hover,
  &:active {
    color: ${({ inverted, theme }) => {
      if (inverted) return colors.neutral[100];
      else if (theme?.hover) return theme.hover;
      else return colors.primary[500];
    }};
  }

  &:hover {
    svg {
      right: ${space(-1)};
    }
  }

  svg {
    display: inline-block;
    height: 8px;
    margin-left: ${space(1)};
    min-width: 12px;
    position: relative;
    right: 0;
    transition: right 0.3s ease-in-out;
    width: 12px;
    will-change: right;

    path {
      fill: currentColor;
    }
  }
`;

const buttonThemed = css`
  background: none;
  border-color: currentColor;
  color: ${({ theme }) => theme.color || colors.primary[500]};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colorHover || colors.primary[400]};
  }
`;

interface ButtonProps {
  full?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  inverted?: boolean;
}

const BaseButton = css`
  align-items: center;
  border: 2px solid;
  border-radius: ${space(3)};
  cursor: pointer;
  display: inline-flex;
  font-weight: 500;
  justify-content: center;
  line-height: 1;
  min-width: ${rems(120)};
  padding: ${space(1)} ${space(2)};
  text-decoration: none;
  transition: 0.1s ease-out;
  vertical-align: text-top;
  width: ${({ full }) => (full ? '100%' : 'auto')};
  will-change: background, color;

  &:disabled {
    background: ${colors.neutral[300]} !important;
    border-color: ${colors.neutral[300]} !important;
    color: ${colors.neutral[800]} !important;
    pointer-events: none;
  }

  * {
    pointer-events: none;
  }
`;

const ButtonConstructor = css`
  ${BaseButton};
  ${({ secondary, tertiary, theme }) => {
    if (theme?.color) {
      return buttonThemed;
    } else if (secondary) {
      return buttonSecondary;
    } else if (tertiary) {
      return buttonTertiary;
    } else {
      return buttonPrimary;
    }
  }};
`;

const Button = styled.button<ButtonProps>`
  ${ButtonConstructor};
  ${fonts.buttonMD};
`;

const ButtonLink = styled(Link)<ButtonProps>`
  ${ButtonConstructor};
  ${fonts.bodySMLinks};
`;

const ButtonExternal = styled.a<ButtonProps>`
  ${ButtonConstructor};
  ${fonts.bodySMLinks};
`;

const ButtonSmall = styled.button<ButtonProps>`
  ${ButtonConstructor};
  ${fonts.buttonSM};
  white-space: nowrap;
`;

const ButtonLinkSmall = styled(Link)<ButtonProps>`
  ${ButtonConstructor};
  ${fonts.buttonSM};
`;

const ButtonClass = css`
  .button.secondary {
    ${ButtonConstructor};
    ${buttonSecondary};
    ${fonts.buttonSM};
  }
`;

export { Button, ButtonLink, ButtonSmall, ButtonLinkSmall, ButtonClass, ButtonExternal };
