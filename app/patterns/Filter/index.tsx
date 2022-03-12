import React, { useState } from 'react';
import * as C from './styles';
import { Dropdown } from '@components/Dropdown';
import Image from 'next/image';
import filterIcon from '@images/filter-icon.svg';
import { formOptions } from '@utils/formOptions';

type Props = {
    setHousing: React.Dispatch<React.SetStateAction<string>>;
    setNumberOfRoom: React.Dispatch<React.SetStateAction<number>>;
    setPrice: React.Dispatch<React.SetStateAction<{ min: number, max: number }>>
    setSize: React.Dispatch<React.SetStateAction<{ min: number, max: number }>>
}

export function Filter({ setHousing, setPrice, setSize, setNumberOfRoom }: Props) {
    const [inputPrice, setInputPrice] = useState({ min: 0, max: 0 });
    const [inputSize, setInputSize] = useState({ min: 0, max: 0 });
    const [inputNumberOfRoom, setInputNumberOfRoom] = useState(0);

    return (
        <C.Container>
            <div>
                <Dropdown label="Housing">
                    <C.HousingDropdown>
                        {formOptions.housing.map(housingOption => (
                            <p key={housingOption[1]} onClick={e => setHousing(housingOption[1])}>{housingOption[0]}</p>
                        ))}
                    </C.HousingDropdown>
                </Dropdown>
            </div>
            <div>
                <Dropdown label="Price">
                    <C.PriceDropdown>
                        <h2>Price Range</h2>
                        <div className="input-container">
                            <C.Input
                                placeholder="Min"
                                min="0"
                                type="number"
                                value={inputPrice.min}
                                onChange={e => setInputPrice(prev => ({ ...prev, min: Number(e.target.value) }))}
                            />
                            <C.Input
                                placeholder="Max"
                                min="0"
                                type="number"
                                value={inputPrice.max}
                                onChange={e => setInputPrice(prev => ({ ...prev, max: Number(e.target.value) }))} />
                        </div>
                        <C.ButtonsContainer>
                            <button onClick={e => {
                                setPrice({ min: 0, max: 0 })
                                setInputPrice({ min: 0, max: 0 })
                            }} className="reset">Reset Selections</button>
                            <button onClick={e => setPrice(inputPrice)} className="apply">apply</button>
                        </C.ButtonsContainer>
                    </C.PriceDropdown>
                </Dropdown>
            </div>
            <div>
                <Dropdown label="Size(M²)">
                    <C.PriceDropdown>
                        <h2>Size &#40;M²&#41;</h2>
                        <div className="input-container">
                            <C.Input placeholder="Min" min="0" type="number"
                                value={inputSize.min}
                                onChange={e => setInputSize(prev => ({ ...prev, min: Number(e.target.value) }))} />
                            <C.Input placeholder="Max" min="0" type="number"
                                value={inputSize.max}
                                onChange={e => setInputSize(prev => ({ ...prev, max: Number(e.target.value) }))} />
                        </div>
                        <C.ButtonsContainer>
                            <button onClick={e => {
                                setSize({ min: 0, max: 0 })
                                setInputSize({ min: 0, max: 0 })
                            }} className="reset">Reset Selections</button>
                            <button onClick={e => setSize(inputSize)} className="apply">apply</button>
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
                                        <input onChange={() => setInputNumberOfRoom(i + 1)} id={`n${i + 1}`} checked={inputNumberOfRoom === i + 1} type="radio" name="nor" />
                                        <label htmlFor={`n${i + 1}`}>
                                            {i + 1}{i + 1 === 7 && '+'}
                                        </label>
                                    </C.RadioInput>
                                ))
                            }
                        </div>
                        <C.ButtonsContainer>
                            <button onClick={e => {
                                setNumberOfRoom(0);
                                setInputNumberOfRoom(0);
                            }} className="reset">Reset Selection</button>
                            <button onClick={e => setNumberOfRoom(inputNumberOfRoom)} className="apply">Apply</button>
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
