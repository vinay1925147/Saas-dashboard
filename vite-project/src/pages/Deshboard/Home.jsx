import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import Table from './Table';


function Home() {
 
  const contracts = [
    {
      id: "c1",
      name: "MSA 2025",
      parties: "Microsoft & ABC Corp",
      expiry: "2025-12-31",
      status: "Active",
      risk: "Medium",
    },
    {
      id: "c2",
      name: "SLA 2026",
      parties: "Google & XYZ Ltd",
      expiry: "2026-06-30",
      status: "Pending",
      risk: "High",
    },
  
  ];

   const riskCounts = contracts.reduce((acc, contract) => {
    acc[contract.risk] = (acc[contract.risk] || 0) + 1;
    return acc;
  }, {});

  // Convert into chart data
  const chartData = Object.keys(riskCounts).map((risk) => ({
    risk,
    count: riskCounts[risk],
  }));
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h2 className='font-bold text-2xl'>Deshboard</h2>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

    <Table></Table>
  
    </main>
  )
}

export default Home