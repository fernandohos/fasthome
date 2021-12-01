import React from 'react';
import * as C from './styles';
import searchIcon from '../../../public/images/search-icon.svg';
import Image from 'next/image';

export function Banner() {
    return (
        <C.Banner>
            <C.InputContainer>
                <input type="text"  />
                <button className="icon-container">
                    <div className="icon">
                        <Image src={searchIcon} alt="search icon" layout="fill" />
                    </div>
                </button>
            </C.InputContainer>
            <h1>Your dream <br /> house is here</h1>
        </C.Banner>
    )
}
