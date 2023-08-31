import React from 'react';
import { getRandomColor } from '../../helpers/changeColor';
interface SomeComponentProps {
  children: React.ReactNode;
}
function RandomColorItem({ children }: SomeComponentProps) {
  // className={styles.}
  return <span style={{ color: getRandomColor() }}>{children}</span>;
}

export default RandomColorItem;
