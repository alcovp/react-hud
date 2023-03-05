import React, {Dispatch, ReactNode} from 'react';

export enum ActionType {
    ADD_COMPONENT = 'ADD_COMPONENT',
}

type AddComponentAction = {
    type: ActionType.ADD_COMPONENT
    component: ReactNode
}

type Action =
    | AddComponentAction

interface IState {
    components: ReactNode[]
}

export const initialState: IState = {
    components: [],
}

export const reducer = (state: IState, action: Action): IState => {
    const actionType = action.type;
    let newState: IState;
    switch (actionType) {
        case ActionType.ADD_COMPONENT:
            newState = {
                components: [...state.components, action.component],
            };
            return newState;
        default:
            throw new Error('Unknown action type: ' + actionType);
    }
}

export const context = React.createContext<[IState, Dispatch<Action>]>(
    [
        initialState,
        () => {
            return
        },
    ],
);