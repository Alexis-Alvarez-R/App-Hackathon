interface prop {
  mensaje: string;
  onClose: () => void;
}

export default function Notification({ mensaje, onClose }: prop) {
  return (
    <div
      className="fixed top-[20%] right-[50%] [transform:translateX(50%)] bg-red-500 text-white px-4 py-2 rounded shadow-lg cursor-pointer animate-slide-in"
      onClick={onClose}
    >
      {mensaje}
    </div>
  );
}
