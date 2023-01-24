import * as C from './styles';
import { SearchInput } from '@components/SearchInput';

export function Banner() {
    return (
        <C.Banner>
            <h1>Your dream <br /> house is here.</h1>
            <SearchInput />
        </C.Banner >
    )
}
