import perfilicon from "../../assets/icons/perfil.png";

interface prop {
  name: string;
  picture: string;
  email: string;
}

export default function TarjetaSaludo({ name, picture, email }: prop) {
  return (
    <div
      id="header-perfil"
      className="h-max w-full p-3.5 bg-green-300 [border:solid_black_2px] rounded-2xl desktop:pl-8"
    >
      <div className="flex flex-col gap-[20px] w-full h-max desktop:flex-row">
        <figure className="h-[90px]">
          <img
            className="h-full rounded-full"
            src={picture ? picture : perfilicon}
            alt=""
            referrerPolicy="no-referrer"
          />
        </figure>
        <div className="w-full grid gap-2 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] overflow-hidden items-center">
          <div className="flex gap-[6%] items-center ">
            <span className="text-black text-3xl font-bold tablet:w-[30%]">
              Hi🖐
            </span>

            <p className="font-nunito font-bold text-[18px] text-sky-900 tablet:hidden desktop:hidden">
              {`${name.slice(0, 16).trimEnd()}...`}
            </p>

            <p className="hidden font-nunito font-bold text-2xl text-sky-900 tablet:block desktop:hidden">
              {`${name.slice(0, 20).trimEnd()}...`}
            </p>

            <p className="hidden font-nunito font-bold text-[26px] text-sky-900 desktop:block">
              {name}
            </p>
          </div>

          <p className="font-nunito text-[14px] tablet:text-[20px] desktop:hidden">
            {email}
          </p>
        </div>
      </div>
      <p className="hidden ml-[100px] font-nunito text-[26px] desktop:block">
        {email}
      </p>
    </div>
  );
}
