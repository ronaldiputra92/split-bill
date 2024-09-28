function Friend({ friend, onSelectedFriend, selectedFriend }) {
  const isSelected = friend.id === selectedFriend?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p>
          <span className="red">
            Kamu Berhutang Rp.{Math.abs(friend.balance)} ke {friend.name}
          </span>
        </p>
      )}
      {friend.balance > 0 && (
        <p>
          <span className="green">
            {friend.name} Berhutang Rp.{Math.abs(friend.balance)} ke kamu
          </span>
        </p>
      )}
      {friend.balance === 0 && <p>Kamu dan {friend.name} tidak ada hutang</p>}
      <button className="button" onClick={() => onSelectedFriend(friend)}>
        {isSelected ? "Tutup" : "Pilih"}
      </button>
    </li>
  );
}

export default Friend;
