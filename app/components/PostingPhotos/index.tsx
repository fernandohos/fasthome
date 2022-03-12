import React, { useState } from 'react';
import { Fieldset } from '../Fieldset';
import * as C from './styles';
import Image from 'next/image';
import imageIcon from '@images/image-icon.svg';
import cameraIcon from '@images/camera-icon.svg';
import plusIcon from '@images/plus-icon.svg';
import { useDropzone } from 'react-dropzone';
import { FieldProps } from 'formik';

interface FileType extends File {
    preview: string;
}

export function PostingPhotos({ form }: FieldProps) {
    const [files, setFiles] = useState<FileType[]>([]);
    const { setFieldValue } = form;

    React.useEffect(() => {
        setFieldValue("files", files);
    }, [files, setFieldValue]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        maxFiles: 10,
        maxSize: 5000000,
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

    function handleRemoveFiles() {
        setFiles([]);
        setFieldValue("files", []);
    }

    return (
        <Fieldset title="Posting Photos">
            <C.Container>
                <div className="image-container image-icon">
                    <Image src={imageIcon} alt="image icon" layout="fill" />
                </div>
                <p>You can add 10 photos to your ad</p>

                <button type="button" {...getRootProps()}>
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
                            <div className="remove" onClick={handleRemoveFiles} />
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