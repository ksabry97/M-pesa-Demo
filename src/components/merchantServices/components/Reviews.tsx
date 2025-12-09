import { Star } from 'lucide-react';
import { useState } from 'react';

interface Review {
  id: number;
  author: string;
  date: string;
  verified: boolean;
  rating: number;
  comment: string;
  avatar: string;
}

function Reviews() {
  const [expandedReviews, setExpandedReviews] = useState<number[]>([]);

  const reviews: Review[] = [
    {
      id: 1,
      author: 'KamauKenyatta',
      date: '22 Jul',
      verified: true,
      rating: 5,
      comment: 'Kenyan Delights exceeded expectations! 🌟🌟🌟🌟🌟 From setup to service, everything was impeccable. The nyama choma was perfectly grilled, and the variety of sides pleased everyone. Our guests raved about the authentic flavors. The team was professional, friendly, and ensured a seamless catering experience. Highly recommend for any event! Asante sana, Kenyan Delights!',
      avatar: 'K'
    },
    {
      id: 2,
      author: 'Zawadi Kaluki',
      date: '22 Nov',
      verified: true,
      rating: 5,
      comment: 'Kenyan Delights exceeded expectations! 🌟🌟🌟🌟🌟 From setup to service, everything was impeccable. The nyama choma was perfectly grilled, and the variety of sides pleased everyone. Our guests raved about the authentic flavors. The team was professional, friendly, and ensured a seamless catering experience. Highly recommend for any event! Asante sana, Kenyan Delights!',
      avatar: 'Z'
    },
    {
      id: 3,
      author: 'Baraka Juma',
      date: '13 Apr',
      verified: true,
      rating: 5,
      comment: 'Kenyan Delights exceeded expectations! 🌟🌟🌟🌟🌟 From setup to service, everything was impeccable. The nyama choma was perfectly grilled, and the variety of sides pleased everyone. Our guests raved about the authentic flavors. The team was professional, friendly, and ensured a seamless catering experience. Highly recommend for any event! Asante sana, Kenyan Delights!',
      avatar: 'B'
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedReviews(prev =>
      prev.includes(id) ? prev.filter(reviewId => reviewId !== id) : [...prev, id]
    );
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Customer Reviews</h3>
        <button className="text-sm font-medium text-accent-darker2 hover:text-accent-darker">
          View All
        </button>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => {
          const isExpanded = expandedReviews.includes(review.id);
          const displayComment = isExpanded ? review.comment : truncateText(review.comment, 200);

          return (
            <div key={review.id} className=" pb-10 last:pb-4">
              {/* Review Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-700">{review.avatar}</span>
                  </div>

                  {/* Author Info */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">{review.author}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-500">{review.date}</span>
                      {review.verified && (
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? 'fill-orange-400 text-orange-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Review Content */}
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                {displayComment}
              </p>

              {/* Read More Button */}
              {review.comment.length > 200 && (
                <button
                  onClick={() => toggleExpand(review.id)}
                  className="text-sm font-medium text-accent-darker2 hover:text-accent-darker"
                >
                  {isExpanded ? 'Read less' : 'Read more'}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;
