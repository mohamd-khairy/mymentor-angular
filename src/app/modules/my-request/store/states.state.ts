export interface IRequestInitialState{
    loading: boolean,
    data: any,
    error: any
}

export let RequestInitialState = {
    loading: false,
    data: {},
    error: {}
}