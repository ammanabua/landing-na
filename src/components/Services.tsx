import React from 'react'
import ServiceCard from './ServiceCard'

const services = [
    {
        image: "/api/placeholder/400/200", 
        title: "1:1 Coaching", 
        description: "This is a sample description for the card. Replace this with your actual content."
    },
    {
        image: "/api/placeholder/400/200", 
        title: "Group Coaching", 
        description: "This is a sample description for the card. Replace this with your actual content."
    },
    {
        image: "/api/placeholder/400/200", 
        title: "DEI Consultation", 
        description: "This is a sample description for the card. Replace this with your actual content."
    },
]

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-gray-100 px-4'>
        <h2 className='text-4xl font-bold text-center'>How I Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 mx-auto max-w-6xl">
                {services.map((service, index) => (
                    <ServiceCard key={index} image={service.image} title={service.title} description={service.description} />
                ))}
            </div>
    </div>
  )
}

export default Services