import merge from 'lodash/merge';

export const allThreads = ( params ) => {
  const url = 'http://forums.craigslist.org/?act=DF&' + params.slice(1);

  return (
    fetch(url)
      .then( response => response.text() )
      .then( text => {
        const beginningOfThreads = text.indexOf('threads');
        const endofThreads       = text.indexOf('client-side-prefs');
        const slicedPayload      = text.slice( beginningOfThreads, endofThreads );
        const payloadArrayed     = slicedPayload.split('<article class=');

        const threads = [];

        payloadArrayed.forEach( (el, index) => {
          if (index != 0) {
            threads.push({
              'threadPos' : index,
              'threads'   : loopThroughPayload( el ),
            });
          }
        });

        return threads;
      })
  );
};

const grabHandle = threadString => {
  let startHandle = threadString.indexOf('handle hnd');
  let handleSlice = threadString.slice( startHandle + 12, -2 );

  return handleSlice;
};

const grabTitle = threadString => {
  let startTitle = threadString.indexOf('target');
  let title = threadString.slice( startTitle + 25, -11 );
  let href;

  if (title.includes( 'target' )) {
    startTitle = title.indexOf('target');
    href = grabLink( title, startTitle );
    title = title.slice( startTitle + 25 );
  } else {
    href = grabLink(threadString, startTitle);
  }

  title = cleanTitle( title );
  return [ title, href ]; 
};

const grabLink = (threadString, end) => {
  let startHref = threadString.indexOf('a href=');
  let hrefSlice = threadString.slice( startHref + 9, end - 2 );

  return hrefSlice;
};

const loopThroughPayload = payload => {
  const splitPayload = payload.split('span');
  let threads = {};

  splitPayload.forEach( (el, index) => {
    if ( el.includes('handle hnd') ) {
      threads[ index - 1 ] = 
        merge( {}, threads[ index - 1], { 'handle': grabHandle( el ) });
    } else if ( el.includes('a href') ) {
      let [ title, href ] = grabTitle( el );
      threads[ index ] = { 'title': title, 'href': href };
    }
  });

  return Object.values(threads);
};

const cleanTitle = title => {
  if (title.includes('&#167')) {
    title = title.slice(0, -7);
  }

  return title;
};