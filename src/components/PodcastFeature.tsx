'use client'
import { Play, ExternalLink, Mic, Clock, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const podcastEpisodes = [
  {
    title: "Transforming Lives Through Mindful Leadership",
    show: "Chasing Light",
    date: "Jan 15, 2024",
    duration: "45 mins",
    description: "Join me as I discuss the intersection of mindfulness and leadership, sharing practical strategies for becoming a more conscious and effective leader.",
    imageUrl: "/api/placeholder/400/400",
    link: "#"
  }
];


const PodcastFeature = () => {

  return (
    <section className="flex flex-col w-full items-center justify-center py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Podcast Appearances</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Listen to in-depth conversations where I share insights about personal development, 
            leadership, and achieving breakthrough results.
          </p>
        </div>

        {/* Podcast Episodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {podcastEpisodes.map((episode, index) => (
            <div 
              key={index}
              className="bg-[#F6BB66] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="relative md:w-2/5">
                  <Image 
                    src={episode.imageUrl}
                    alt={episode.title}
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                      <Mic className="w-4 h-4" />
                      <span className="text-sm font-medium">{episode.show}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{episode.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{episode.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{episode.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{episode.duration}</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="flex items-center gap-2 text-sm"
                    variant="outline"
                    onClick={() => window.open(episode.link, '_blank')}
                  >
                    Listen to Episode
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Button 
            variant="default" 
            size="lg"
            className="inline-flex items-center gap-2"
            onClick={() => window.open('#', '_blank')}
          >
            View All Podcast Appearances
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PodcastFeature;