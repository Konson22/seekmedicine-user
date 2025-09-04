import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import Button from './Button';

const ProductCard = ({ 
  title, 
  description, 
  features, 
  image, 
  link, 
  badge = null,
  rating = null 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
             {/* Image Section */}
       <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center overflow-hidden">
         {badge && (
           <div className="absolute top-4 left-4 z-10">
             <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
               {badge}
             </span>
           </div>
         )}
         {image ? (
           <img 
             src={image} 
             alt={title} 
             className="w-full h-full object-cover"
           />
         ) : (
           <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
             <span className="text-white font-bold text-2xl">SM</span>
           </div>
         )}
       </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          {rating && (
            <div className="flex items-center space-x-1">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{rating}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

                 {/* Features List */}
         {features && features.length > 0 && (
           <ul className="space-y-2 mb-6">
             {features.slice(0, 3).map((feature, index) => (
               <li key={index} className="flex items-center text-sm text-gray-600">
                 <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                 {feature}
               </li>
             ))}
           </ul>
         )}

        {/* Action Button */}
        <div className="flex items-center justify-between">
          <Button 
            variant="outline" 
            size="sm" 
            className="group"
            as={Link}
            to={link}
          >
            Learn More
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
