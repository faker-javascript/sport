import {expectType} from 'tsd';
import sport from './index.js';

expectType<string>(sport({locale: 'en_US'}).unusual());
expectType<string>(sport().unusual());
expectType<string>(sport().ancientOlympics());
expectType<string>(sport().summerOlympics());
expectType<string>(sport().summerParalympics());
expectType<string>(sport().winterOlympics());
expectType<string>(sport().winterParalympics());
