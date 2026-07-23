import React, { useState } from 'react';
import { Star, CheckCircle, ThumbsUp, MessageSquare, ExternalLink, Filter } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const GoogleReviewWidget: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReviewText, setNewReviewText] = useState('');
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [submittedReview, setSubmittedReview] = useState(false);

  const filteredReviews = filterCategory === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.projectType.toLowerCase().includes(filterCategory.toLowerCase()));

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedReview(true);
  };

  return (
    <div className="bg-[#1C2541] border border-white/10 p-6 sm:p-8 shadow-2xl">
      
      {/* Header with Google Badge */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-6">
        <div className="flex items-center gap-4">
          
          {/* Google G Logo Badge */}
          <div className="w-14 h-14 bg-white p-2.5 flex items-center justify-center shadow-lg shrink-0 border border-white/20">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-white font-mono">4.9</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">(148 Verified Google Reviews)</span>
            </div>
            <h3 className="text-lg font-black text-white uppercase tracking-tight mt-0.5">
              Haulm Transport Customer Feedback
            </h3>
            <p className="text-xs text-gray-400">
              Verified ratings from Nova Scotia contractors, municipalities, and site managers.
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowReviewModal(true)}
          className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-black uppercase tracking-widest transition-colors flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4 text-[#10B981]" />
          Write a Google Review
        </button>
      </div>

      {/* Filter Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-xs text-gray-400 font-black uppercase tracking-widest flex items-center gap-1 mr-2">
          <Filter className="w-3.5 h-3.5 text-[#10B981]" />
          Filter:
        </span>
        {[
          { id: 'all', label: 'All Reviews' },
          { id: 'highway', label: 'Highway Infrastructure' },
          { id: 'excavation', label: 'Pit Excavation' },
          { id: 'landscaping', label: 'Commercial Landscaping' },
          { id: 'paving', label: 'Asphalt Paving' },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilterCategory(f.id)}
            className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-colors ${
              filterCategory === f.id
                ? 'bg-[#10B981] text-black font-bold'
                : 'bg-[#070D1F] text-gray-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Testimonials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-[#070D1F] border border-white/10 p-5 space-y-3 relative hover:border-[#10B981]/40 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-black text-white text-sm uppercase tracking-wider">{rev.author}</h4>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-0.5 text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 border border-emerald-500/20 font-bold uppercase">
                      <CheckCircle className="w-2.5 h-2.5" />
                      Verified Contractor
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400">{rev.role} • <span className="text-[#10B981] font-bold">{rev.company}</span> ({rev.location})</p>
              </div>

              <div className="flex text-amber-400 shrink-0">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic">
              "{rev.text}"
            </p>

            <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[11px] text-gray-400 font-bold uppercase">
              <span className="font-mono bg-[#1C2541] px-2 py-0.5 border border-white/10 text-gray-300">
                Project: {rev.projectType}
              </span>
              <span>{rev.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Write Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B132B]/90 backdrop-blur-sm">
          <div className="bg-[#1C2541] border border-white/10 max-w-md w-full p-6 relative text-white shadow-2xl">
            <button
              onClick={() => {
                setShowReviewModal(false);
                setSubmittedReview(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            {!submittedReview ? (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Leave a Google Review</h3>
                <p className="text-xs text-gray-400">Share your hauling experience with the Haulm Transport team.</p>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">Star Rating</label>
                  <div className="flex gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setNewRating(s)}
                        className="p-1 focus:outline-none"
                      >
                        <Star className={`w-6 h-6 ${s <= newRating ? 'fill-amber-400' : 'text-gray-600'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">Your Name & Company</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Sarah Connor - Steelworks Construction"
                    value={newReviewAuthor}
                    onChange={(e) => setNewReviewAuthor(e.target.value)}
                    className="w-full bg-[#070D1F] border border-white/10 p-2.5 text-sm text-white focus:outline-none focus:border-[#10B981]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">Review Comments</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about the dump truck delivery, drivers, and dispatch service..."
                    value={newReviewText}
                    onChange={(e) => setNewReviewText(e.target.value)}
                    className="w-full bg-[#070D1F] border border-white/10 p-2.5 text-sm text-white focus:outline-none focus:border-[#10B981]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#10B981] text-black font-black text-xs uppercase tracking-widest hover:bg-[#059669] transition-colors shadow-lg shadow-[#10B981]/20"
                >
                  Submit Google Review
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3">
                <CheckCircle className="w-12 h-12 text-[#10B981] mx-auto" />
                <h4 className="text-lg font-black text-white uppercase">Thank You for Your Feedback!</h4>
                <p className="text-xs text-gray-300">Your review has been submitted to Haulm Transport Google Business profile.</p>
                <button
                  onClick={() => {
                    setShowReviewModal(false);
                    setSubmittedReview(false);
                  }}
                  className="px-4 py-2 bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/20"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
