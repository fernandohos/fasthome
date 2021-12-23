import React, { useState } from 'react';
import { Fieldset } from '../Fieldset';
import * as C from './styles';
import Image from 'next/image';
import imageIcon from '../../../public/images/image-icon.svg';
import cameraIcon from '../../../public/images/camera-icon.svg';
import plusIcon from '../../../public/images/plus-icon.svg';
import { useDropzone } from 'react-dropzone';

interface FileType extends File {
    preview: string;
}

export function PostingPhotos() {
    const [files, setFiles] = useState<FileType[]>([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        maxFiles: 10,
        onDrop: (acceptedFiles) => {
            setFiles(acceptedFiles.map(file => {
                return (
                    Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })
                )
            }))
        }
    });

    const images = files.map(file => {
        return <Image key={file.name} src={file.preview} width="200" height="100" alt={file.name} />
    })

    return (
        <Fieldset title="Posting Photos">
            <C.Container>
                <div className="image-container image-icon">
                    <Image src={imageIcon} alt="image icon" layout="fill" />
                </div>
                <p>You can add 10 photos to your ad</p>

                <button {...getRootProps()}>
                    <div className="image-container camera-icon">
                        <Image src={cameraIcon} alt="image icon" layout="fill" />
                        <input {...getInputProps()} />
                    </div>
                    <p>Download from Computer</p>
                </button>

                {
                    files.length === 0 ? (
                        <C.DropContainer {...getRootProps()}>
                            <div className="plus-icon">
                                <Image src={plusIcon} alt="plus icon" layout="fill" />
                            </div>
                            <input {...getInputProps()} />
                            <p>Drop your photos here or click to select</p>
                        </C.DropContainer>
                    ) : (
                        <C.ImagesContainer>
                            {
                                files.map((file, i) => {
                                    if (i > 5) return null;
                                    if (files.length > 6 && i === 5) {
                                        return <C.DefaultImage>+ {files.length - 5}</C.DefaultImage>
                                    }

                                    return <Image key={file.name} src={file.preview} width="200" height="100" alt={file.name} />
                                })
                            }
                        </C.ImagesContainer>
                    )
                }
            </C.Container>
        </Fieldset>
    )
}