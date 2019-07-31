import { TimeClockActions, TIME_CLOCK } from '../actions/comics.actions';
import { Comic } from '../../shared/models/comic.model';

export function establecimientoTODOReducer( state = null,
                                            action: TimeClockActions ): any {
    switch (action.type) {

        case TIME_CLOCK:
            return action.payload;

        default:
            return state;
    }
}
