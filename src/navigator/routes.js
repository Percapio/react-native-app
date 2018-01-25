import IndexContainer from '../containers/index_container';
import ForumContainer from '../containers/forum_container';
import ThreadContainer from '../containers/thread_container';

const Routes = {
  Index:  { screen: IndexContainer },
  Forum:  { screen: ForumContainer },
  Thread: { screen: ThreadContainer },
};

export default Routes;