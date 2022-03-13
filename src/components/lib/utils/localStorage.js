function GetItem() {
  return JSON.parse(localStorage.getItem("bookmarks")) || [];
}

function SetItem(bookmarks) {
  const bookmark = GetItem();
  const jsonBookmarks = JSON.stringify([...bookmark, bookmarks]);
  localStorage.setItem("bookmarks", jsonBookmarks);
}

export { GetItem, SetItem };
