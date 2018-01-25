export const singleThread = (params) => {
  const url = 'http://forums.craigslist.org/?' + params;

  return (
    fetch(url)
      .then( response => response.text() )
      .then( text => {
        const threadNormal   = text.indexOf('normal');
        const threadContext  = text.indexOf('contextlink');
        const miniPayload    = text.slice(threadNormal, threadContext);

        const payloadArrayed = miniPayload.split('span');

        const thread = {
          'title' : grabTitle( payloadArrayed[1] ),
          'handle': grabHandle( payloadArrayed[4] ),
          'quote' : grabQuote( payloadArrayed[7] ),
        };

        return thread;
      })
  );
};

const grabTitle = threadString => {
  return threadString.slice(4, -6);
};

const grabHandle = threadString => {
  let startHandle = threadString.indexOf('handle hnd');
  let handleSlice = threadString.slice(startHandle + 12, -2);

  return handleSlice;
};

const grabQuote = threadString => {
  let startQuote = threadString.indexOf('quote');
  let quoteSlice = threadString.slice(startQuote + 7, -2);

  quoteSlice = cleanQuote( quoteSlice );
  return quoteSlice;
};

const cleanQuote = quote => {
  if (quote.includes('<br>')) {
    quote = quote.replace(/(<br>)/g, '');
  }

  return quote;
};