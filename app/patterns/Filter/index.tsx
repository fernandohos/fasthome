import React from 'react';
import * as C from './styles';
import { Dropdown } from '../../components/Dropdown';
import Image from 'next/image';
import filterIcon from '../../../public/images/filter-icon.svg';

export function Filter() {
    return (
        <C.Container>
            <div>
                <Dropdown label="Housing">
                    <C.HousingDropdown>
                        <p>Apartment</p>
                        <p>Building</p>
                        <p>Summery</p>
                        <p>Mansion</p>
                        <p>Waterside</p>
                        <p>Villa</p>
                    </C.HousingDropdown>
                </Dropdown>
            </div>
            <div>
                <Dropdown label="Price">
                    <C.PriceDropdown>
                        <h2>Price Range</h2>
                        <div className="input-container">
                            <C.Input placeholder="Min" min="0" type="number" />
                            <C.Input placeholder="Max" min="0" type="number" />
                        </div>
                        <C.ButtonsContainer>
                            <button className="reset">Reset Selections</button>
                            <button className="apply">apply</button>
                        </C.ButtonsContainer>
                    </C.PriceDropdown>
                </Dropdown>
            </div>
            <div>
                <Dropdown label="Size(M²)">
                    <C.PriceDropdown>
                        <h2>Size &#40;M²&#41;</h2>
                        <div className="input-container">
                            <C.Input placeholder="Min" min="0" type="number" />
                            <C.Input placeholder="Max" min="0" type="number" />
                        </div>
                        <C.ButtonsContainer>
                            <button className="reset">Reset Selections</button>
                            <button className="apply">apply</button>
                        </C.ButtonsContainer>
                    </C.PriceDropdown>
                </Dropdown>
            </div>
            <div>
                <Dropdown label="Number of room">
                    <C.RoomCount>
                        <h2>Number of Room</h2>
                        <div className="numbers-container">
                            {
                                Array(7).fill('a').map((a, i) => (
                                    <C.RadioInput key={i}>
                                        <input id={`n${i + 1}`} type="radio" name="nor" />
                                        <label htmlFor={`n${i + 1}`}>
                                            {i + 1}{i + 1 === 7 && '+'}
                                        </label>
                                    </C.RadioInput>
                                ))
                            }
                        </div>
                        <C.ButtonsContainer>
                            <button className="reset">Reset Selection</button>
                            <button className="apply">Apply</button>
                        </C.ButtonsContainer>
                    </C.RoomCount>
                </Dropdown>
            </div>
            <div className="filter-icon-container">
                <Image src={filterIcon} alt="filter icon" layout="fill" />
            </div>
        </C.Container>
    )
}
