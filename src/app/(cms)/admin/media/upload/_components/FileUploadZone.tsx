'use client';
import {useDropzone} from "react-dropzone";
import {useState, useCallback} from "react";
import Form from "next/form";
import Icon from "@/components/Icon";

export default function FileUploadZone() {
    const [loading, setLoading] = useState(false);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length === 0 || loading) return;
        setLoading(true);
        const formData = new FormData();
        acceptedFiles.forEach((file) => {
            formData.append('files', file);
        });
        try {
            // Simulate upload
            setTimeout(() => {
                console.log('Files uploaded:', acceptedFiles)
                setLoading(false)
            }, 2000)
        } catch {
            // TODO: show error toast
            setLoading(false)
        }
    }, [loading])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/png' : ['.png'],
            'image/jpeg' : ['.jpeg', '.jpg'],
            'image/gif' : ['.gif'],
        },
        noClick: loading,
        noDrag: loading,
    })

    return (
            <div
                {...getRootProps()}
                className={`w-full flex flex-col items-center justify-center border-2 border-dashed rounded-2xl bg-white p-6 
        transition text-center h-full
        ${
                    loading
                        ? 'opacity-60 cursor-not-allowed'
                        : 'cursor-pointer hover:border-gray-400'
                }
        ${
                    isDragActive && !loading
                        ? 'border-gray-400 bg-gray-50'
                        : 'border-gray-300'
                }`}
            >
                <input {...getInputProps()} disabled={loading}/>

                {loading ? (
                    <>
                        <Icon name={'loading'} size={32} className="w-8 h-8 mb-3 text-gray-500 animate-spin"/>
                        <p className="text-gray-700">Uploading...</p>
                    </>
                ) : (
                    <>
                        <Icon name={'upload'} size={48} className="w-12 h-12 mb-3 text-gray-500"/>
                        <p className="text-lg font-medium text-gray-700">
                            {isDragActive ? 'Drop files here' : 'Drag files here to upload'}
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                            Supports .png, .jpg, .jpeg, .gif & bulk upload
                        </p>
                    </>
                )}
            </div>
    )
}