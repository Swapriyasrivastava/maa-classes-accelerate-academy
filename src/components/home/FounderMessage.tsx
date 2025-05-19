
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Play, Pause, X } from 'lucide-react';

const FounderMessage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFullVideo, setShowFullVideo] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Toggle video play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Open full video dialog
  const openFullVideo = () => {
    setShowFullVideo(true);
  };

  // Close full video dialog
  const closeFullVideo = () => {
    setShowFullVideo(false);
    // Pause the video when closing
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Founder's Message</h2>
        
        <div className="max-w-4xl mx-auto mt-8">
          <div 
            className="relative rounded-lg overflow-hidden shadow-xl cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
            onClick={openFullVideo}
          >
            {/* Thumbnail with play button - Replace src with your video thumbnail */}
            <div className="relative">
              <img 
                src="/lovable-uploads/2b249ce4-7d8f-4896-a413-c77d555bc891.png" 
                alt="Founder's Message" 
                className="w-full h-auto object-cover rounded-lg"
                style={{ height: '450px', objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <Button 
                  className="rounded-full h-16 w-16 bg-maa-blue hover:bg-maa-blue hover:scale-110 transition-transform"
                  onClick={(e) => {
                    e.stopPropagation();
                    openFullVideo();
                  }}
                >
                  <Play size={32} fill="white" />
                </Button>
              </div>
            </div>
            
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold text-maa-dark">Message from Our Founder</h3>
              <p className="text-gray-600 mt-2">
                Click to watch the inspiring message from our founder about our mission and vision.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full-screen video dialog */}
      <Dialog open={showFullVideo} onOpenChange={setShowFullVideo}>
        <DialogContent className="max-w-4xl p-0 border-none bg-transparent">
          <div className="relative rounded-lg overflow-hidden">
            <div className="aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                {/* Replace with your actual video file */}
                <source src="https://example.com/founder-message.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <Button
              className="absolute top-3 right-3 rounded-full h-10 w-10 bg-black bg-opacity-50 hover:bg-opacity-70 p-0"
              onClick={closeFullVideo}
            >
              <X size={20} />
            </Button>
            
            <Button
              className="absolute bottom-3 right-3 rounded-full h-12 w-12 bg-maa-blue hover:bg-blue-700"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FounderMessage;
