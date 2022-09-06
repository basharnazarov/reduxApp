export const selectPost = (post) => {
  return {
    type: "POST_SELECTED",
    payload: post,
  };
};
export const removePost = post => {
    return {
        type: 'POST_REMOVED',
        payload: post,
    }
}

export const deletePost = post => {
    return {
        type: 'POST_DELETED',
        payload: post,
    }
}


export const editPost = post => {
    return {
        type: 'POST_EDITED',
        payload: post
    }
}

export const createPost = post => {
    return {
        type: 'POST_CREATED',
        payload: post,
    }
}

export const loginUser = user => {
    return {
        type: 'USER_LOGGEDIN',
        payload: user
    }
}