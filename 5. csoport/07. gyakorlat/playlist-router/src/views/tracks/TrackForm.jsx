import { useState } from "react";
import { Button, Modal, Rating } from "react-daisyui";

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
  raing: "",
  thumbnailURL: "",
  spotifyURL: "",
  chordsURL: "",
  lyricsURL: "",
};

export function TrackForm({ Dialog, handleShow, tracks, setTracks }) {
  const [formState, setFormState] = useState(defaultState)
  console.log(formState)

  const handleSave = () => {
    let maxid = 0
    for (let i = 0; i < tracks.length; i++) {
      if(maxid < tracks[i].id) maxid = tracks[i].id
    }
    setTracks([{...formState, id: ++maxid}, ...tracks])
  }
  return (
    <div className="font-sans">
      <Dialog>
        <Modal.Header className="font-bold text-lg">Add new track</Modal.Header>
        <Modal.Body className="py-4">Press ESC key or click outside to close</Modal.Body>
        
        <div className="flex flex-wrap">
          <Field size="w-1/2" label="Artist" placeholder="Bon Jovi" name="artist" formState={formState} setFormState={setFormState} />
          <Field size="w-1/2" label="Title" placeholder="It's my life" name="title" formState={formState} setFormState={setFormState} />
          <Field size="w-4/12" label="Length" placeholder="03:14" name="length" formState={formState} setFormState={setFormState} />
          <Field size="w-8/12" label="ThumbnailURL" placeholder="It's my life" name="thumbnailURL" formState={formState} setFormState={setFormState} />
          <Field size="w-6/12" label="ChordsURL" placeholder="It's my life" name="chordsURL" formState={formState} setFormState={setFormState} />
          <Field size="w-6/12" label="LyricsURL" placeholder="It's my life" name="lyricsURL" formState={formState} setFormState={setFormState} />
          <Field size="w-5/12" label="SpotifyURL" placeholder="It's my life" name="spotifyURL" formState={formState} setFormState={setFormState} />

          <div className="w-5/12 p-2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Rating</span>
              </div>
              <Rating className="rating mt-2 mb-5">
                <Rating.Item type="radio" name="rating-4" className="mask mask-star-2"  value="1" />
                <Rating.Item type="radio" name="rating-4" className="mask mask-star-2"  value="2" />
                <Rating.Item type="radio" name="rating-4" className="mask mask-star-2"  value="3"/>
                <Rating.Item type="radio" name="rating-4" className="mask mask-star-2"  value="4"/>
                <Rating.Item type="radio" name="rating-4" className="mask mask-star-2"  value="5"/>
              </Rating>
            </label>
          </div>
          <div className="w-2/12 text-center align-bottom">
            <Modal.Actions>
              <form method="dialog" className="">
                <Button onClick={handleSave} className="btn btn-primary mt-5 p-2 mr-2 flex flex-center w-20  font-bold">
                  Save
                </Button>
              </form>
            </Modal.Actions>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
