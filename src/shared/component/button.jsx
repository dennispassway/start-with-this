// @flow

import React from 'react'

type Props = {
  label: string,
  handleClick: Function,
};

export default function Button({ label, handleClick }: Props) {
  return <button onClick={handleClick}>{label}</button>
}
