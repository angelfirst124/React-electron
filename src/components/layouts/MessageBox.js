import React from 'react';

export default function MessageBox() {
    return (
        <div className="flex-none shadow-md" style={{width: '420px'}}>
            {/* Start Message box title */}
            <div className="h-13 w-full px-3 flex flex-col justify-end">
                <div className="text-lg text-gray-dark border-b-2 border-gray-normal pb-1">Mesajlar</div>
            </div>
            {/* End Message box title */}

            {/* Start message Tab */}
            <div className="px-3 mt-4">
                <div className="border-b-2 border-gray-normal px-1 flex justify-start text-base">
                    <div className="cursor-pointer flex-none border-b-2 px-2 border-gray-normal">Tüm Mesajlar</div>
                    <div className="cursor-pointer flex-none border-b-2 px-2 border-transparent">Okunmamışlar</div>
                </div>
            </div>
            {/* End message Tab */}
        </div>
    );
}