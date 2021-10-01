import classNames from 'classnames';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react'

type ToggleProps = {
    open?: boolean,
    onClose?: () => void,
    [k: string]: any
}

const Modal = function ({ 
    open = false,
    onClose = () => null,
    ...props
}: ToggleProps, context) {
    console.log(open);
    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog
                open={open}
                as="div"
                onClose={onClose}
            >
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay 
                                className="fixed inset-0 bg-gray-900 bg-opacity-50  backdrop-filter backdrop-blur-sm"
                            />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        > 
                            &#8203;
                        </span>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div
                                className="inline-block w-full max-w-full p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl  md:max-w-xl lg:max-w-2xl rounded-xs"
                            >
                                {props.children}
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Modal;
