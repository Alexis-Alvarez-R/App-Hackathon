import MapView from "./MapView";

export default function Map() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-nunito font-bold text-center mb-5 bg-gradient-to-r from-naranja via-darkGreen to-lightOcean bg-clip-text text-transparent desktop:text-5xl">
        Localidades Turisticas
      </h1>
      <MapView />
    </div>
  );
}
