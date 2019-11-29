const initState = {
    posts: [
        {id: '1', title: 'Title1', body: 'body1'},
        {id: '2', title: 'Title2', body: 'body2'},
        {id: '3', title: 'Title3', body: 'body3'},
    ]
}

const rootReducer = (state = initState, action) => {
    return state
}

export default rootReducer 
