import React from 'react'
export default function Capabilities(){
 const items=[
  {t:'Autonomous Drones',d:'Reliable UAV platforms for advanced missions.'},
  {t:'Ground Control',d:'Military-grade cloud GCS systems.'},
  {t:'Telemetry',d:'Real-time MAVLink data handling.'},
 ]
 return (
  <section className="p-12 bg-gray-900">
    <h2 className="text-3xl font-bold text-orange-500 mb-6">Capabilities</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((x,i)=>(
        <div key={i} className="p-6 bg-black rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-white">{x.t}</h3>
          <p className="text-gray-400 mt-2">{x.d}</p>
        </div>
      ))}
    </div>
  </section>
 )}