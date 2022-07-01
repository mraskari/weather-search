import { Observable } from 'rxjs';
import RequestModel from '../utils/RequestModel';
import { Body } from '../utils/types';

export const ApiService = {
    // get request
    get: (route: string): Observable<any> => {
        const headers = {
            'Content-Type': 'text/plain'
        };
        const newBase = new RequestModel(route, 'GET', headers);
        return newBase.request();
    },
    // post request
    post: (route: string, form: Body): Observable<any> => {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        };
        const newBase = new RequestModel(route, 'POST', headers, form)
        return newBase.request();
    },
};
