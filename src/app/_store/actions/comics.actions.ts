import { Action } from '@ngrx/store';

export const TIME_CLOCK = '[any] Time clock';


export class TimeClockAction implements Action {
    readonly type = TIME_CLOCK;
    constructor( public payload: any ) { }
}

export type TimeClockActions =  TimeClockAction;
