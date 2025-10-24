import React from "react"

type LongFieldProps = {
    label?: string
    hideLabel?: boolean
    helper?: string
    error?: string
    className?: string
    charLimit?: number
    onValueChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export default function LongField({
                                      label,
                                      hideLabel,
                                      helper,
                                      error,
                                      className,
                                      charLimit,
                                      onValueChange,
                                      ...props
                                  }: LongFieldProps) {
    return (
        <div className="flex flex-col w-full font-plus-jakarta-sans">
            {!hideLabel && label && (
                <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
            )}
            <textarea
                {...props}
                maxLength={charLimit}
                onChange={onValueChange}
                className={`border rounded-[10px] focus:border-[#ffffff] border-line-color resize-none transition ${
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
