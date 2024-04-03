export function PlaylistForm() {
  return (
    <details open>
      <summary>Add new playlist</summary>
      <form className="ui form container">
        <div className="ui action input field error">
          <input />
          <button className="ui primary button negative">Add</button>
        </div>
        <small>Error</small>
      </form>
    </details>
  );
}
