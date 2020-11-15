const fetchItems = () => {
    return dispatch => {
        dispatch({ type: 'START_ADDING_ITEMS_REQUEST' });
        fetch('https://solflair-api.herokuapp.com/items')
          .then(response => response.json())
          .then(items => {
              dispatch({ type: 'ADD_ITEMS', items })
            });
      };
}

export default fetchItems