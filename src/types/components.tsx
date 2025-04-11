import { JSX } from "react";

export type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'complement' | 'white' | 'success' | 'gradient' | 'outlineComplement' | 'noOutlinePrimary' | 'outlinePrimary' | 'outlineSecondary' | 'outlineSuccess';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
};

export type FeatureProps = {
  title: string;
  desc: string;
  Icon: React.ComponentType<JSX.IntrinsicElements['svg']>;
}

export type VideoItem = {
  id: string;
  title: string;
  type: 'youtube' | 'local';
  url: string;
  thumbnail?: string;
  description?: string;
};