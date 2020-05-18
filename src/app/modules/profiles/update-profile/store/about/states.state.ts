
export interface IinitialAboutState {
    loading : boolean,
    errors: any,
    data: any
}

export let initialAboutState: IinitialAboutState = {
    loading : false,
    errors: [] ,
    data : {}
}