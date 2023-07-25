import { toast } from "react-toastify"

const toasterConfig = {
   position: "top-right",
   autoClose: 5000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: "light",
}

export const successToast = (message) => {
   toast.success(message, toasterConfig);
}

export const errorToast = (message) => {
   toast.error(message, toasterConfig);
}

export const warningToast = (message) => {
   toast.warning(message, toasterConfig);
}