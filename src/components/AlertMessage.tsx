import Alert, { AlertColor, AlertProps } from '@mui/material/Alert'
import { ReactNode } from 'react'

interface IAlertMessage extends AlertProps {
  severity: AlertColor
  children: ReactNode
}
export function AlertMessage({ children, ...rest }: IAlertMessage) {
  return (
    <Alert variant="filled" {...rest}>
      {children}
    </Alert>
  )
}
