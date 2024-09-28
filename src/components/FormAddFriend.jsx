import { useState } from "react";

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?id=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);

    setName("");
    setImage("");
  }

  return (
    <form action="" className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="">1Nama</label>
      <input
        type="text"
        placeholder="Masukkan nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="">2Gambar</label>
      <input
        type="text"
        placeholder="Masukkan gambar"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button className="button" type="submit">
        Tambah
      </button>
    </form>
  );
}

export default FormAddFriend;
