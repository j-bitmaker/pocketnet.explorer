import { Pipe, PipeTransform } from '@angular/core';
import { BlockCompact } from 'src/app/types/Block';
import { Types } from 'src/app/types/Transaction';

@Pipe({
    name: 'ContentsCnt'
})
export class ContentsCntPipe implements PipeTransform {

    transform(block: BlockCompact, args?: any): number {
        return (block.types[Types.Post]||0 + block.types[Types.Video]||0) || 0;
    }

}
