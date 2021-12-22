import React, {
    createContext,
    useState,
    Dispatch,
    SetStateAction,
    ReactNode,
    useEffect
} from 'react';

type FormContext = {
    files: File[];
    setFiles: Dispatch<SetStateAction<File[]>>;
    previewFiles: string[];
    setPreviewFiles: Dispatch<SetStateAction<string[]>>;
}

type FormProviderType = {
    children: ReactNode;
}

export const formContext = createContext({} as FormContext);

export function FormProvider({ children }: FormProviderType) {
    const [files, setFiles] = useState<File[]>([]);
    const [previewFiles, setPreviewFiles] = useState<string[]>([]);

    useEffect(() => {
        if (files) {
            files.map(file => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const result = reader.result as string;
                    setPreviewFiles(prev => {
                        if (prev !== undefined) {
                            return [...prev, result]
                        } else {
                            return [result];
                        }
                    });
                }
                reader.readAsDataURL(file);
            })
        }
    }, [files]);

    return (
        <formContext.Provider
            value={{
                files,
                setFiles,
                previewFiles,
                setPreviewFiles
            }}
        >
            {children}
        </formContext.Provider>
    )
}