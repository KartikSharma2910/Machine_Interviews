import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { commentsData } from "../../constants";
import "./styles.css";

const Comment = ({ comment, replyingTo, onReplyClick, setData }) => {
  const [replyValue, setReplyValue] = useState("");
  const { id, name, comment: userComment, timestamp } = comment;

  const replyComment = (replyId) => {
    const newReply = {
      id: new Date().getTime(),
      name: "Kartik Sharma",
      comment: replyValue,
      timestamp: new Date().getTime(),
      reply: [],
    };

    const updateComments = (comments) => {
      return comments.map((singleComment) => {
        if (replyId === singleComment.id) {
          return {
            ...singleComment,
            reply: [...(singleComment.reply || []), newReply],
          };
        } else if (singleComment.reply?.length > 0) {
          return {
            ...singleComment,
            reply: updateComments(singleComment.reply),
          };
        }
        return singleComment;
      });
    };

    onReplyClick(null);
    setReplyValue("");
    setData((prev) => updateComments(prev));
  };

  const deleteComment = (id) => {
    const removeComment = (comments) => {
      return comments
        .map((singleComment) => {
          if (singleComment.id === id) return null;
          else if (singleComment.reply.length > 0) {
            return {
              ...singleComment,
              reply: removeComment(singleComment.reply),
            };
          }
          return singleComment;
        })
        .filter(Boolean);
    };

    setData((prev) => removeComment(prev));
  };

  return (
    <div>
      <div className="comment-container">
        <div className="single-comment">
          <div className="user-name">
            <FaUserAlt />
            {name}
          </div>
          <div className="user-comment">{userComment}</div>
          <div className="date">
            <MdAccessTimeFilled />
            {new Date(timestamp).toLocaleString()}
          </div>
        </div>
        <div className="navigators">
          <button className="add-reply" onClick={() => onReplyClick(id)}>
            Add Reply
          </button>
          <button className="delete-comment" onClick={() => deleteComment(id)}>
            Delete Comment
          </button>
        </div>
      </div>
      {replyingTo === id && (
        <div className="reply-container">
          <input
            className="reply-input"
            placeholder="Add New Reply..."
            type="text"
            value={replyValue}
            onChange={(e) => setReplyValue(e.target.value)}
          />
          <button
            className="reply-button"
            onClick={() => replyComment(replyingTo)}
          >
            Reply
          </button>
        </div>
      )}
    </div>
  );
};

const CommentList = ({ comments = [], replyingTo, onReplyClick, setData }) => {
  return (
    <div>
      {comments.map((single) => (
        <div key={single.id}>
          <Comment
            comment={single}
            setData={setData}
            replyingTo={replyingTo}
            onReplyClick={onReplyClick}
          />
          {single.reply?.length > 0 && (
            <div className="nested-comments">
              <CommentList
                setData={setData}
                comments={single.reply}
                replyingTo={replyingTo}
                onReplyClick={onReplyClick}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Comments = () => {
  const [data, setData] = useState(commentsData);
  const [replyingTo, setReplyingTo] = useState(null);

  const handleReplyClick = (id) => {
    setReplyingTo((prev) => (prev === id ? null : id));
  };

  return (
    <div className="wrapper">
      <div className="heading">Infinite Comments</div>
      <CommentList
        comments={data}
        setData={setData}
        replyingTo={replyingTo}
        onReplyClick={handleReplyClick}
      />
    </div>
  );
};

export default Comments;
