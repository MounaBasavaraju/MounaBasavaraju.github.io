import React from 'react'
import {TbSquareKey,TbHexagonLetterO,TbUserSquareRounded} from 'react-icons/tb'
import {MdOutlineLiveHelp} from 'react-icons/md'
import {AiFillCodeSandboxSquare} from 'react-icons/ai'
import {BsCashCoin} from 'react-icons/bs'
import {LuBadgePercent} from 'react-icons/lu'
function Sidebar() {
    return (
        <aside id='sidebar'>
          <div className='sidebar-title'>
             <div className='sidebar-brand'>
<TbHexagonLetterO className='icon' />Dashboard
             </div>
          </div>
<ul className='sidebar-list'>
    <li className='sidebar-list-item'>
        <a href="">
            <TbSquareKey className='icon'/>Dashboard
        </a>
    </li>
    <li className='sidebar-list-item'>
        <a href="">
            <AiFillCodeSandboxSquare className='icon'/>Product
        </a>
    </li>
    <li className='sidebar-list-item'>
        <a href="">
            <TbUserSquareRounded className='icon'/>Customers
        </a>
    </li>
    <li className='sidebar-list-item'>
        <a href="">
            <BsCashCoin className='icon'/>Income
        </a>
    </li>
    <li className='sidebar-list-item'>
        <a href="">
            <LuBadgePercent className='icon'/>Promote
        </a>
    </li>
    <li className='sidebar-list-item'>
        <a href="">
            <MdOutlineLiveHelp className='icon'/>Help
        </a>
    </li>
</ul>

        </aside>
    )
}

export default Sidebar