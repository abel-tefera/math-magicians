import React, { useEffect, useState } from 'react';
import { QUOTES_API, API_KEY } from '../constants';

const Quotes = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const getQuote = async () => {
      try {
        const response = await fetch(`${QUOTES_API}`, {
          headers: {
            'X-Api-Key': API_KEY,
          },
        });

        const quote = (await response.json())[0];
        setQuote(quote);
      } catch (error) {
        console.error(error);
      }
    };

    getQuote();
  }, [setQuote]);

  return (
    <div className="w-40">
      <p className="text-4xl">{quote && quote.author}</p>
      <p className="text-xl">{quote && quote.category}</p>
      <p className="text-lg italic font-medium">{quote && quote.quote}</p>
    </div>
  );
};

export default Quotes;
