import React from 'react'
import {AiOutlineDollar} from 'react-icons/ai'
import {FcKindle} from 'react-icons/fc'
import {BsCashCoin} from 'react-icons/bs'
import {PiLockDuotone} from 'react-icons/pi'
import { BarChart,Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,PieChart, Pie, Sector, } from 'recharts';
function Home() {
    const data = [ 
        {
          name: 'Jan',
          uv: 2000,
          pv: 2000,
          amt: 2400,
        },
        {
          name: 'Feb',
          uv: 1100,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          uv: 2800,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          uv: 2100,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 2500,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          uv: 800,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Jul',
          uv: 2500,
          pv: 4300,
          amt: 2100,
        },
        {
            name: 'Aug',
            uv: 2800,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Sep',
            uv: 2600,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Oct',
            uv: 2100,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Nov',
            uv: 1800,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Dec',
            uv: 2100,
            pv: 4300,
            amt: 2100,
          },
      ];

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>Hello Shahrukh</h3>
            </div>
            <div className='main-cards'>
                <div className='card'>
            <div className='card-inner '>
                <h3>Earning</h3>
                <AiOutlineDollar className='card-icon'/>
            </div>
            <h1>$198k</h1>
            <h2>37.8% this month</h2>
            </div>
            <div className='card'>
            <div className='card-inner '>
                <h3>Orders</h3>
                <FcKindle className='card-icon'/>
            </div>
            <h1>$2.4k</h1>
            <h2>2% this month</h2>
            </div>
            <div className='card'>
            <div className='card-inner '>
                <h3>Balance</h3>
                <BsCashCoin className='card-icon'/>
            </div>
            <h1>$2.4k</h1>
            <h2>2% this month</h2>
            </div>
            <div className='card'>
            <div className='card-inner '>
                <h3>Total Balances</h3>
                <PiLockDuotone className='card-icon'/>
            </div>
            <h1>$89k</h1>
            <h2>11% this month </h2>
            </div>
          
       </div>
       <div className='charts'> 
       <h1>overview</h1>
       <h3></h3>
       <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="#d5c6da" />
          <XAxis dataKey="name" />
             </BarChart>
             </ResponsiveContainer>
        
       </div>
       
      
         
        </main>
    )
}

export default Home