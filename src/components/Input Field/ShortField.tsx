import React from "react"

type ShortFieldProps = {
    label?: string
    hideLabel?: boolean
    helper?: string
    error?: string
    className?: string
    charLimit?: number
} & React.InputHTMLAttributes<HTMLInputElement>

export default function ShortField({
                                       label,
                                       hideLabel,
                                       helper,
                                       error,
                                       className,
                                       charLimit,
                                       ...props
                                   }: ShortFieldProps) {
    return (
        <div {...props} className="flex flex-col font-plus-jakarta-sans">
            {!hideLabel && label && (
                <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
            )}
            <input
                maxLength={charLimit}
                className={`border rounded-[10px] focus:border-[#ffffff] border-line-color transition ${
                    props.disabled
                        ? "bg-disabled-color text-gray-500 cursor-not-allowed"
                        : "bg-transparent"
                } ${className || ""}`}
            />
            {helper && <span className="text-xs text-gray-500 mt-1">{helper}</span>}
            {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
        </div>
    )
}
