export const fetchCatsFacts = () => {
  return fetch('https://cat-fact.herokuapp.com/facts')
    .then(res => res.json())
}



