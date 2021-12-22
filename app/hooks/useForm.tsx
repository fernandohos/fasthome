import { useContext } from 'react';
import { formContext } from "../contexts/formContext";

export function useForm() {
    const { files, previewFiles, setFiles, setPreviewFiles } = useContext(formContext);

    return {
        files,
        previewFiles,
        setFiles,
        setPreviewFiles
    }
}
