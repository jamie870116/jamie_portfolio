'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { FiMenu, FiX } from "react-icons/fi";
import { ReactTyped } from "react-typed";

const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'My CV', href: '#cv' },
    { name: 'Projects', href: '#projects' },
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-base-100 text-base-content">
            <header className="fixed inset-x-0 top-0 z-50 bg-base-100/70 backdrop-blur-md shadow-md">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Jamie's Portfolio</span>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-base-content"
                        >
                            <span className="sr-only">Open main menu</span>
                            <FiMenu aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-semibold text-base-content relative after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </nav>

                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-base-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-base-content/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Jamie's Portfolio</span>
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-base-content"
                            >
                                <span className="sr-only">Close menu</span>
                                <FiX aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-base-content/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-base-content hover:bg-base-200"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
                    />
                </div>

                <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
                        <div className="text-left px-4 sm:px-6">
                            <h1 className="text-4xl font-bold tracking-tight text-base-content sm:text-6xl">
                                <ReactTyped
                                    strings={["Hi There!<br/>This is Jamie."]}
                                    typeSpeed={50}
                                    backSpeed={30}
                                    showCursor={false}
                                    smartBackspace={false}
                                    backDelay={1000}
                                />
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-neutral">
                                I code.<br />
                                Software Engineer & Machine Learning Engineer | Seeking New Grad Opportunities | <br /> Computer Science Graduate Student
                            </p>
                        </div>
                        <div className="flex justify-center px-4 sm:px-6">
                            <img
                                src='/assets/myphoto.jpeg'
                                alt="Jamie"
                                className="rounded-lg aspect-square w-full max-w-[300px] object-cover shadow-lg transition-transform duration-300 hover:scale-105 hover:brightness-110"
                            />
                        </div>
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
                    />
                </div>
            </div>
        </div>
    )
}
