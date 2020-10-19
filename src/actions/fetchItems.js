const fetchItems = () => {
    return dispatch => {
        dispatch({ type: 'START_ADDING_ITEMS_REQUEST' });
        fetch('http://localhost:3001/items')
          .then(response => response.json())
          .then(items => {
              debugger
              dispatch({ type: 'ADD_ITEMS', items })
            });
      };
}

export default fetchItems