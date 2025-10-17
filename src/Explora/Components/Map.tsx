import MapView from "./MapView";

export default function Map() {
  return (
    <div className="p-10 bg-regularGreen">
      <h1 className="text-2xl font-nunito font-bold text-center mb-5 text-lightGreen desktop:text-5xl">
        Localidades Turisticas
      </h1>
      <MapView />
    </div>
  );
}
