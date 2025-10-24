'use client'
import React from "react"

type ShortFieldProps = {
    label?: string
    hideLabel?: boolean
    helper?: string
    error?: string
    className?: string
    charLimit?: number
    onValueChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
} & React.InputHTMLAttributes<HTMLInputElement>

export default function ShortField({
                                       label,
                                       hideLabel,
                                       helper,
                                       error,
                                       className,
                                       charLimit,
                                       onValueChange,
                                       ...props
                                   }: ShortFieldProps) {
    return (
        <div {...props} className="flex flex-col font-plus-jakarta-sans w-full">
            {!hideLabel && label && (
                <label className="mb-1 text-[16px] text-black">{label}</label>
            )}
            <input
                maxLength={charLimit}
                onChange={onValueChange}
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
