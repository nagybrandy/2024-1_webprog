import { exampleTracks } from "../../domain/track";
import { TrackForm } from "./TrackForm";
import { Track } from "./Track";
import { FaPlus as PlusIcon } from "react-icons/fa";
import { Modal } from "react-daisyui";
import { createContext, useEffect, useState } from "react";


export const TrackContext = createContext();

export function Tracks() {
  const {
    Dialog,
    handleShow
  } = Modal.useDialog();

  const [tracks, setTracks] = useState(JSON.parse(localStorage.getItem('tracks')) || exampleTracks);

  useEffect(()=> {
    localStorage.setItem("tracks", JSON.stringify(tracks))
  }, [tracks])

  const [edit, setEdit] = useState(null)
  const [open, setOpen] = useState(false)

  const handleDelete = (id) => {
    setTracks(tracks.filter((e)=> e.id !== id))
  }

  const handleEdit = (track) => {
    setOpen(true)
    setEdit(track)
  }

  return (
    <TrackContext.Provider value={tracks}>
      <div className="mt-5">
          <div className="join join-vertical w-full bg-base-300 shadow-xl overflow-x-hidden h-[80vh] pb-3 ">
            <div className="navbar join-item">
              <h2 className="join-item flex-1 text-2xl font-bold px-2">Tracks</h2>
              <button className="btn btn-neutral flex-none text-lg text-neutral-content" onClick={handleShow}><PlusIcon /></button>
            </div>
            <div className="overflow-y-scroll w-full join join-vertical pl-[0.6rem]  overflow-hidden">
              {tracks.map((track) => (
                  <Track track={track} key={track.id} handleDelete={handleDelete} handleEdit={handleEdit}/>
              ))}
            </div>
          </div>
          <TrackForm  Dialog={Dialog} tracks={tracks} setTracks={setTracks} open={open} setOpen={setOpen} setEdit={setEdit} edit={edit}/>
      </div>
    </TrackContext.Provider>
  );
}
