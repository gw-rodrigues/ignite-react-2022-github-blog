import { InputHTMLAttributes } from 'react'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder: string
  type: string
}

export function Input({ ...rest }: IInputProps) {
  return (
    <input
      className="w-full px-3 py-4 bg-base-input border border-base-border rounded-md text-base-text placeholder:text-base-label"
      {...rest}
    />
  )
}
