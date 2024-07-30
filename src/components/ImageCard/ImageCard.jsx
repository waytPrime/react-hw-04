export default function ImageCard({ img, setImgUrl }) {
  return (
    <div>
      <img src={img} alt="1" onClick={setImgUrl} width={"240"} height={"240"} />
    </div>
  );
}
