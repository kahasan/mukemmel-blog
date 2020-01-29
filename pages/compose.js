import React from 'react';

const date = new Date();
const currentDay = String(date.getDay());
const currentDate = String(date.getDate());
const currentYear = String(date.getFullYear());
const today = currentDate + '.' + currentDay + '.' + currentYear;

function Compose() {
  return (
    <form action="/post" method="post">
      <h2 type="text">{today}</h2>
      <input type="hidden" name="date" value={today} />
      <input type="text" name="newPost" placeholder="Blog Basligi" />
      <input type="text" name="newPostContent" placeholder="Blog İcerigi" />
      <input type="number" name="photoid" />
      <button type="submit">Post</button>
    </form>
  );
}

export default Compose;
