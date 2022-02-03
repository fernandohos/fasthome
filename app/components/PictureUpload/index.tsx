import React, { useState } from 'react';
import * as C from './styles';
import Image from 'next/image';
import imageIcon from '../../../public/images/image-icon.svg';
import { useDropzone } from 'react-dropzone';
import { FieldProps } from 'formik';

interface FileType extends File {
    preview: string;
}

export function PictureUpload({ form }: FieldProps) {
    const [file, setFile] = useState<FileType | null>(null);
    const { setFieldValue } = form;

    React.useEffect(() => {
        setFieldValue("photo", file);
    }, [file, setFieldValue]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        maxFiles: 10,
        maxSize: 5000000,
        onDrop: (acceptedFiles) => {
            setFile(Object.assign(acceptedFiles[0], {
                preview: URL.createObjectURL(acceptedFiles[0])
            }))
        }
    });

    return (
        <C.Container {...getRootProps()}>
            {
                file ? (
                    <C.ProfileImage>
                        <Image src={file.preview} alt="image icon" layout="fill" />
                    </C.ProfileImage>
                ) : (
                    <>
                        <C.Icon>
                            <Image src={imageIcon} alt="image icon" layout="fill" />
                        </C.Icon>
                        <p>upload a profile picture</p>
                        <input {...getInputProps()} />
                    </>
                )
            }
        </C.Container>
    )
}