// @flow

import React from 'react'

type Props = {
  children: any,
  onClick: Function,
};

export default function Button({ children, onClick }: Props) {
  return <button onClick={onClick}>{children}</button>
}
