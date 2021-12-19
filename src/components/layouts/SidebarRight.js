import React from 'react';
import TooltipLeft from '../common/TooltipLeft';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMessageBox } from '../../store/commonSlice';

export default function SidebarRight() {
    const dispatch = useDispatch();
    const isMessageboxOpened = useSelector((state) => state.common.isMessageboxOpened);

    return(
        <div className={"w-13 border-l border-gray-normal flex flex-col items-center flex-none box-border bg-gray-lightest right-0 top-0 z-20 h-screen"}>
            <div className="flex-none w-full h-13 p-2 border-b border-gray-normal">
                <div className="rounded flex justify-center items-center text-center h-full w-full bg-gray-normal text-gray-darkest font-bold">
                    EG
                </div>
            </div>

            <TooltipLeft text="Mail" className={`w-full justify-center border-l-2 ${isMessageboxOpened ? 'border-blue-500' : ''}`}>
                <img alt="Mail" src={require('../../images/icons/c-mail.png')}
                    className="p-2 cursor-pointer"
                    onClick={() => dispatch(toggleMessageBox(!isMessageboxOpened))} />
            </TooltipLeft>

            <TooltipLeft text="Mail From" className={`w-full justify-center border-l-2`}>
                <img alt="Mail From" src={require('../../images/icons/c-mail-from.png')} className="p-2 cursor-pointer" />
            </TooltipLeft>

            <TooltipLeft text="Calendar" className={`w-full justify-center border-l-2`}>
                <img alt="Calendar" src={require('../../images/icons/c-calendar.png')} className="p-2 cursor-pointer" />
            </TooltipLeft>

            <TooltipLeft text="Phone" className={`w-full justify-center border-l-2`}>
                <img alt="Phone" src={require('../../images/icons/c-phone.png')} className="p-2 cursor-pointer" />
            </TooltipLeft>


            <hr className="w-full m-0 border-b border-t-0 border-gray-normal" />

            <TooltipLeft text="Calculator" className={`w-full justify-center border-l-2`}>
                <img alt="Calculator" src={require('../../images/icons/c-calculator.png')} className="p-2 cursor-pointer" />
            </TooltipLeft>


            <hr className="w-full m-0 border-b border-t-0 border-gray-normal" />

            <TooltipLeft text="Eye" className={`w-full justify-center border-l-2`}>
                <img alt="Eye" src={require('../../images/icons/c-eye.png')} className="p-2 cursor-pointer" />
            </TooltipLeft>

            <TooltipLeft text="Lock" className={`w-full justify-center border-l-2`}>
                <img alt="Lock" src={require('../../images/icons/c-lock.png')} className="p-2 cursor-pointer" />
            </TooltipLeft>

        </div>
    );
}