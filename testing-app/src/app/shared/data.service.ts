import { Promise } from 'q';

export class DataService {
    getDetails() {
        const result = Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Data');
            }, 100);
        });

        return result;
    }
}