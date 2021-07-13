import { useState } from "react";
export default function Meme({ meme, setMeme }) {
    const [form, setForm] = useState({
        template_id: meme.id,
        username: "abcd11",
        password: "password@11",
        boxes: [],
    })
    return (
        <div className="meme">
            <div className="template">
                <img src={meme.url} alt={meme.id}></img>
            </div>

            <div>
                {
                    [...Array(meme.box_count)].map((_, index) => (
                        <input key={index} type="text" placeholder={`Meme Caption ${index + 1}`} onChange={(e) => {
                            const newBoxes = form.boxes;
                            newBoxes[index] = { text: e.target.value };
                            setForm({ ...form, boxes: newBoxes })
                        }}></input>
                    ))
                }
            </div>
            <div>
                <button onClick={() => {
                    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
                    form.boxes.map((box, index) => (
                        url += `&boxes[${index}][text]=${box.text}`
                    ));

                    fetch(url)
                    .then((res)=> res.json())
                    .then((body)=> {
                        if (body.success){
                            setMeme({...meme, url: body.data.url})

                        }
                    });

                }}>Generate</button>
                <button onClick={() => {
                    setMeme(null);
                }}>Template</button>
            </div>

        </div>

    )
}