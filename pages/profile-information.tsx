import React, { useReducer, useEffect } from 'react';
import * as C from '../app/styles/profileInformation';
import { Header } from '../app/patterns/Header';
import { Input } from '../app/components/Input';
import { Button } from '../app/components/Button';
import useAuth from '../app/hooks/useAuth';

enum ActionType {
    UPDATE_NAME = 'update_name',
    UPDATE_EMAIL = 'update_email',
    UPDATE_PROVINCE = 'update_province',
    UPDATE_DISTRICT = 'update_ditrict',
    UPDATE_MOBILE_NUMBER = 'update_mobile_number',
    UPDATE_MOBILE_NUMBER2 = 'update_mobile_number2',
    UPDATE_TELEPHONE = 'update_telephone',
    UPDATE_ADDRESS = 'update_address'
}

type StateType = {
    name: string;
    email: string;
    province: string;
    district: string;
    mobileNumber: string;
    mobileNumber2: string;
    telephone: string;
    address: string;
}

type Action = {
    type: ActionType;
    payload: string;
}

function reducer(state: StateType, action: Action) {
    switch (action.type) {
        case ActionType.UPDATE_NAME:
            return {
                ...state,
                name: action.payload
            };
        case ActionType.UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        case ActionType.UPDATE_PROVINCE:
            return {
                ...state,
                province: action.payload
            };
        case ActionType.UPDATE_DISTRICT:
            return {
                ...state,
                district: action.payload
            };
        case ActionType.UPDATE_MOBILE_NUMBER:
            return {
                ...state,
                mobileNumber: action.payload
            };
        case ActionType.UPDATE_MOBILE_NUMBER2:
            return {
                ...state,
                mobileNumber2: action.payload
            };
        case ActionType.UPDATE_TELEPHONE:
            return {
                ...state,
                telephone: action.payload
            };
        case ActionType.UPDATE_ADDRESS:
            return {
                ...state,
                address: action.payload
            };
        default:
            return state;
    }
}

const initialState = {
    name: '',
    email: '',
    province: '',
    district: '',
    mobileNumber: '',
    mobileNumber2: '',
    telephone: '',
    address: '',
}

export default function ProfileInformation() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { user } = useAuth();
    useEffect(() => {
        dispatch({
            type: ActionType.UPDATE_ADDRESS,
            payload: user?.address ?? ''
        })
        dispatch({
            type: ActionType.UPDATE_DISTRICT,
            payload: user?.district ?? ''
        })
        dispatch({
            type: ActionType.UPDATE_EMAIL,
            payload: user?.email ?? ''
        })
        dispatch({
            type: ActionType.UPDATE_MOBILE_NUMBER,
            payload: user?.mobileNumber ?? ''
        })
        dispatch({
            type: ActionType.UPDATE_MOBILE_NUMBER2,
            payload: user?.mobileNumber2 ?? ''
        })
        dispatch({
            type: ActionType.UPDATE_NAME,
            payload: user?.displayName ?? ''
        })
        dispatch({
            type: ActionType.UPDATE_PROVINCE,
            payload: user?.province ?? ''
        })
        dispatch({
            type: ActionType.UPDATE_TELEPHONE,
            payload: user?.telephone ?? ''
        })
    }, [user])

    return (
        <C.Container>
            <Header />
            <C.ProfileInfo>
                <h1>Membership Information</h1>
                <C.InputContainer>
                    <Input
                        dispatch={dispatch}
                        input={{ type: 'text' }}
                        value={state.name}
                        label="Name"
                        type={ActionType.UPDATE_NAME}
                    />
                    <Input
                        dispatch={dispatch}
                        input={{ type: 'email' }}
                        value={state.email}
                        label="Email"
                        type={ActionType.UPDATE_EMAIL}
                    />
                    <Input
                        dispatch={dispatch}
                        input={{ type: 'text' }}
                        value={state.province}
                        label="Province"
                        type={ActionType.UPDATE_PROVINCE}
                    />
                    <Input
                        dispatch={dispatch}
                        input={{ type: 'text' }}
                        value={state.district}
                        label="District"
                        type={ActionType.UPDATE_DISTRICT}
                    />
                    <Input
                        dispatch={dispatch}
                        input={{ type: 'text' }}
                        value={state.mobileNumber}
                        label="Mobile Number"
                        type={ActionType.UPDATE_MOBILE_NUMBER}
                    />
                    <Input
                        dispatch={dispatch}
                        input={{ type: 'text' }}
                        value={state.mobileNumber2}
                        label="Mobile Number 2"
                        type={ActionType.UPDATE_MOBILE_NUMBER2}
                    />
                    <Input
                        dispatch={dispatch}
                        input={{ type: 'text' }}
                        value={state.telephone}
                        label="Telephone"
                        type={ActionType.UPDATE_TELEPHONE}
                    />
                </C.InputContainer>
                <C.Textarea isEmpty={!state.address}>
                    <textarea id="address" value={state.address} onChange={
                        e => dispatch({ type: ActionType.UPDATE_ADDRESS, payload: e.target.value })
                    } />
                    <label htmlFor="address">Address</label>
                </C.Textarea>
                <div className="button">
                    <Button>Save</Button>
                </div>
            </C.ProfileInfo>
        </C.Container>
    )
}
