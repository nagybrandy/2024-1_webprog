import { exampleTracks } from "../../domain/track";
import { TrackForm } from "./TrackForm";
import { Track } from "./Track";
import { FaPlus as PlusIcon } from "react-icons/fa";
import { Modal } from "react-daisyui";
import { useEffect, useState } from "react";

export function Tracks() {
  const {
    Dialog
  } = Modal.useDialog();
  const localData = JSON.parse(localStorage.getItem('tracks'))
  const [tracks, setTracks] = useState(localData || exampleTracks);
  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState(null)

  const handleDelete = (id) => {
    setTracks(tracks.filter(e => e.id !== id))
  }

  useEffect(()=> {
    localStorage.setItem('tracks', JSON.stringify(tracks))
  }, [tracks])

  const handleEdit = (track) => {
    setOpen(true)
    setEdit(track)
  }
  return (
    <div className="mt-5">
        <div className="join join-vertical w-full bg-base-300 shadow-xl overflow-x-hidden h-[80vh] pb-3 ">
          <div className="navbar join-item">
            <h2 className="join-item flex-1 text-2xl font-bold px-2">Tracks</h2>
            <button className="btn btn-neutral flex-none text-lg text-neutral-content" onClick={()=> setOpen(true)}><PlusIcon /></button>
          </div>
          <div className="overflow-y-scroll w-full join join-vertical pl-[0.6rem]  overflow-hidden">
            {tracks.map((track) => (
                <Track track={track} key={track.id} handleDelete={handleDelete} handleEdit={handleEdit}/>
            ))}
          </div>
        </div>
        <TrackForm  
          Dialog={Dialog} 
          tracks={tracks} 
          setTracks={setTracks} 
          open={open} 
          setOpen={setOpen}
          edit={edit}
          setEdit={setEdit}
        />
    </div>
  );
}
