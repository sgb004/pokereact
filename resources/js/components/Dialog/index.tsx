import { forwardRef } from "react";

export type DialogProps = {
    message: string;
    acceptButtonText?: string;
    cancelButtonText?: string;
    onAccept: () => void;
    onCancel?: () => void;
};

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
    (
        {
            message,
            acceptButtonText = "Yes",
            cancelButtonText = "No",
            onAccept,
            onCancel,
        },
        ref
    ) => {
        return (
            <dialog
                ref={ref}
                className="absolute top-0 left-0 w-full h-full animate-backdrop-grey-scale z-20"
            >
                <div className="w-full h-full flex items-center justify-center p-[15px]">
                    <form
                        method="dialog"
                        className="bg-white min-w-[200px] p-[15px] rounded-[5px] animate-in"
                    >
                        <p className="leading-[1.3] mb-[10px]">{message}</p>
                        <div className="flex justify-center gap-[10px]">
                            <button className="dialog-btn" onClick={onCancel}>
                                {cancelButtonText}
                            </button>
                            <button className="dialog-btn" onClick={onAccept}>
                                {acceptButtonText}
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        );
    }
);

export default Dialog;