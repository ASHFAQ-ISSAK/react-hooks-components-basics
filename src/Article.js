import React from "react";

function Article() {
  return (
    <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration</div>
  );
}

function Comment() {
  return <div>Naturally, I agree with this article.</div>;
}

function Disclaimer() {
  return <div>It's true. I was the recource</div>;
}

function Completemessage() {
  return (
    <div>
      <Article />
      <Comment />
      <Disclaimer />
    </div>
  );
}

export default Completemessage;
