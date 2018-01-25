const GetAllForums = () => (
  fetch('http://forums.craigslist.org')
    .then( response => response.text() )
    .then( text => {
      const forumListColumns = text.indexOf('forumlistcolumns');
      const forumStats       = text.indexOf('forumstats');
      const miniPayload      = text.slice( forumListColumns, forumStats );
      const payloadArrayed   = miniPayload.split('<');

      const forums = [];

      payloadArrayed.forEach( (el, index) => {
        if ( el.includes('href="') ) {
          let [ link, title ] = convertIntoValues( el );

          if ( payloadArrayed[index + 1].includes('threadcount') ) {
            forums.push({
              'link'  : link,
              'title' : title,
              'count' : convertIntoInt( payloadArrayed[index + 1] ),
            });
          } else {
            forums.push({
              'link' : link,
              'title': title,
            });
          }
        }
      });

      return forums;
    })
);

const convertIntoValues = forumString => {
  let target   = forumString.indexOf('target');
  let linkHref = forumString.slice( 8, target - 2 );
  let title    = forumString.slice( target + 14, -1 );

  return [ linkHref, title ];
};

const convertIntoInt = forumString => {
  let upToNumber = forumString.indexOf('>');
  let number = forumString.slice( upToNumber + 1 );

  return parseInt( number );
};

export default GetAllForums;