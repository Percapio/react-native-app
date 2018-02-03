const loginUser = credentials => 
  fetch('http://forums.craiglist.org/login')
    .then( response => response.text() )
    .catch( error => console.log( error ))
    .then( html => {
      let template = document.createElement('template');
      html = html.trim();
      template.innerHTML = html;
      console.log ( template );
      debugger;
      return template;
    });

export default loginUser;