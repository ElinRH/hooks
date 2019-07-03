import React, { useEffect } from 'react';

export const Hello = () => {
  useEffect(() => {
    console.log('render');
    return () => {
      console.log('unmount')
    }
  }, []);
  return <h1>Hello</h1>
}