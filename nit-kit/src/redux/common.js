export const getLoginOption = (state = {
  options: '',
}, action) => {
	switch (action.type) {
	case 'STORE_OPTION':
    console.log(action);
		return {
      options: action.options,
    }
	default:
		return state
	}
}

