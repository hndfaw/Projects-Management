
export const fetchCatsFacts = () => {
  return  fetch('https://pmapi-node.herokuapp.com/api/v1/programs')
        .then(res =>  res.json())
        .then(data =>  data)
}