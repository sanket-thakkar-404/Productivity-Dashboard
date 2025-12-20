import { useEffect, useState } from "react";
import MotivationalQuotes from "../../Components/Motivational/MotivationalQuotes";

const Motivational = () => {
  const [image, setImage] = useState(null);
  const [quote, setQuote] = useState(null);

  const [imageLoading, setImageLoading] = useState(false);
  const [quoteLoading, setQuoteLoading] = useState(false);

  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    fetchQuote();
    fetchImage();
  }, [refreshKey]);

  // ---------------- QUOTE ----------------
  async function fetchQuote() {
    try {
      setQuoteLoading(true);

      const res = await fetch(
        "https://api.quotable.io/quotes/random?minLength=100&maxLength=150"
      );
      if (!res.ok) throw new Error("Quote fetch failed");

      const data = await res.json();
      setQuote(data[0]);
    } catch (err) {
      console.error("Quote API Error:", err.message);
      setQuote(null);
    } finally {
      setQuoteLoading(false);
    }
  }

  // ---------------- IMAGE ----------------
  async function fetchImage() {
    try {
      setImageLoading(true);

      const page = Math.floor(Math.random() * 40) + 1;
      const query = encodeURIComponent(
        "black and white portrait white background"
      );

      const res = await fetch(
        `https://api.pexels.com/v1/search?query=${query}&per_page=1&page=${page}`,
        {
          headers: {
            Authorization: import.meta.env.VITE_PIXELS_KEY,
          },
        }
      );

      if (!res.ok) throw new Error("Image fetch failed");

      const data = await res.json();
      setImage(data.photos[0] || null);
    } catch (err) {
      console.error("Image API Error:", err.message);
      setImage(null);
    } finally {
      setImageLoading(false);
    }
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl">
      {/* BACKGROUND IMAGE */}
      {imageLoading ? (
        <div className="flex h-full items-center justify-center bg-black">
          <p className="text-2xl text-gray-400 animate-pulse">
            Loading image…
          </p>
        </div>
      ) : (
        image && (
          <img
            src={image.src.original}
            alt={image.alt}
            className="absolute inset-0 w-full h-full object-cover brightness-50 contrast-75"
          />
        )
      )}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* HEADER */}
      <h2 className="absolute top-20 w-full text-center text-6xl font-semibold text-white z-20 tracking-wide">
        Quote of the Day
      </h2>

      {/* QUOTE CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center z-30 px-6">
        {quoteLoading ? (
          <p className="text-xl text-gray-300 animate-pulse">
            Loading quote…
          </p>
        ) : (
          quote && (
            <MotivationalQuotes
              text={quote.content}
              author={quote.author}
            />
          )
        )}
      </div>

      {/* BUTTON */}
      <button
        onClick={() => setRefreshKey((prev) => prev + 1)}
        className="absolute bottom-40 right-130 z-30
                   rounded-xl bg-black px-8 py-3
                   text-4xl text-white hover:bg-gray-800 transition"
      >
        New Motivation
      </button>
    </div>
  );
};

export default Motivational;