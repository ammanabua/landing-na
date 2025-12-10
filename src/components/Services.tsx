import React from 'react'
import ServiceCard from './ServiceCard'

const services = [
    {
        image: "/one_one.jpg", 
        title: "Speaking", 
        description: "This is a sample description for the card. Replace this with your actual content."
    },
    {
        image: "/group.jpg", 
        title: "Coaching", 
        description: "This is a sample description for the card. Replace this with your actual content."
    },
    {
        image: "/dei.jpg", 
        title: "Consultation", 
        description: "This is a sample description for the card. Replace this with your actual content."
    },
]

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-[#CCE0FF] px-4 py-16'>
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