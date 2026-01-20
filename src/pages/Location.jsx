import { mapSrc } from "../coordinates/Coordinates";

const Location = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <iframe
          title="Map Location"
          src={mapSrc}
          className="w-full h-[400px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Location;
