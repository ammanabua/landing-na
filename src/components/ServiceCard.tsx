import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";


type ServiceCardProps = {
    image: string;
    title: string;
    description: string;
}


const ServiceCard = ({ 
  image, 
  title, 
  description,
}: ServiceCardProps) => {
  return (
    <Card className="w-full">
      {/* Image Section */}
      <div className="h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <CardHeader>
        <h3 className="text-xl font-semibold text-gray-800">
          {title}
        </h3>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600">
          {description}
        </p>
      </CardContent>

      <CardFooter className="flex justify-end gap-2">
        <Button 
          variant="outline" 
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;