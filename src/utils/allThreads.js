const GetAllThreads = () => (
  fetch('http://forums.craigslist.org')
    .then( response => response.text() )
    .then( text => {
      const forumListColumns = text.indexOf('forumlistcolumns');
      const forumStats       = text.indexOf('forumstats');
      const miniPayload      = text.slice( forumListColumns, forumStats );
      const payloadArrayed   = miniPayload.split('<');

      const threads = [];

      payloadArrayed.forEach( (el, index) => {
        if ( el.includes('href="') ) {
          let [ link, title ] = convertIntoValues( el );

          if ( payloadArrayed[index + 1].includes('threadcount') ) {
            threads.push({
              'link'  : link,
              'title' : title,
              'count' : convertIntoInt( el ),
            });
          } else {
            threads.push({
              'link' : link,
              'title': title,
            });
          }
        }
      });

      return threads;
    })
);

export default GetAllThreads;

const convertIntoValues = ( threadString ) => {
  let target   = threadString.indexOf('target');
  let linkHref = threadString.slice( 8, target - 2 );
  let title    = threadString.slice( target + 14, -1 );

  return [ linkHref, title ];
};

const convertIntoInt = ( threadString ) => {
  let upToNumber = threadString.indexOf('>');
  let number = threadString.slice( upToNumber + 1 );

  return parseInt( number );
};
