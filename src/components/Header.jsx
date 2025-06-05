import React from 'react';

export default function Header() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#ededed] px-4 py-3 sm:px-6 md:px-10">
            <div className="flex items-center gap-4 text-[#141414]">
                <div className="size-4">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_6_330)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                                fill="currentColor"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white"></rect></clipPath>
                        </defs>
                    </svg>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Alex's Portfolio</h2>
            </div>
            <div className="flex flex-1 justify-end gap-4 sm:gap-8">
                <div className="flex items-center gap-4 sm:gap-9">
                    <a className="text-[#141414] text-sm font-medium leading-normal" href="#">About</a>
                    <a className="text-[#141414] text-sm font-medium leading-normal" href="#">CV</a>
                    <a className="text-[#141414] text-sm font-medium leading-normal" href="#">Projects</a>
                    <a className="text-[#141414] text-sm font-medium leading-normal" href="#">Contact</a>
                </div>
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 sm:size-10"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuB8tgR6tXr4nVc4CDNU1ZCkiJQ9ExLkjhKsHsy8Bkd-_ET_EGGGAiMFTZXUeRc_jLtwbMp5_qI0olqc3a3z8FHYCd5ruPBuRu5t-GjiWx6yKuAlI1kk2ciOVhwnIEepm-8mY4-N-cdwu6xAOCKPwJZtz0OJSoFYSgVsFMkbGn0rAcS3vCX1R6L-Dyl1h5YcicAiTEarHPwyDTLBUwlZbKM3DEfcWHZxeL5eVxDcKnXSeqssHPPFg7dwWk5-lAYju0Bd-WITJ-FQ")' }}
                ></div>
            </div>
        </header>
    );
}