import FileUploadZone from "@/app/(cms)/admin/media/upload/_components/FileUploadZone";
import SelectMediaDialog from "@/app/(cms)/admin/media/upload/_components/SelectMediaDialog";

export default function MediaUploadPage() {
    return (
        <main className={'flex flex-col gap-6 h-full'}>
            <h1 className={'font-prata text-3xl'}>Upload Media</h1>
            <FileUploadZone/>
        </main>
    )
}