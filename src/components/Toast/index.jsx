import { toast } from 'react-toastify'


export function SuccessToast() {
  toast.success(
    <div className="success-toast-container">
      Logged In successfully
    </div>,
    {
      className: 'success-toast',
      toastId: 'success-toast',
    }
  )
}

export function FailedToast() {
  toast.error(
    <div className="error-toast-container">
      Username or password is incorrect
    </div>,
    {
      className: 'error-toast',
      toastId: 'error-toast',
    }
  )
}
