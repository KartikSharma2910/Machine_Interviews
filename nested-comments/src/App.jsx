import NestedComments from "./components/nested-comments";
import commentsData from "./data/comment.json";

const App = () => {
  return (
    <NestedComments
      comments={commentsData}
      onSubmit={() => {}}
      onEdit={() => {}}
      onDelete={() => {}}
      onUpvote={() => {}}
      onDownvote={() => {}}
    />
  );
};

export default App;
