import {friendsImages} from "../../../utils/images.ts";

const DreamTeam = () => {
    return (
        <section className={'float-right w-1/2 row border rounded-b-3xl grid grid-cols-3 gap-1.5 mt-2 ml-2'}>
            <h2 className="text-center col-span-3 text-2xl">Dream team</h2>
            {
                friendsImages.map((img, index) =>
                    index !== 6 && index !== 8
                        ? <img  key={index} src={img} alt="img" className={'w-full'}/>
                        : index === 6
                            ? <img  key={index} src={img} alt="img" className={'w-full rounded-bl-3xl'}/>
                            : <img  key={index} src={img} alt="img" className={'w-full rounded-br-3xl'}/>
                )
            }

        </section>
    );
};

export default DreamTeam;