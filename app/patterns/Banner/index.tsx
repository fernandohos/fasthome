import React, { useState } from 'react';
import * as C from './styles';
import searchIcon from '../../../public/images/search-icon.svg';
import Image from 'next/image';

export function Banner() {
    return (
        <C.Banner>
            <C.InputContainer action="/search">
                <input placeholder="search..." type="text" name="q" />
                <button type="submit" className="icon-container">
                    <div className="icon">
                        <Image src={searchIcon} alt="search icon" layout="fill" />
                    </div>
                </button>
            </C.InputContainer>
            <h1>Your dream <br /> house is here</h1>
        </C.Banner >
    )
}
