import React from 'react';

const initState = {
    sidebarPage: {
        sidebar: [],
    }
}

// type ActionType = AddPostType | IncrLikeCounterType

const sidebarReducer = (state = initState, action: any) => {
    switch (action.type) {
        case "XXX": {
            return state
        }
        default: {
            return state
        }
    }
};

export default sidebarReducer;