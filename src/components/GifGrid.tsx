import { useState } from 'react';
import Button from './ui/button';
import './GifGrid.css';

interface GifData {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
      width: string;
      height: string;
    };
    original: {
      url: string;
      width: string;
      height: string;
    };
  };
  url: string;
}

interface GifGridProps {
  gifs: GifData[];
  isLoading: boolean;
}

export const GifGrid = ({ gifs, isLoading }: GifGridProps) => {
  const [copiedGifId, setCopiedGifId] = useState<string | null>(null);

  const copyToClipboard = (url: string, gifId: string) => {
    console.log('Firing');
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopiedGifId(gifId);
        setTimeout(() => {
          setCopiedGifId(null);
        }, 2000);
      })
      .catch((err) => {
        console.log('Failed to copy:', err);
      });
  };

  const openGiphyPage = (url: string) => {
    window.open(url, '_blank');
  };

  if (isLoading) {
    return (
      <div className="gif-grid-loading">
        <p className="gif-grid-loading-text">Loading...</p>
      </div>
    );
  }

  if (gifs.length === 0) {
    return (
      <div className="gif-grid-empty">
        <div className="gif-grid-empty-icon">🎭</div>
        <h3 className="gif-grid-empty-title">Sorry, nothing yet</h3>
        <p>Try searching something</p>
      </div>
    );
  }

  return (
    <>
      <div className="gif-grid-container">
        {gifs.map((gif) => (
          <div
            key={gif.id}
            className="gif-item"
            onClick={(e) => {
              e.stopPropagation();
              openGiphyPage(gif.url);
            }}
          >
            <div className="gif-image-container">
              <img
                src={gif.images.fixed_height.url}
                alt={gif.title}
                className="gif-image"
                loading="lazy"
              />
              <div className="gif-overlay">
                <div className="gif-actions">
                  <Button
                    //size="sm"
                    //variant="secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(gif.images.original.url, gif.id);
                    }}
                    type="button"
                    className="gif-action-button"
                  >
                    {copiedGifId === gif.id ? 'Copied!' : 'Copy'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
