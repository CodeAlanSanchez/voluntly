import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-transparent bg-pastel-gradient bg-cover">

            <div className="w-full border-gray-300 border-[1px] sm:max-w-md shadow-md p-6 bg-white overflow-hidden">
                { children }
            </div>
        </div>
    );
}
