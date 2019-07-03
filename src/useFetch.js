import { useEffect } from 'react';

export const useFetch = url => {
  useEffect(() => {
    fetch(url)
     .then(response => response.text())
     .then(users => console.log(users))
  })
}