import { useEffect, useState } from "react";
import { Button, Modal } from "react-daisyui";

const Field = ({ size, label, placeholder, name, formState, setFormState }) => {

  const handleInput = (e) => {
    setFormState({
      ...formState,
      [name]: e.target.value
    })
  }

  return (
    <div className={`md:${size} w-full p-2`}>
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input value={formState[name]} onInput={handleInput} type="text" placeholder={placeholder} name={name} className="input input-bordered w-full max-w-xs" />
    </label>
  </div>
  );
};

const defaultState = {
  artist: "",
  title: "",
  length: "",
  rating: "",
  thumbnailURL: "",
  spotifyURL: "",
  chordsURL: "",
  lyricsURL: "",
};

export function TrackForm({ Dialog, open, setOpen, tracks, setTracks, edit, setEdit }) {
  const [formState, setFormState] = useState(defaultState)
  
  useEffect(()=> {
    if(edit) setFormState(edit)
  },[edit])

  const handleSave = () => {
    if(!edit) {
        setTracks([
          ...tracks,
          formState
      ])
    } else {
      const ind = tracks.findIndex(e => e.id === edit.id)
      // tracks.map(e => e.id === formState.id ? formState : e)
      setTracks([...tracks.slice(0,ind), formState, ...tracks.slice(ind+1)])
    }

    setOpen(false)
  }
  return (
    <div className="font-sans" >
      <Dialog open={open} >
        <Modal.Header className="font-bold text-lg">{edit? `Edit track: ${edit.title}` : "Add new track"}</Modal.Header>
        <Modal.Body className="py-4">Press ESC key or click outside to close</Modal.Body>
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=> {setOpen(false); setEdit(null); setFormState(defaultState)}}>✕</button>
        <div className="flex flex-wrap">
          <Field size="w-1/2" label="Artist" placeholder="Bon Jovi" name="artist" formState={formState} setFormState={setFormState}/>
          <Field size="w-1/2" label="Title" placeholder="It's my life" name="title" formState={formState} setFormState={setFormState} />
          <Field size="w-4/12" label="Length" placeholder="03:14" name="length" formState={formState} setFormState={setFormState} />
          <Field size="w-8/12" label="ThumbnailURL" placeholder="It's my life" name="thumbnailURL" formState={formState} setFormState={setFormState} />
          <Field size="w-6/12" label="ChordsURL" placeholder="It's my life" name="chordsURL" formState={formState} setFormState={setFormState} />
          <Field size="w-6/12" label="LyricsURL" placeholder="It's my life" name="lyricsURL" formState={formState} setFormState={setFormState} />
          
          <Field 
            size="w-5/12" 
            label="SpotifyURL" 
            placeholder="It's my life" 
            name="spotifyURL" 
            formState={formState} 
            setFormState={setFormState}
          />

          <div className="w-5/12 p-2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Rating</span>
              </div>
              <div className="rating mt-2 mb-5">
                <input type="radio" name="rating-4" className="mask mask-star-2"  value="1" />
                <input type="radio" name="rating-4" className="mask mask-star-2"  value="2" />
                <input type="radio" name="rating-4" className="mask mask-star-2"  value="3"/>
                <input type="radio" name="rating-4" className="mask mask-star-2"  value="4"/>
                <input type="radio" name="rating-4" className="mask mask-star-2"  value="5"/>
              </div>
            </label>
          </div>
          <div className="w-2/12 text-center align-bottom">
                <Button onClick={handleSave} className="btn btn-primary mt-5 p-2 mr-2 flex flex-center w-20  font-bold">
                  Save
                </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
