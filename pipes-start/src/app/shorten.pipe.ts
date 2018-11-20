import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, limit: number) {
        if (!limit) {
            limit = 5;
        }

        if (value.length > limit) {
            return value.substr(0, limit) + ' ...';
        }

        return value;
    }
}